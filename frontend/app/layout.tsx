import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google"; 
import "./globals.css";
import { Providers } from "./providers";


const roboto = Roboto_Flex({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto", 
});

export const metadata: Metadata = {
  title: "Daily STX Raffle",
  description: "Try your luck on the Stacks Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      {/* 3. Apply the font class to the body */}
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}