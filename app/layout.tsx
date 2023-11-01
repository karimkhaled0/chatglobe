import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/header/NavBar";
import TRPCProvider from "@/components/providers/TRPCProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGlobe",
  description: "Chat with your documents in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <TRPCProvider>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <NavBar />
          {children}
        </body>
      </TRPCProvider>
    </html>
  );
}
