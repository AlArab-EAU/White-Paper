import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/whitepaper/i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlArab — Whitepaper | The Digital Future of the Arab World",
  description:
    "Official AlArab Whitepaper: a unified digital ecosystem where technology, culture, commerce, entertainment and innovation converge into a new digital geography for the Arab world. Available in 8 languages.",
  keywords: [
    "AlArab",
    "ALA",
    "Metaverse",
    "Digital Economy",
    "Arab World",
    "Blockchain",
    "Web3",
    "Whitepaper",
    "Digital Assets",
    "Tokenomics",
  ],
  authors: [{ name: "AlArab" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AlArab — The Digital Future of the Arab World",
    description:
      "Official Whitepaper. Six pillars. Four digital districts. One ecosystem. Available in 8 languages.",
    url: "https://whitepaper.alarab-defi.com",
    siteName: "AlArab Whitepaper",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlArab — Whitepaper",
    description: "The Digital Future of the Arab World",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
