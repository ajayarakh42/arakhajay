import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'; // 1. Add this import

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
      <body className={`${inter.variable} antialiased`}>
        {children}

        {/* 2. Chatbot script added here, inside the main body */}
        <Script
          src="http://localhost:3001/widget.bundle.js"
          data-chatbot-id="b5b9f7d4-dbbb-44ab-b165-1e6dad2e4d95"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
