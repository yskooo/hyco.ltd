import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYCO Group | One Company. Four Ventures.",
  description: "HYCO Group — One Company. Four Ventures. Deploying Servicio.AI, ElectrifAI PH, LeasifAI, and BerdEV across Southeast Asia.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} antialiased text-slate-900 bg-white selection:bg-[#0F3383] selection:text-white`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
