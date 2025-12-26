"use client";

import { Card, CardBody, Stack, Flex, Badge, Text, Heading, Box, Progress, keyframes } from "@chakra-ui/react";

// 1. Define the "Breathing" Animation
const pulseGlow = keyframes`
  0% { text-shadow: 0 0 0px rgba(16, 185, 129, 0); transform: scale(1); }
  50% { text-shadow: 0 0 20px rgba(16, 185, 129, 0.4); transform: scale(1.02); }
  100% { text-shadow: 0 0 0px rgba(16, 185, 129, 0); transform: scale(1); }
`;

export default function PotCard() {
  // 2. Create the animation string
  const animation = `${pulseGlow} 3s infinite ease-in-out`;

  return (
    <Card 
      bg="white" 
      border="1px solid" 
      borderColor="gray.200" 
      shadow="xl" 
      rounded="3xl" 
      h="full"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle Top Border Accent (Like the Hiro Explorer 'Stacking' card) */}
      <Box position="absolute" top={0} left={0} right={0} h="4px" bg="brand.500" />

      <CardBody p={8}>
        <Stack spacing={8} justify="center" h="full">
          
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Badge 
              colorScheme="green" 
              variant="solid" 
              px={3} py={1} 
              rounded="full" 
              fontSize="xs"
              letterSpacing="wider"
            >
              ● LIVE ROUND
            </Badge>
            <Text fontSize="sm" color="gray.400" fontWeight="bold">#142</Text>
          </Flex>
          
          {/* Main Pot Amount with Animation */}
          <Box textAlign="center" py={4}>
            <Text fontSize="xs" color="gray.400" fontWeight="bold" letterSpacing="widest" textTransform="uppercase" mb={2}>
              Current Prize Pool
            </Text>
            
            {/* The Breathing Number */}
            <Heading 
              size="4xl" 
              color="gray.800" 
              fontWeight="900" 
              letterSpacing="tight"
              animation={animation} // <--- Animation Applied Here
              cursor="default"
            >
              1,500 STX
            </Heading>
            
            <Text fontSize="lg" color="brand.500" fontWeight="bold" mt={2}>
              ≈ $2,850 USD
            </Text>
          </Box>

          {/* Footer Stats */}
          <Box>
            <Flex justify="space-between" mb={2} px={1}>
              <Text fontSize="xs" fontWeight="bold" color="gray.400">CLOSING IN</Text>
              <Text fontSize="xs" fontWeight="bold" color="brand.600">18H 20M</Text>
            </Flex>
            <Progress 
              value={40} 
              size="sm" 
              colorScheme="green" 
              rounded="full" 
              bg="gray.100" 
              hasStripe 
              isAnimated 
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}