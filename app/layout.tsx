import type { Metadata, Viewport } from "next";
import { Baloo_2, Pacifico, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = "https://chez-tuyet.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chez Tuyet — Restaurant vietnamien à Caen",
    template: "%s · Chez Tuyet",
  },
  description:
    "Cuisine vietnamienne maison à Caen : phở, bún (bò bún), nems et raviolis faits maison par Tuyet. Terrasse, options végétaliennes. 23 Rue Gémare, 14000 Caen.",
  keywords: [
    "restaurant vietnamien",
    "Caen",
    "phở",
    "bún",
    "bo bun",
    "bò bún",
    "nems",
    "cuisine vietnamienne",
    "Chez Tuyet",
    "végétalien Caen",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Chez Tuyet",
    title: "Chez Tuyet — Restaurant vietnamien à Caen",
    description:
      "Phở, bún et spécialités vietnamiennes faites maison par Tuyet. Terrasse et options végétaliennes, en plein cœur de Caen.",
    images: [
      {
        url: "/images/plat-bobun.jpg",
        width: 1200,
        height: 1200,
        alt: "Bò bún de Chez Tuyet : vermicelles, bœuf, crudités et nems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chez Tuyet — Restaurant vietnamien à Caen",
    description:
      "Phở, bún et spécialités vietnamiennes faites maison. Terrasse et options végétaliennes à Caen.",
    images: ["/images/plat-bobun.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2e9c77",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${baloo.variable} ${pacifico.variable} ${nunito.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
