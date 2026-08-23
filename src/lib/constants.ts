// ─────────────────────────────────────────────────────────────
//  ⚠️  REPLACE BEFORE LAUNCH
//  Phone, email and domain below are placeholders. The phone uses the
//  555-01xx range reserved for fiction so nothing dials a real person.
// ─────────────────────────────────────────────────────────────

export const COMPANY_NAME = "Upside" as const;
export const LEGAL_NAME = "Upside Recovery Partners, LLC" as const;
export const TAGLINE = "Same Buildings. Better Returns." as const;
export const SUBLINE = "Found money for your bottom line." as const;

export const PHONE = "(212) 555-0148" as const;
export const PHONE_HREF = "tel:+12125550148" as const;
export const SMS_HREF = "sms:+12125550148" as const;
export const EMAIL = "hello@upsidenoi.com" as const;
export const SITE_URL = "https://upsidenoi.com" as const;

export const EST_YEAR = 2009 as const;
export const COVERAGE = "New York City & the Northeast · Portfolios nationwide" as const;

export const ADDRESS = {
  street: "61 Broadway",
  unit: "Suite 1400",
  city: "New York",
  state: "NY",
  zip: "10006",
  full: "61 Broadway, Suite 1400, New York, NY 10006",
} as const;

export const HOURS = {
  display: "Mon–Fri, 8:30–6:00 ET",
  description: "Findings memos land within 30 days of the data pull.",
} as const;

// ── The commercial model, stated once and reused everywhere ──
export const FEE_MODEL = {
  headline: "We only get paid from money you weren't going to get.",
  detail:
    "No retainer, no capital outlay, no software to buy. We take an agreed share of the savings and refunds we actually land — for a defined term, then it is all yours.",
  bullets: [
    "No fee unless we find money",
    "No capital expenditure, ever",
    "No equipment, no construction, no tenant disruption",
    "You approve every claim before it is filed",
  ],
} as const;

// ── Navigation ───────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "What We Recover", href: "/what-we-recover" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/upsidenoi" },
] as const;
