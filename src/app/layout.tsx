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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}

        {/* 2. Chatbot script replaced properly */}
        <Script id="chatbot-loader" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.src = "http://localhost:3001/widget.bundle.js";
              script.setAttribute('data-chatbot-id', "91670030-b568-43b9-b74d-adf53a6aebc8");
              script.async = true;
              document.body.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
