import {
  Zap,
  Droplets,
  Trash2,
  Wifi,
  Wrench,
  ShieldCheck,
  CreditCard,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type RecoveryCategory = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  /** The one-line reason this line item is worth opening. */
  hook: string;
  /** Concrete things found in the field, not marketing abstractions. */
  findings: readonly string[];
  /** Typical range of the annual run-rate reduction, as a % of that line. */
  typical: string;
};

export const RECOVERY_CATEGORIES: readonly RecoveryCategory[] = [
  {
    slug: "electric-and-gas",
    icon: Zap,
    title: "Electric & Gas",
    short: "Rate class, demand, supply.",
    hook:
      "The largest line on the schedule and the one most often billed on the wrong tariff for years at a time.",
    findings: [
      "Buildings sitting on the wrong service classification — an SC-4 load billed on SC-9 terms, or the reverse",
      "Demand ratchets set by a single anomalous 15-minute interval and never reset",
      "Missing or lapsed utility sales-tax exemptions on residential accounts",
      "Supply contracts rolling to variable month-to-month rates after auto-expiry",
      "House meters carrying load that belongs to a submetered tenant",
      "Standby and reactive-power charges applied to buildings that no longer qualify",
    ],
    typical: "6–18% of annual spend",
  },
  {
    slug: "water-and-sewer",
    icon: Droplets,
    title: "Water & Sewer",
    short: "Sewer credits, meter faults, leak adjustments.",
    hook:
      "You are billed for sewer on every gallon that enters the building — including the gallons that never reach the sewer.",
    findings: [
      "No sewer-exemption credit filed for cooling-tower evaporation or irrigation",
      "Estimated reads standing in for a failed AMR transmitter across multiple cycles",
      "Leak-adjustment claims never filed after a documented repair",
      "Multi-Family Conservation Program placement that no longer beats metered billing",
      "Frontage-based billing left in place after a meter was installed",
      "Cross-billed accounts where a neighbouring lot's usage lands on your bill",
    ],
    typical: "8–22% of annual spend",
  },
  {
    slug: "waste-and-recycling",
    icon: Trash2,
    title: "Waste & Recycling",
    short: "Right-sizing, frequency, surcharge creep.",
    hook:
      "Nobody renegotiates carting. The contract quietly escalates and the pickups never get re-scoped.",
    findings: [
      "Container size and pickup frequency set years ago at a different occupancy",
      "Fuel, environmental and administrative surcharges compounding on the base rate",
      "Evergreen auto-renewal clauses with narrow cancellation windows",
      "Contamination fees charged without the required documentation",
      "Duplicate service at properties that changed managing agents",
    ],
    typical: "12–30% of annual spend",
  },
  {
    slug: "telecom-and-data",
    icon: Wifi,
    title: "Telecom, Internet & Data",
    short: "Circuits for rooms that no longer exist.",
    hook:
      "The single most reliable source of pure waste in a real-estate portfolio: services billed long after they were disconnected.",
    findings: [
      "POTS lines and PRIs billed for elevators, alarms and fax machines that were cut over years ago",
      "Circuits still invoiced for suites, offices and construction trailers that are gone",
      "Bulk MDU agreements priced against an outdated door count",
      "Cellular pools with unused lines and unretired devices",
      "Early-termination and regulatory fees applied outside the contract terms",
    ],
    typical: "15–35% of annual spend",
  },
  {
    slug: "vendor-service-contracts",
    icon: Wrench,
    title: "Vendor Service Contracts",
    short: "HVAC, elevator, life safety, janitorial.",
    hook:
      "We benchmark what you are paying against what the scope actually says — and against what your other buildings pay.",
    findings: [
      "Elevator maintenance contracts with CPI-plus escalators running unchecked",
      "Full-service coverage billed where the scope was reduced to inspection-only",
      "Fire alarm and sprinkler inspection billed at a frequency above code requirement",
      "The same vendor charging different rates at different assets in one portfolio",
      "Pest, landscaping and janitorial contracts renewing without a re-bid in 5+ years",
      "Repairs billed inside a scope already covered by the base contract",
    ],
    typical: "10–25% of annual spend",
  },
  {
    slug: "insurance-and-risk",
    icon: ShieldCheck,
    title: "Property Insurance & Risk",
    short: "Valuation, COPE data, loss-run hygiene.",
    hook:
      "Premium follows the data the carrier holds. When that data is wrong, you pay for a building you do not own.",
    findings: [
      "Replacement-cost valuations carried forward without reconciliation to the rent roll",
      "COPE data misstating construction class, sprinklering or roof age",
      "Loss runs carrying closed or subrogated claims that still price the renewal",
      "Premium allocation across a portfolio that no longer matches square footage",
      "Duplicate coverage between the master programme and asset-level policies",
    ],
    typical: "5–15% of annual premium",
  },
  {
    slug: "payments-and-processing",
    icon: CreditCard,
    title: "Payment & Processing Fees",
    short: "Interchange, platform fees, payroll.",
    hook:
      "Rent-payment platforms and merchant processors price on defaults. Defaults are rarely the right price.",
    findings: [
      "Interchange downgrades from mis-keyed transaction data",
      "Rent-payment platform fees benchmarked against portfolio volume, not per-door",
      "Payroll processing billed per-item at legacy headcount tiers",
      "Chargeback and PCI non-compliance fees assessed in error",
    ],
    typical: "10–20% of annual fees",
  },
  {
    slug: "incentives-and-compliance",
    icon: Landmark,
    title: "Incentives & Compliance",
    short: "Left-on-the-table programme dollars.",
    hook:
      "Recovery is not only about refunds. It is also about the money already appropriated for your building.",
    findings: [
      "Con Edison and NYSERDA incentives never claimed on completed work",
      "Local Law 97 penalty exposure modelled and reduced before it prices in",
      "Utility sales-tax exemption certificates missing or expired",
      "ICAP, J-51 and 421-a benefit tracking that lapsed at a hand-off",
      "Demand-response revenue available on assets already capable of curtailment",
    ],
    typical: "Programme-dependent",
  },
];
