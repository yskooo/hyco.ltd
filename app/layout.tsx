import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardy & Co.",
  description: "Pioneering IT & AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
