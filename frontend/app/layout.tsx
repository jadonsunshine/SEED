import type { Metadata } from "next";
import { Montserrat, Noto_Sans } from "next/font/google"; // New Fonts
import "./globals.css";
import { Providers } from "./providers";

// 1. Configure Montserrat (For Headings/Logo)
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"], // Extra bold for the logo
});

// 2. Configure Noto Sans (For Body text)
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OPENSEASON",
  description: "Daily STX Raffle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Inject both variables
    <html lang="en" className={`${montserrat.variable} ${notoSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}