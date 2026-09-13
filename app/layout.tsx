import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased text-slate-900 bg-white selection:bg-[#0F3383] selection:text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
