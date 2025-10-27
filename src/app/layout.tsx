import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sospneus74.fr"),
  title: {
    default: "SOS PNEUS 74 – Dépannage, montage & équilibrage à domicile (Annemasse)",
    template: "%s • SOS PNEUS 74",
  },
  description:
    "Dépannage 24/7, réparation de crevaison, montage/équilibrage, permutation été/hiver et fourniture de pneus à domicile. Intervention Annemasse, Haute-Savoie et frontière.",
  keywords: [
    "pneu annemasse",
    "dépannage pneu annemasse",
    "crevaison",
    "montage pneu",
    "équilibrage",
    "permutation pneu hiver été",
    "pneu domicile",
    "haute-savoie",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://sospneus74.fr",
    siteName: "SOS PNEUS 74",
    title: "SOS PNEUS 74 – Dépannage & montage 24/7",
    description:
      "Réparation crevaison, montage, équilibrage, permutation saisonnière et fourniture de pneus – intervention sur Annemasse et la frontière.",
    images: [
      { url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "SOS PNEUS 74 – Atelier mobile à Annemasse" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS PNEUS 74 – Dépannage & montage 24/7",
    description:
      "Réparation crevaison, montage, équilibrage, permutation saisonnière et fourniture de pneus – intervention sur Annemasse et la frontière.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "https://sospneus74.fr",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
