"use client";

import { Card, CardBody, Stack, Heading, Text, Box, Flex, Button, Divider } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function ActionCard() {
  return (
    <Card 
      bg="gray.900" 
      color="white"
      shadow="xl" 
      rounded="3xl" 
      h="full"
    >
      <CardBody p={8}>
        <Stack spacing={6} h="full" justify="space-between">
          <Box>
            <Heading size="md" mb={2}>Get Tickets</Heading>
            <Text fontSize="sm" color="gray.400">
              Entry fee is just 0.1 STX
            </Text>
          </Box>

          <Box bg="whiteAlpha.100" p={4} rounded="2xl" border="1px solid" borderColor="whiteAlpha.200">
             <Flex justify="space-between" align="center" mb={2}>
                <Text fontSize="sm" color="gray.400">Amount</Text>
                <Text fontSize="xl" fontWeight="bold">1</Text>
             </Flex>
             <Divider borderColor="whiteAlpha.200" my={2} />
             <Flex justify="space-between" align="center">
                <Text fontSize="sm" color="gray.400">Total</Text>
                <Text fontSize="sm" fontWeight="bold">0.1 STX</Text>
             </Flex>
          </Box>

          <Button 
            size="lg" 
            bg="brand.500" 
            color="white" 
            _hover={{ bg: "brand.400", transform: "scale(1.02)" }}
            _active={{ transform: "scale(0.98)" }} // <--- FIXED HERE (Added underscore)
            transition="all 0.2s"
            rightIcon={<ArrowForwardIcon />}
            rounded="xl"
            h="3.5rem"
          >
            Enter Raffle
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}