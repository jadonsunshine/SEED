"use client";

import { 
  Card, CardBody, VStack, Heading, Text, Button, 
  NumberInput, NumberInputField, useToast, Flex 
} from "@chakra-ui/react";
import { useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { PostConditionMode } from "@stacks/transactions";
import { userSession } from "../../lib/auth";
import { NETWORK_CONFIG, NetworkKey } from "../../lib/networkConfig"; // Import your new config

export default function ActionCard() {
  // 1. STATE: Default to Mainnet (or Testnet if you prefer safety first)
  const [currentNetwork, setCurrentNetwork] = useState<NetworkKey>("mainnet");
  
  // 2. CONFIG: Get the correct address/network based on state
  const config = NETWORK_CONFIG[currentNetwork];

  const { doContractCall } = useConnect();
  const toast = useToast();

  const TICKET_PRICE = 0.1; 

  const handleEnterRaffle = async () => {
    if (!userSession.isUserSignedIn()) {
      toast({ status: "error", title: "Connect Wallet first!", isClosable: true });
      return;
    }

    await doContractCall({
      // 🟢 DYNAMIC: Uses the network from the toggle
      network: config.network,
      anchorMode: 1,
      
      // 🟢 DYNAMIC: Uses the address from the toggle
      contractAddress: config.contractAddress,
      contractName: config.contractName,
      
      functionName: "buy-ticket", 
      functionArgs: [], 

      postConditionMode: PostConditionMode.Allow,
      onFinish: (data: any) => {
        // 🟢 DYNAMIC: Explorer link matches the network
        const explorerUrl = `https://explorer.hiro.so/txid/${data.txId}?chain=${currentNetwork}`;
        
        toast({
          title: "Transaction Sent!",
          description: `View on ${config.label}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        console.log("Tx ID:", data.txId);
      },
      onCancel: () => {
        toast({ title: "Transaction Cancelled", status: "info" });
      },
    });
  };

  return (
    <Card bg="gray.900" color="white" h="full" rounded="3xl" shadow="xl">
      <CardBody display="flex" flexDirection="column" justifyContent="center" p={8}>
        <VStack spacing={6} align="stretch">
          
          {/* --- NETWORK TOGGLE --- */}
          <Flex bg="gray.800" p={1} rounded="lg" mb={2}>
            <Button 
              size="sm" 
              flex={1}
              colorScheme={currentNetwork === "mainnet" ? "orange" : "gray"}
              variant={currentNetwork === "mainnet" ? "solid" : "ghost"}
              onClick={() => setCurrentNetwork("mainnet")}
            >
              Mainnet
            </Button>
            <Button 
              size="sm" 
              flex={1}
              colorScheme={currentNetwork === "testnet" ? "purple" : "gray"}
              variant={currentNetwork === "testnet" ? "solid" : "ghost"}
              onClick={() => setCurrentNetwork("testnet")}
            >
              Testnet
            </Button>
          </Flex>

          <Heading size="md" color="white">
            Enter the Raffle
          </Heading>

          <Text fontSize="sm" color="gray.400">
            Current Round Ticket Price ({config.label}): <br/> 
            <Text as="span" color="brand.400">1 Ticket = {TICKET_PRICE} STX</Text>
          </Text>

          <NumberInput 
            min={1} 
            max={1} 
            value={1} 
            isDisabled={true} 
            variant="filled"
          >
            <NumberInputField bg="gray.800" color="white" _hover={{ bg: "gray.700" }} />
          </NumberInput>

          <Text fontSize="xs" fontWeight="bold" textAlign="right" color="gray.500">
            TOTAL: {TICKET_PRICE} STX
          </Text>

          {/* Dynamic Button Text */}
          <Button 
            size="lg" 
            colorScheme="green" 
            onClick={handleEnterRaffle}
          >
            Buy Ticket ({config.label})
          </Button>

        </VStack>
      </CardBody>
    </Card>
  );
}