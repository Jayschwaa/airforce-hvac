// ─────────────────────────────────────────────────────────────
//  ⚠️  ILLUSTRATIVE FIGURES — REPLACE WITH AUDITED NUMBERS
//  Every figure below is a plausible placeholder written to demonstrate
//  the layout and the owner-math argument. None of it is a real result.
//  Swap in verified engagement data before this site goes public, and
//  keep the disclosure component on any page that still shows samples.
// ─────────────────────────────────────────────────────────────

export const FIGURES_ARE_ILLUSTRATIVE = true;

/** KPI row. `trend` is 12 points of history for the sparkline. */
export const HEADLINE_STATS = [
  {
    label: "Recovered for clients",
    value: 214,
    prefix: "$",
    suffix: "M",
    delta: "since 2009",
    trend: [8, 11, 10, 14, 17, 16, 21, 25, 24, 31, 36, 42],
  },
  {
    label: "Buildings analysed",
    value: 3800,
    suffix: "+",
    delta: "across 41 states",
    trend: [4, 6, 9, 12, 15, 19, 24, 28, 33, 39, 46, 54],
  },
  {
    label: "Audits that find money",
    value: 91,
    suffix: "%",
    delta: "of first-time engagements",
    trend: [82, 84, 83, 86, 88, 87, 89, 90, 89, 91, 91, 91],
  },
  {
    label: "Average NOI lift",
    value: 47,
    suffix: " bps",
    delta: "in year one",
    trend: [22, 26, 25, 30, 33, 31, 36, 39, 38, 43, 45, 47],
  },
] as const;

export type CaseStudy = {
  sector: string;
  scale: string;
  headline: string;
  problem: string;
  found: string;
  /** Owner math, stated the way an asset manager states it. */
  metrics: readonly { label: string; value: string }[];
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    sector: "Affordable Housing",
    scale: "1,240 units · 9 buildings · Bronx & Upper Manhattan",
    headline: "A sewer credit nobody had ever filed",
    problem:
      "Nine pre-war buildings with central cooling towers, all billed for sewer on 100% of metered water intake. Tower evaporation had never been deducted — in one case for eleven years.",
    found:
      "We metered the make-up lines, filed evaporation-credit applications across all nine assets, and reconstructed the recoverable back-billing window. Two buildings also turned out to be on estimated reads behind a dead AMR transmitter.",
    metrics: [
      { label: "One-time refund", value: "$612,000" },
      { label: "Annual run-rate reduction", value: "$188,000" },
      { label: "NOI lift", value: "+61 bps" },
      { label: "Value created at a 5.5 cap", value: "$3.4M" },
    ],
  },
  {
    sector: "Hospitality",
    scale: "4 full-service hotels · 1,830 keys · Northeast",
    headline: "Peak nights were pricing all 365",
    problem:
      "Demand charges at all four properties were anchored to ratchets set during a single sold-out stretch two summers earlier. The rate structure had never been revisited against actual load.",
    found:
      "Interval data showed sustained demand well below the ratchet at three of four hotels. We petitioned for reclassification, reset the ratchets, and separately found 38 active POTS lines billed for elevators and fax lines cut over in 2019.",
    metrics: [
      { label: "One-time refund", value: "$247,000" },
      { label: "Annual run-rate reduction", value: "$431,000" },
      { label: "NOI lift", value: "+38 bps" },
      { label: "Value created at a 7 cap", value: "$6.2M" },
    ],
  },
  {
    sector: "Office & Mixed-Use",
    scale: "2.1M sq ft · 6 assets · Manhattan",
    headline: "Same vendor, six buildings, six different rates",
    problem:
      "A portfolio-wide elevator maintenance agreement had been assembled from six separately negotiated legacy contracts, each with its own escalator. Nobody had ever compared them side by side.",
    found:
      "Benchmarking the six contracts against each other — and against scope actually delivered — showed a 31% spread on equivalent service. We consolidated to the best terms in the book and removed inspection frequencies above code requirement.",
    metrics: [
      { label: "One-time refund", value: "$96,000" },
      { label: "Annual run-rate reduction", value: "$524,000" },
      { label: "NOI lift", value: "+29 bps" },
      { label: "Value created at a 6 cap", value: "$8.7M" },
    ],
  },
];

/**
 * Compounding over a seven-year hold, in thousands of dollars.
 * `annual` is that year's recurring saving; `cumulative` is the running
 * total of cash kept. Rendered as a stacked column chart on ink.
 */
export const COMPOUNDING = {
  annualSaving: 431,
  years: [
    { year: 1, annual: 431, cumulative: 431 },
    { year: 2, annual: 431, cumulative: 862 },
    { year: 3, annual: 431, cumulative: 1293 },
    { year: 4, annual: 431, cumulative: 1724 },
    { year: 5, annual: 431, cumulative: 2155 },
    { year: 6, annual: 431, cumulative: 2586 },
    { year: 7, annual: 431, cumulative: 3017 },
  ],
} as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "I assumed our bills were right because we had been paying them for nine years. That turns out to be the reason they were wrong.",
    name: "Managing Director, Asset Management",
    role: "Institutional office owner",
  },
  {
    quote:
      "We could not raise rents — the regulatory agreement does not allow it. This was the only lever left, and it moved coverage enough to matter.",
    name: "VP of Operations",
    role: "Affordable housing developer",
  },
  {
    quote:
      "The memo was written for an investment committee, not for an engineer. That is the first time I have been able to take a utility audit into a capital meeting.",
    name: "Chief Financial Officer",
    role: "Family-office real-estate portfolio",
  },
];
