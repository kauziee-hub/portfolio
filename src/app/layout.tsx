import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "AI/ML engineer and full-stack developer from Chennai. Builder of Vigil, OILINTELLIGENCE, Locah, UniTask and VitaSense. CS at VIT Chennai, BS Data Science at IIT Madras.";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the deployed address so link previews resolve.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3210"),
  title: "Kausik Ganapathy Hari · AI/ML Engineer & Full-stack Developer",
  description,
  openGraph: {
    title: "Kausik Ganapathy Hari",
    description,
    type: "website",
    images: [{ url: "/images/profile/kausik-studio.webp", width: 1400, height: 1355 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1eb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
