import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cookscape — Luxury Interior Design Studio",
  description:
    "Where architecture meets living. Cookscape crafts curated residential interiors with an editorial eye — spatial planning, material curation, and turnkey delivery for the way you live.",
  keywords: [
    "luxury interior design",
    "residential interiors",
    "Cookscape",
    "spatial planning",
    "material curation",
    "turnkey delivery",
  ],
  openGraph: {
    title: "Cookscape — Luxury Interior Design Studio",
    description:
      "Where architecture meets living. Curated interiors for the way you live.",
    type: "website",
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
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#F5EDE0]">{children}</body>
    </html>
  );
}
