import type { Metadata, Viewport } from "next";
import { Rubik, Questrial } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0c1f2e",
};

export const metadata: Metadata = {
  title: "Air Force HVAC | Your Space, Our Mission | South Florida HVAC",
  description:
    "Commercial & residential HVAC, ductwork, plumbing, roofing, electrical, and indoor air quality services in Miami-Dade, Broward & Palm Beach Counties. Family owned since 2010 with $40M+ in national sales. 24/7 service. 1-855-291-7007.",
  metadataBase: new URL("https://airforceteam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://airforceteam.com",
    siteName: "Air Force HVAC",
    title: "Air Force HVAC | Your Space, Our Mission",
    description:
      "South Florida's trusted HVAC, plumbing, electrical & roofing company. $40M+ in national sales. 24/7 emergency service. 1-855-291-7007.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Force HVAC | Your Space, Our Mission",
    description:
      "South Florida's trusted HVAC, plumbing, electrical & roofing company. 24/7 service. 1-855-291-7007.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Air Force HVAC",
  alternateName: "Air Force Team",
  url: "https://airforceteam.com",
  telephone: "+18552917007",
  email: "Jason@airforceteam.com",
  foundingDate: "2010",
  description:
    "South Florida's trusted partner for commercial and residential HVAC, ductwork, plumbing, roofing, and electrical services. Family owned with $40M+ in national sales.",
  slogan: "Your Space, Our Mission",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4350 NW 19th Avenue, Unit E",
    addressLocality: "Deerfield Beach",
    addressRegion: "FL",
    postalCode: "33064",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
    { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
    { "@type": "AdministrativeArea", name: "Broward County, FL" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  department: [
    { "@type": "HVACBusiness", name: "Air Force HVAC - HVAC Division" },
    { "@type": "Plumber", name: "Air Force HVAC - Plumbing Division" },
    { "@type": "Electrician", name: "Air Force HVAC - Electrical Division" },
    {
      "@type": "RoofingContractor",
      name: "Air Force HVAC - Roofing Division",
    },
  ],
  sameAs: [
    "https://www.facebook.com/airforcehvac",
    "https://www.instagram.com/airforcehvac",
    "https://g.page/airforcehvac",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "600",
    bestRating: "5",
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Check",
  knowsAbout: [
    "HVAC installation and repair",
    "Commercial HVAC systems",
    "Duct cleaning",
    "Plumbing services",
    "Electrical services",
    "Roofing",
    "Indoor air quality",
    "Value engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${questrial.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
