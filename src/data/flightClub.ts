export interface FlightClubPlan {
  name: string;
  price: string;
  interval: "month" | "year";
  savingsNote?: string;
  benefits: string[];
}

export interface FlightClubAddon {
  name: string;
  price: string;
}

export const FLIGHT_CLUB_PLANS: FlightClubPlan[] = [
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

export const FLIGHT_CLUB_ADDONS: FlightClubAddon[] = [
  { name: "Filter Club", price: "$6/mo" },
  { name: "Plumbing Add-On", price: "$10/mo" },
];
