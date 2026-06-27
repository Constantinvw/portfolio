import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Constantin von Wuthenau",
  description: "I design and build robots — for racing oceans, exploring underwater, and flying autonomously.",
  openGraph: {
    title: "Constantin von Wuthenau",
    description: "I design and build robots — for racing oceans, exploring underwater, and flying autonomously.",
    url: "https://constantin.wuthenau.de",
    siteName: "Constantin von Wuthenau",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Constantin von Wuthenau",
    description: "I design and build robots — for racing oceans, exploring underwater, and flying autonomously.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
