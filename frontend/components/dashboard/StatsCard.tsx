"use client";

import { Card, CardBody, Flex, Box, Text, Icon } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

export default function StatsCard() {
  return (
    <Card 
      bg="white" 
      border="1px solid" 
      borderColor="gray.100" 
      shadow="lg" 
      rounded="3xl"
    >
      <CardBody p={6}>
        <Flex align="center" gap={4}>
          <Box p={3} bg="brand.50" rounded="2xl" color="brand.500">
             <StarIcon boxSize={5} />
          </Box>
          <Box>
            <Text fontSize="xs" color="gray.400" fontWeight="bold" textTransform="uppercase">
              Your Entries
            </Text>
            <Text fontSize="xl" fontWeight="bold">0 Tickets</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}