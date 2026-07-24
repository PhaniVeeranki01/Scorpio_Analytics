import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = { title: "Scorpio Analytics — Build the Advantage Next", description: "Software, AI automation, digital growth, and commerce solutions for ambitious businesses.", icons: { icon: "/scorpio-logo.png", shortcut: "/scorpio-logo.png", apple: "/scorpio-logo.png" }, openGraph: { title: "Scorpio Analytics — Build the Advantage Next", description: "Software, AI, growth, and commerce—designed as one connected engine.", type: "website" }, twitter: { card: "summary_large_image" } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){ return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>; }

