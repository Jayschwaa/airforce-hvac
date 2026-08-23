import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import {
  COMPANY_NAME,
  LEGAL_NAME,
  TAGLINE,
  SITE_URL,
  EMAIL,
  PHONE,
  ADDRESS,
  EST_YEAR,
} from "@/lib/constants";
import "./globals.css";

/* Display face: editorial serif. Carries all the personality, so the rest
   of the system can stay plain. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

/* Everything else — including every figure on the site. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#101820",
};

const DESCRIPTION =
  "Upside recovers overbilled operating expense across real-estate portfolios — electric, gas, water and sewer, waste, telecom, vendor contracts and insurance. No capital outlay, no fee unless we find money. New York City and nationwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE} | Portfolio Expense Recovery`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: COMPANY_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "utility bill audit",
    "operating expense recovery",
    "NOI improvement",
    "real estate portfolio cost reduction",
    "sewer credit recovery",
    "vendor contract benchmarking",
    "affordable housing operating expense",
    "New York City utility audit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE,
  foundingDate: String(EST_YEAR),
  slogan: TAGLINE,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.unit}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Utility bill auditing",
    "Operating expense recovery",
    "Tariff and rate class analysis",
    "Sewer exemption credits",
    "Vendor service contract benchmarking",
    "Telecom expense management",
    "Property insurance premium review",
    "Local Law 97 exposure",
  ],
  serviceType: "Operating expense recovery and cost reduction",
  makesOffer: {
    "@type": "Offer",
    description:
      "Contingency-based operating expense audit and recovery. No fee unless savings are realised.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
        {/* Clears the sticky mobile bar so it never covers footer content. */}
        <div className="h-[4.25rem] lg:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
