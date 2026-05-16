import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noviwon.com"),
  title: {
    default: "Noviwon | Thermal Paper Rolls & Smart Supply Chain Solutions",
    template: "%s | Noviwon",
  },
  description:
    "Noviwon supplies thermal paper rolls, POS receipt rolls, thermal labels and industrial paper materials, backed by smart sourcing and global supply chain systems.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/noviwon-mark.svg",
    shortcut: "/noviwon-mark.svg",
    apple: "/noviwon-mark.svg",
  },
  keywords: [
    "thermal paper rolls supplier",
    "POS receipt rolls wholesale",
    "thermal label rolls",
    "custom printed thermal paper",
    "ATM paper rolls",
    "industrial paper materials",
    "China thermal paper manufacturer",
    "smart supply chain solutions",
  ],
  openGraph: {
    title: "Noviwon | Thermal Paper Rolls & Smart Supply Chain Solutions",
    description:
      "Thermal paper rolls, labels, industrial materials and supply chain systems for global B2B buyers.",
    locale: "en_US",
    siteName: "Noviwon",
    type: "website",
    url: "https://noviwon.com",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Thermal paper rolls, labels, industrial materials and supply chain systems for global B2B buyers.",
    title: "Noviwon | Thermal Paper Rolls & Smart Supply Chain Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
