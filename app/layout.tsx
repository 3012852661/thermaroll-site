import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noviwon | Industrial Materials & Smart Supply Chain Solutions",
  description:
    "Noviwon by Shenzhen Nuowei Advanced Materials Co., Ltd. delivers industrial materials, SaaS systems and smart global supply chain solutions.",
  icons: {
    icon: "/noviwon-mark.svg",
    shortcut: "/noviwon-mark.svg",
    apple: "/noviwon-mark.svg",
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
