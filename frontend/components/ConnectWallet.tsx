"use client";

import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"; 
import { showConnect } from "@stacks/connect";
import { userSession } from "../lib/auth"; 
import { useState, useEffect } from "react";

export default function ConnectWallet() {
  const [mounted, setMounted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (userSession.isUserSignedIn()) {
      setIsSignedIn(true);
    }
  }, []);

  const connect = () => {
    showConnect({
      appDetails: {
        name: "STX Raffle",
        icon: window.location.origin + "/favicon.ico",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload();
      },
    });
  };

  const disconnect = () => {
    userSession.signUserOut("/");
    setIsSignedIn(false);
  };

  if (!mounted) return null;

  if (isSignedIn) {
    return (
      <Button 
        onClick={disconnect} 
        colorScheme="red" 
        variant="outline" 
        size="sm"
      >
        Disconnect
      </Button>
    );
  }

  return (
    <Button 
      onClick={connect} 
      bg="brand.500" 
      color="white" 
      _hover={{ bg: 'brand.600' }}
      rightIcon={<ArrowForwardIcon />} 
      shadow="md"
    >
      Connect Wallet
    </Button>
  );
}