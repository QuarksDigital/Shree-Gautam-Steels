import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import MagneticCursor from "@/components/cursor/MagneticCursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Gautam Enterprises — Stainless Steel, Engineered Since 1981",
  description:
    "B2B manufacturer of premium stainless steel cookware, serveware, storage, thalis and spice boxes. Wazirpur, New Delhi. OEM & private-label, bulk supply, export-ready.",
  keywords: [
    "stainless steel manufacturer",
    "B2B cookware supplier",
    "triply cookware",
    "masala dabba manufacturer",
    "bhojan thali wholesale",
    "OEM stainless steel India",
  ],
  openGraph: {
    title: "Shree Gautam Enterprises — Stainless Steel, Engineered Since 1981",
    description:
      "Premium stainless steel manufacturing for B2B, wholesale and export. Since 1981.",
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
      className={`${fraunces.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <MagneticCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
