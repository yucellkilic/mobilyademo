import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velora-demo.com"),
  title: "VELORA | Premium Mobilya ve Proje Çözümleri",
  description:
    "VELORA; ev, ofis, otel ve özel projeler için premium mobilya, contract üretim ve anahtar teslim mimari proje çözümleri sunar. Gaziantep üretim tesisi.",
  keywords: [
    "Premium mobilya",
    "Mobilya üreticisi",
    "Otel mobilyaları",
    "Ofis mobilyaları",
    "Özel üretim mobilya",
    "Contract furniture",
    "Mobilya proje çözümleri",
    "Gaziantep mobilya üretimi",
    "Dijital mobilya kataloğu",
  ],
  authors: [{ name: "VELORA Furniture & Contract" }],
  openGraph: {
    title: "VELORA | Premium Mobilya ve Proje Çözümleri",
    description: "Mekânlara Kimlik Kazandıran Tasarım.",
    url: "https://velora-demo.com",
    siteName: "VELORA Furniture & Contract",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/logo/velora-logo.png",
        width: 1200,
        height: 630,
        alt: "VELORA Furniture & Contract",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELORA | Premium Mobilya ve Proje Çözümleri",
    description: "Mekânlara Kimlik Kazandıran Tasarım.",
    images: ["/assets/logo/velora-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/logo/velora-logo.png",
    shortcut: "/assets/logo/velora-logo.png",
    apple: "/assets/logo/velora-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "VELORA Furniture & Contract",
    "description": "Mekânlara Kimlik Kazandıran Tasarım. Premium mobilya üreticisi ve contract proje firması.",
    "url": "https://velora-demo.com",
    "telephone": "+90 342 000 00 00",
    "email": "info@velora-demo.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gaziantep",
      "addressCountry": "TR",
      "streetAddress": "Organize Sanayi Bölgesi, Gaziantep (Demo Adres)"
    },
    "knowsAbout": ["Ev Mobilyaları", "Ofis Mobilyaları", "Otel Mobilyaları", "Contract Mobilya", "Mimari Uygulamalar"]
  };

  return (
    <html lang="tr" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased selection:bg-[#c9a875] selection:text-[#070708]">
        {children}
      </body>
    </html>
  );
}
