import type { Metadata, Viewport } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Condensed display face for headings, as in the reference layout
const heading = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const description =
  "AI/ML engineer and full-stack developer from Chennai. Third-year Computer Science at VIT Chennai and BS Data Science at IIT Madras. Builder of Vigil, OILINTELLIGENCE, Locah, UniTask and VitaSense.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the deployed address so link previews resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3210"),
  title: "Kausik Ganapathy Hari · AI/ML Engineer & Full-stack Developer",
  description,
  openGraph: {
    title: "Kausik Ganapathy Hari",
    description,
    type: "website",
    images: [{ url: "/images/profile/kausik-portrait.webp", width: 1086, height: 1448 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e4e2db",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
