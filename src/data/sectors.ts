import {
  Home,
  Building2,
  Hotel,
  Briefcase,
  Store,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type Sector = {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** Why opex recovery matters *more* in this asset class than elsewhere. */
  thesis: string;
  points: readonly string[];
};

export const SECTORS: readonly Sector[] = [
  {
    slug: "affordable-housing",
    icon: Home,
    title: "Affordable & Workforce Housing",
    thesis:
      "When the revenue line is regulated, operating expense is the only lever you control. Every dollar we take out of opex is a dollar that flows straight to NOI — and a dollar that keeps a deal covenant-compliant.",
    points: [
      "DSCR relief without touching rents or the regulatory agreement",
      "Water and sewer is disproportionately large in older affordable stock — and disproportionately mis-billed",
      "Utility allowance analysis for tenant-paid versus owner-paid configurations",
      "Findings documented to a standard your lender, syndicator and agency reviewers accept",
      "Reserve pressure eased without drawing on replacement reserves",
    ],
  },
  {
    slug: "multifamily",
    icon: Building2,
    title: "Market-Rate Multifamily",
    thesis:
      "A recurring opex reduction is not a one-time gain. It is a permanent change to the income statement that capitalises into the exit — and it underwrites at your cap rate, not your discount rate.",
    points: [
      "Portfolio-wide benchmarking that surfaces the outlier assets first",
      "Submetering and house-meter reconciliation across the stack",
      "Bulk internet and cable agreements re-priced to current door count",
      "Clean, auditable findings for the data room ahead of a refinance or sale",
    ],
  },
  {
    slug: "hospitality",
    icon: Hotel,
    title: "Hotels & Hospitality",
    thesis:
      "A hotel runs every system, around the clock, at variable occupancy. That combination produces the widest gap we see between what a property is billed and what it actually consumed.",
    points: [
      "Laundry, kitchen and pool loads driving sewer volume that never enters the sewer",
      "Demand charges set by peak-occupancy nights and then applied all year",
      "Guest-facing telecom, in-room entertainment and bandwidth contracts",
      "Vendor contracts across F&B, life safety and building services benchmarked as one book",
    ],
  },
  {
    slug: "office-and-mixed-use",
    icon: Briefcase,
    title: "Office & Mixed-Use",
    thesis:
      "In a triple-net world, recovery cuts both ways: you protect the landlord's share and you hand tenants a defensible, lower escalation. That is a retention argument as much as a returns argument.",
    points: [
      "Base-year and CAM escalation exposure reviewed alongside the underlying bills",
      "Tenant submeter reconciliation against house consumption",
      "Vacancy-adjusted service scopes for floors that are not occupied",
      "Local Law 97 exposure modelled before it prices into the asset",
    ],
  },
  {
    slug: "retail",
    icon: Store,
    title: "Retail & Ground-Floor",
    thesis:
      "Small, numerous accounts are where billing errors hide. Nobody audits a $900 monthly invoice — which is exactly why it stays wrong for six years.",
    points: [
      "High account counts audited in aggregate rather than one-off",
      "Merchant processing and interchange reviewed alongside utilities",
      "Waste and recycling right-sized per storefront, not per lease",
      "Percentage-rent and recovery clauses cross-checked against actual billing",
    ],
  },
  {
    slug: "venues",
    icon: Trophy,
    title: "Stadiums, Arenas & Venues",
    thesis:
      "Event-driven load is the hardest thing in real estate to bill correctly. A handful of peak days should not set the rate structure for all 365.",
    points: [
      "Event-day demand peaks isolated from base building load",
      "Curtailment and demand-response revenue on assets already capable of it",
      "Concessions, point-of-sale and connectivity contracts reviewed as one portfolio",
      "Seasonal and dark-period service scopes adjusted to actual use",
    ],
  },
];
