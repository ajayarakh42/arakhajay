import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Arakh | Creative Developer",
  description: "High-end scrollytelling portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Next.js Optimized Chatbot Script */}
        <Script
          src="http://localhost:3001/widget.bundle.js"
          data-chatbot-id="b5b9f7d4-dbbb-44ab-b165-1e6dad2e4d95"
          strategy="afterInteractive" // Loads once the page is interactive
        />
      </body>
    </html>
  );
}
