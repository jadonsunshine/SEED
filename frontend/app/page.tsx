"use client";

import { 
  Box, Container, Grid, Heading, Text, Card, CardBody, 
  Stack, Badge, Flex, Button, Stat, StatLabel, StatNumber, 
  StatHelpText, Divider 
} from "@chakra-ui/react";
import ConnectWallet from "../components/ConnectWallet";
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      
      {/* 1. Header / Navbar */}
      <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={2}>
              <Box bg="brand.500" w={8} h={8} borderRadius="md" />
              <Heading size="md" color="gray.800">Daily STX Raffle</Heading>
            </Flex>
            <ConnectWallet />
          </Flex>
        </Container>
      </Box>

      {/* 2. Main Content */}
      <Container maxW="container.lg" py={10}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          
          {/* LEFT COLUMN: Status & Pot */}
          <Stack spacing={6}>
            <Card variant="outline" borderColor="gray.200" shadow="sm">
              <CardBody>
                <Stack spacing={4}>
                  <Flex justify="space-between" align="center">
                    <Badge colorScheme="green" px={2} py={1} borderRadius="full">
                      ● Live Round
                    </Badge>
                    <Text fontSize="sm" color="gray.500">Round #142</Text>
                  </Flex>
                  
                  <Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="bold" textTransform="uppercase">
                      Current Pot
                    </Text>
                    <Heading size="2xl" color="gray.800" mt={2}>
                      1,500 STX
                    </Heading>
                    <Text fontSize="md" color="brand.500" mt={1}>
                      ≈ $2,850 USD
                    </Text>
                  </Box>

                  <Divider />

                  <Grid templateColumns="1fr 1fr" gap={4}>
                    <Stat>
                      <StatLabel color="gray.500">Time Remaining</StatLabel>
                      <StatNumber fontSize="lg">18h 20m</StatNumber>
                    </Stat>
                    <Stat>
                      <StatLabel color="gray.500">Total Tickets</StatLabel>
                      <StatNumber fontSize="lg">15,000</StatNumber>
                    </Stat>
                  </Grid>
                </Stack>
              </CardBody>
            </Card>

            {/* Instructions Card */}
            <Card variant="outline" bg="gray.50">
              <CardBody>
                <Stack spacing={3}>
                  <Heading size="sm">How it works</Heading>
                  <Flex align="center" gap={2}>
                    <CheckCircleIcon color="brand.500" />
                    <Text fontSize="sm">Buy a ticket for 0.1 STX</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <TimeIcon color="brand.500" />
                    <Text fontSize="sm">Wait for the daily draw</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Box as="span" fontSize="lg">🏆</Box>
                    <Text fontSize="sm">Winner takes 95% of the pot!</Text>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Stack>

          {/* RIGHT COLUMN: Action Area */}
          <Stack spacing={6}>
            <Card variant="outline" borderColor="brand.500" borderWidth="2px" shadow="md">
              <CardBody>
                <Stack spacing={6}>
                  <Box>
                    <Heading size="md" mb={2}>Buy Tickets</Heading>
                    <Text fontSize="sm" color="gray.600">
                      Increase your chances by buying multiple tickets.
                    </Text>
                  </Box>

                  {/* Placeholder for Ticket Input */}
                  <Box bg="gray.50" p={4} borderRadius="md" border="1px solid" borderColor="gray.200">
                    <Flex justify="space-between" mb={2}>
                      <Text fontWeight="bold">Ticket Price</Text>
                      <Text fontWeight="bold">0.1 STX</Text>
                    </Flex>
                    <Divider my={2} />
                    <Flex justify="space-between" align="center">
                      <Text>Amount: 1</Text>
                      <Text fontWeight="bold" fontSize="lg">0.1 STX</Text>
                    </Flex>
                  </Box>

                  <Button 
                    size="lg" 
                    bg="brand.500" 
                    color="white" 
                    _hover={{ bg: "brand.600" }}
                    w="full"
                    h="3.5rem"
                    fontSize="xl"
                  >
                    Enter Raffle
                  </Button>
                </Stack>
              </CardBody>
            </Card>

            {/* My Tickets Section */}
            <Card variant="outline">
              <CardBody>
                <Heading size="sm" mb={4}>My Tickets</Heading>
                <Box textAlign="center" py={6} color="gray.400">
                  <Text>No tickets purchased yet.</Text>
                  <Text fontSize="xs">Connect wallet to view</Text>
                </Box>
              </CardBody>
            </Card>
          </Stack>

        </Grid>
      </Container>
    </Box>
  );
}