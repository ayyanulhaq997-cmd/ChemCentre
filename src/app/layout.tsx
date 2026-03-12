import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AgeGate from "@/components/age-gate/AgeGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChemCentrum | Premium Research Chemicals",
  description: "High-performance clone of ChemCentrum.nl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-[#222222] antialiased`}>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
