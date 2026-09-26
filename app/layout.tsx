import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crestview Chambers | Premier Corporate & Commercial Law Firm",
  description:
    "Crestview Chambers is a premier global law firm providing sophisticated counsel in cross-border M&A, high-stakes dispute resolution, financial regulation, and sovereign wealth advisory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
