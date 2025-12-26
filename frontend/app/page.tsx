"use client";

import { Box, Container, Grid, GridItem, Flex, Heading, Text } from "@chakra-ui/react";
import ConnectWallet from "../components/ConnectWallet";
import PotCard from "../components/dashboard/PotCard";
import ActionCard from "../components/dashboard/ActionCard";
import StatsCard from "../components/dashboard/StatsCard";

export default function Home() {
  return (
    <Box minH="100vh" bg="#FAFAFA" pb={20}>
      
      {/* Navbar: "OPENSEASON" Logo */}
      <Box py={8} px={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            {/* THE NEW LOGO */}
            <Heading 
              fontFamily="var(--font-montserrat)" 
              fontWeight="900" 
              fontSize="2xl" 
              letterSpacing="tighter"
              color="black"
            >
              OPENSEASON
            </Heading>
            
            <ConnectWallet />
          </Flex>
        </Container>
      </Box>

      {/* Main Grid */}
      <Container maxW="container.lg" mt={2}>
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
          templateRows={{ base: "auto", md: "repeat(2, 1fr)" }}   
          gap={6}
        >
          {/* Pot Card */}
          <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
            <PotCard />
          </GridItem>

          {/* Action Card */}
          <GridItem colSpan={{ base: 1, md: 1 }} rowSpan={{ base: 1, md: 2 }}>
            <ActionCard />
          </GridItem>

          {/* Stats Strip */}
          <GridItem colSpan={{ base: 1, md: 3 }}>
             <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={6}>
                <StatsCard />
             </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}