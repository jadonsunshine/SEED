'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-montserrat), sans-serif',
    body: 'var(--font-montserrat), sans-serif', // Applied globally
  },
  colors: {
    brand: {
      500: '#10B981', 
      600: '#059669',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#FAFAFA',
        color: '#1A1A1D',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}