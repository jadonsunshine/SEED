"use client";

import { Box, Container, Grid, GridItem, Flex, Heading, Text } from "@chakra-ui/react";
import ConnectWallet from "../components/ConnectWallet";
import PotCard from "../components/dashboard/PotCard";
import ActionCard from "../components/dashboard/ActionCard";
import StatsCard from "../components/dashboard/StatsCard";

export default function Home() {
  return (
    <Box minH="100vh" bg="#FAFAFA" pb={20}>
      
      {/* Navbar - Kept simple and clean */}
      <Box py={6} px={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={3}>
              <Box bg="brand.500" w={10} h={10} rounded="xl" shadow="lg" />
              <Box>
                <Heading size="sm" color="gray.800">Daily Raffle</Heading>
                <Text fontSize="xs" color="gray.500">Stacks Testnet</Text>
              </Box>
            </Flex>
            <ConnectWallet />
          </Flex>
        </Container>
      </Box>

      {/* Main Bento Grid */}
      <Container maxW="container.lg" mt={4}>
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // 3 Columns on Desktop
          templateRows={{ base: "auto", md: "repeat(2, 1fr)" }}    // 2 Rows on Desktop
          gap={6}
        >
          
          {/* 1. Pot Card: Large Square (Spans 2 cols, 2 rows) */}
          <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
            <PotCard />
          </GridItem>

          {/* 2. Action Card: Tall Vertical (Spans 1 col, 2 rows) */}
          <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 2 }}>
            <ActionCard />
          </GridItem>

          {/* 3. Stats Strip (Spans full width at bottom) */}
          <GridItem colSpan={{ base: 1, md: 3 }}>
             <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
                <StatsCard />
                {/* You can duplicate StatsCard or add different variants here later */}
             </Grid>
          </GridItem>

        </Grid>
      </Container>
    </Box>
  );
}