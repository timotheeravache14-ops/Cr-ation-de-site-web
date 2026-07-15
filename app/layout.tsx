import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://lapergola-hermanville.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Pergola — Bar à tapas & Cave à Hermanville-sur-Mer",
    template: "%s · La Pergola",
  },
  description:
    "Bar à tapas et cave au cœur d'Hermanville-sur-Mer. Tapas maison, planches, cocktails et une cour privée avec terrain de pétanque. Ouvert du lundi au samedi.",
  keywords: [
    "bar à tapas",
    "Hermanville-sur-Mer",
    "restaurant Hermanville",
    "cocktails",
    "cave à vin",
    "tapas maison",
    "pétanque",
    "La Pergola",
  ],
  authors: [{ name: "La Pergola" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "La Pergola",
    title: "La Pergola — Bar à tapas & Cave à Hermanville-sur-Mer",
    description:
      "Tapas maison, planches et cocktails dans une ambiance conviviale. Cour privée et terrain de pétanque à Hermanville-sur-Mer.",
    images: [
      {
        url: "/images/ambiance-cocktails.jpg",
        width: 1200,
        height: 630,
        alt: "Table conviviale avec cocktails et tapas à La Pergola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Pergola — Bar à tapas & Cave",
    description:
      "Tapas maison, planches et cocktails à Hermanville-sur-Mer. Cour privée et pétanque.",
    images: ["/images/ambiance-cocktails.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f2e8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${poppins.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
