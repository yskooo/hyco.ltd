import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardy&Co. Group | One Company. Four Ventures.",
  description: "Hardy&Co. Group — One Company. Four Ventures. Deploying Servicio.AI, ElectrifAI PH, LeasifAI, and BerdEV across Southeast Asia.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >  <Layout>{children}</Layout>
      </body>
    </html>
  );
}
