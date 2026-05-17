import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Engenix System | Inteligência Operacional Industrial",

  description:
    "Transformando manutenção em inteligência operacional. Plataforma CMMS/EAM moderna para gestão de manutenção, ativos, PCM e indicadores industriais.",

  keywords: [
    "CMMS",
    "EAM",
    "PCM",
    "Gestão de manutenção",
    "Gestão de ativos",
    "Software industrial",
    "Manutenção industrial",
    "Indicadores industriais",
    "Engenharia de manutenção",
    "Engenix",
  ],

  authors: [
    {
      name: "Engenix",
    },
  ],

  creator: "Engenix",

  openGraph: {
    title:
      "Engenix System | Inteligência Operacional Industrial",

    description:
      "Software industrial moderno para gestão de manutenção, ativos e performance operacional.",

    url: "https://engenix.com.br",

    siteName: "Engenix",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Engenix System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Engenix System | Inteligência Operacional Industrial",

    description:
      "Plataforma CMMS/EAM moderna para operações industriais de alta performance.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body className={inter.className}>

        {children}

      </body>

    </html>
  );
}