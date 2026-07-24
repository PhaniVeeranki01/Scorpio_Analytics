import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://scorpioanalytics.com"),
  title: "Scorpio Analytics | Software, AI Automation & Digital Solutions",
  description: "Scorpio Analytics builds software, SaaS products, AI automation, data solutions, digital growth systems, and e-commerce experiences for ambitious businesses.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/scorpio-logo.png", shortcut: "/scorpio-logo.png", apple: "/scorpio-logo.png" },
  openGraph: { title: "Scorpio Analytics | Building What Comes Next", description: "Software, AI automation, data, digital growth, and commerce solutions built as one connected business engine.", url: "https://scorpioanalytics.com/", siteName: "Scorpio Analytics", type: "website" },
  twitter: { card: "summary_large_image", title: "Scorpio Analytics | Building What Comes Next", description: "Software, AI automation, data, digital growth, and commerce solutions." },
};
const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "Scorpio Analytics", url: "https://scorpioanalytics.com/", logo: "https://scorpioanalytics.com/scorpio-logo.png", email: "support@scorpioanalytics.com", telephone: "+91 7997777886", sameAs: ["https://www.linkedin.com/company/142884752/"] };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){ return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/></body></html>; }