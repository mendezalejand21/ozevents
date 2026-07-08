import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";
import { SiteShell } from "@/components/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ozeventservices.com"),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Premium event security and staffing in Enugu. Professional guards, bodyguards, bouncers, ushers, MC/DJ services, photography, and rapid-response safety planning for events of any size.",
  keywords: [
    "OZ Event Services",
    "event security",
    "security guards",
    "bodyguards",
    "bouncers",
    "door control",
    "ushers",
    "guest services",
    "MC",
    "DJ",
    "event photography",
    "Enugu",
    "Nigeria",
  ],
  icons: {
    icon: [{ url: "/icon.png" }],
    shortcut: [{ url: "/icon.png" }],
    apple: [{ url: "/icon.png" }],
  },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium event security and staffing in Enugu. Your Safety • Our Priority.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Premium event security and staffing in Enugu. Your Safety • Our Priority.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-oz-bg text-oz-text">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
