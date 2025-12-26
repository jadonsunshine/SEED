'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-roboto), sans-serif',
    body: 'var(--font-roboto), sans-serif',
  },
  colors: {
    brand: {
      500: '#27c48fff', 
      600: '#059669',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#FAFAFA',
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}