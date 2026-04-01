export interface ComfortClubPlan {
  name: string;
  price: string;
  interval: "month" | "year";
  savingsNote?: string;
  benefits: string[];
}

export interface ComfortClubAddon {
  name: string;
  price: string;
}

export const COMFORT_CLUB_PLANS: ComfortClubPlan[] = [
  {
    name: "Monthly",
    price: "$30",
    interval: "month",
    benefits: [
      "Member-only pricing on all services",
      "Priority scheduling — skip the line",
      "2 seasonal tune-ups per year",
      "15% discount on all repairs",
      "No overtime charges",
    ],
  },
  {
    name: "Annual",
    price: "$300",
    interval: "year",
    savingsNote: "Save $60!",
    benefits: [
      "Member-only pricing on all services",
      "Priority scheduling — skip the line",
      "2 seasonal tune-ups per year",
      "15% discount on all repairs",
      "No overtime charges",
    ],
  },
];

export const COMFORT_CLUB_ADDONS: ComfortClubAddon[] = [
  { name: "Filter Club", price: "$6/mo" },
  { name: "Plumbing Add-On", price: "$10/mo" },
];
