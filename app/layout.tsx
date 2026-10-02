import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYCO Group | Transformative AI & Intelligent Infrastructure",
  description: "HYCO Group builds AI that matters, for people who deserve it. Deploying transformative AI and intelligent infrastructure across four high-impact ventures.",
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
        className={`${bricolage.variable} ${dmSans.variable} ${dmMono.variable} antialiased text-slate-900 bg-white selection:bg-[#0F3383] selection:text-white`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
