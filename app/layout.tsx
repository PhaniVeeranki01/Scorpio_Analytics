import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://scorpioanalytics.com"),
  applicationName: "Scorpio Analytics",
  title: "Scorpio Analytics | Software, AI Automation & Digital Solutions",
  description: "Scorpio Analytics builds software, SaaS products, AI automation, data solutions, digital growth systems, and e-commerce experiences for ambitious businesses.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/favicon-96.png", sizes: "96x96", type: "image/png" }, { url: "/favicon-192.png", sizes: "192x192", type: "image/png" }], shortcut: "/favicon-96.png", apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] }, manifest: "/site.webmanifest",
  openGraph: { title: "Scorpio Analytics | Building What Comes Next", description: "Software, AI automation, data, digital growth, and commerce solutions built as one connected business engine.", url: "https://scorpioanalytics.com/", siteName: "Scorpio Analytics", type: "website" },
  twitter: { card: "summary_large_image", title: "Scorpio Analytics | Building What Comes Next", description: "Software, AI automation, data, digital growth, and commerce solutions." },
};
const structuredData = { "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", "@id": "https://scorpioanalytics.com/#website", url: "https://scorpioanalytics.com/", name: "Scorpio Analytics", alternateName: "Scorpio Analytics India", publisher: { "@id": "https://scorpioanalytics.com/#organization" } }, { "@type": "Organization", "@id": "https://scorpioanalytics.com/#organization", name: "Scorpio Analytics", url: "https://scorpioanalytics.com/", logo: { "@type": "ImageObject", url: "https://scorpioanalytics.com/favicon-192.png", width: 192, height: 192 }, email: "support@scorpioanalytics.com", sameAs: ["https://www.linkedin.com/company/142884752/"] }] };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){ return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>; }