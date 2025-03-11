import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "../styles/HeroBubbles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "Aviram Yagena",
  description:
    "Personal portfolio of Aviram Yagena, showcasing expertise in trading systems, game development, and AI integration.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {children}
      </body>
    </html>
  );
}



import './globals.css'