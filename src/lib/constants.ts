// ── Company Info ──────────────────────────────────────────────

export const COMPANY_NAME = "Air Force HVAC" as const;
export const PHONE = "(305) 335-6991" as const;
export const PHONE_HREF = "tel:+13053356991" as const;
export const EMAIL = "Jason@airforceteam.com" as const;
export const ADMIN_EMAIL = "admin@airforceteam.com" as const;
export const TAGLINE = "Your Space, Our Mission" as const;
export const EST_YEAR = 2010 as const;
export const SERVICE_AREA = "Miami-Dade, Broward & Palm Beach Counties, FL" as const;

// ── Address ─────────────────────────────────────────────────

export const ADDRESS = {
  street: "4350 NW 19th Avenue",
  unit: "Unit E",
  city: "Deerfield Beach",
  state: "FL",
  zip: "33064",
  full: "4350 NW 19th Avenue, Unit E, Deerfield Beach, FL 33064",
} as const;

// ── Business Hours ───────────────────────────────────────────

export const HOURS = {
  display: "24/7",
  description: "Available 24 hours a day, 7 days a week",
} as const;

// ── Navigation ───────────────────────────────────────────────

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    href: "/residential",
    children: [
      { label: "── Services ──", href: "/residential" },
      { label: "HVAC", href: "/residential/hvac" },
      { label: "Plumbing", href: "/residential/plumbing" },
      { label: "Electrical", href: "/residential/electrical" },
      { label: "Roofing", href: "/residential/roofing" },
      { label: "Indoor Air Quality", href: "/residential/indoor-air-quality" },
      { label: "Ductwork", href: "/residential/ductwork" },
      { label: "Duct Cleaning", href: "/residential/duct-cleaning" },
      { label: "── Programs ──", href: "/residential" },
      { label: "Summer 2026 Pricing", href: "/residential/pricing" },
      { label: "Biennial Service Program", href: "/residential/biennial-service" },
      { label: "Flight Club — $30/mo", href: "/comfort-club" },
    ],
  },
  {
    label: "Commercial",
    href: "/commercial",
    children: [
      { label: "── End Markets ──", href: "/commercial#sectors" },
      { label: "Affordable Housing", href: "/commercial/affordable-housing" },
      { label: "Multifamily", href: "/commercial/multifamily" },
      { label: "New Build Homes", href: "/commercial/new-build-homes" },
      { label: "New Build Apartments", href: "/commercial/new-build-apartments" },
      { label: "Retail Buildouts", href: "/commercial/retail-buildouts" },
      { label: "Office Buildings", href: "/commercial/office-buildings" },
      { label: "Warehouses", href: "/commercial/warehouses" },
      { label: "Hospitals", href: "/commercial/hospitals" },
      { label: "Data Centers", href: "/commercial/data-centers" },
      { label: "── Services ──", href: "/commercial#capabilities" },
      { label: "Mechanical Systems", href: "/commercial/mechanical-systems" },
      { label: "RTUs & Split Systems", href: "/commercial/rtus-split-systems" },
      { label: "Ductwork Buildout", href: "/commercial/ductwork-buildout" },
      { label: "Ductwork Cleaning & Repair", href: "/commercial/ductwork-cleaning" },
      { label: "Value Engineering", href: "/commercial/value-engineering" },
      { label: "Electrical", href: "/commercial/electrical" },
      { label: "Plumbing", href: "/commercial/plumbing" },
      { label: "Roofing", href: "/commercial/roofing" },
    ],
  },
  { label: "Pricing", href: "/residential/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Photos", href: "/photos" },
    ],
  },
];

// ── Social Links ─────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/airforcehvac" },
  { platform: "Instagram", url: "https://www.instagram.com/airforcehvac" },
  { platform: "Google", url: "https://g.page/airforcehvac" },
];
