import {
  FileText,
  Search,
  Receipt,
  Handshake,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  body: string;
  /** What this step costs the client in their own time. */
  yourEffort: string;
};

export const PROCESS: readonly Step[] = [
  {
    n: "01",
    icon: FileText,
    title: "You sign one letter of authority",
    duration: "Day 1 · 30 minutes",
    body:
      "A limited LOA lets us request records directly from your utilities, carriers and vendors. It authorises us to look and to ask questions. It does not authorise us to change, cancel or commit to anything on your behalf.",
    yourEffort: "One signature. A contact at the managing agent.",
  },
  {
    n: "02",
    icon: Search,
    title: "We pull and rebuild 24–36 months",
    duration: "Weeks 1–3",
    body:
      "We gather the bills ourselves rather than asking your team to assemble them. Every invoice is re-rated line by line against the tariff, the contract and the meter data that were actually in force on that date.",
    yourEffort: "Nothing. This is the part that usually stalls — so we own it.",
  },
  {
    n: "03",
    icon: Receipt,
    title: "You get a findings memo, priced in owner terms",
    duration: "Day 30",
    body:
      "Not a spreadsheet of anomalies. A memo that states the refund available, the annual run-rate reduction, the resulting NOI lift in basis points, and the implied change in asset value at your cap rate. Every claim is evidenced to the invoice.",
    yourEffort: "One hour to read it. You approve what we pursue.",
  },
  {
    n: "04",
    icon: Handshake,
    title: "We file, argue and collect",
    duration: "Months 2–9",
    body:
      "Refund claims, tariff reclassifications, exemption filings, credit requests and vendor renegotiations — we run them to conclusion. Utilities push back; that is expected and it is our job, not yours.",
    yourEffort: "Countersign filings. Nothing else.",
  },
  {
    n: "05",
    icon: LineChart,
    title: "We keep watching",
    duration: "Ongoing",
    body:
      "A corrected bill drifts back. Rates change, contracts auto-renew, meters fail, a new managing agent re-opens an old account. We monitor the accounts monthly so the savings you paid for stay in place.",
    yourEffort: "A quarterly summary in your inbox.",
  },
];
