"use client";

import { Card, CardBody, Stack, Flex, Badge, Text, Heading, Box, Progress, keyframes } from "@chakra-ui/react";

// 1. The Shimmer Animation
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// 2. The Ticker Animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export default function PotCard() {
  // Create the gradient text effect
  const shimmerAnimation = `${shimmer} 3s linear infinite`;
  const scrollAnimation = `${scroll} 20s linear infinite`;

  return (
    <Card 
      bg="white" 
      border="1px solid" 
      borderColor="gray.200" 
      shadow="xl" 
      rounded="3xl" 
      h="full"
      overflow="hidden"
      position="relative"
    >
      <CardBody p={0}> {/* Remove padding to let ticker touch edges */}
        
        {/* Main Content Area */}
        <Stack spacing={8} justify="center" h="full" p={8} pb={16}>
          
          {/* Header */}
          <Flex justify="space-between" align="center">
            <Badge 
              colorScheme="green" variant="solid" 
              px={3} py={1} rounded="full" fontSize="xs" letterSpacing="wider"
            >
              ● LIVE
            </Badge>
            <Text fontSize="sm" color="gray.400" fontWeight="bold">#142</Text>
          </Flex>
          
          {/* The Shimmering Pot Value */}
          <Box textAlign="center">
            <Text fontSize="xs" color="gray.400" fontWeight="800" letterSpacing="widest" textTransform="uppercase" mb={1}>
              Current Prize Pool
            </Text>
            
            <Heading 
              size="4xl" 
              fontWeight="900" 
              letterSpacing="tight"
              bgGradient="linear(to-r, gray.800, gray.500, gray.800)" 
              bgClip="text"
              backgroundSize="200% auto"
              animation={shimmerAnimation}
            >
              1,500 STX
            </Heading>
            
            <Text fontSize="xl" color="brand.500" fontWeight="bold" mt={2}>
              ≈ $2,850 USD
            </Text>
          </Box>

          {/* Digital Countdown */}
          <Flex justify="space-between" align="center" bg="gray.50" p={4} rounded="2xl">
            <Text fontSize="xs" fontWeight="bold" color="gray.400">CLOSING IN</Text>
            <Text fontFamily="monospace" fontSize="xl" fontWeight="bold" color="gray.800">
              18 : 20 : 45
            </Text>
          </Flex>
        </Stack>

        {/* 3. The Live Ticker Footer */}
        <Box 
          position="absolute" bottom={0} left={0} right={0} 
          h="12" bg="gray.900" color="white" 
          overflow="hidden" display="flex" alignItems="center"
        >
          <Box whiteSpace="nowrap" animation={scrollAnimation} fontSize="xs" fontWeight="bold">
            <Text as="span" mx={4}>🎟️ ST6X...9NN8 bought 5 tickets</Text>
            <Text as="span" mx={4} color="brand.500">•</Text>
            <Text as="span" mx={4}>🎟️ SP3F...22A1 bought 10 tickets</Text>
            <Text as="span" mx={4} color="brand.500">•</Text>
            <Text as="span" mx={4}>🏆 ST1P...44K9 won Round #141 (950 STX)</Text>
             <Text as="span" mx={4} color="brand.500">•</Text>
            <Text as="span" mx={4}>🎟️ ST3G...99L1 bought 1 ticket</Text>
          </Box>
        </Box>

      </CardBody>
    </Card>
  );
}