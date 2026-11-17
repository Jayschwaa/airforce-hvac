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

// Keep in sync with the Flight Club terms at /flight-club-terms.
export const COMFORT_CLUB_PLANS: ComfortClubPlan[] = [
  {
    name: "Annual",
    price: "$279",
    interval: "year",
    savingsNote: "Cash price. 3% surcharge on credit card payments.",
    benefits: [
      "Two 29-point tune-ups per year, including a disinfectant spray treatment of the ductwork",
      "Priority scheduling ahead of non-members",
      "A FREE diagnostic visit when we perform the repair",
      "$500 off replacement of your covered equipment",
      "15% off all repairs",
      "15% off dryer vent cleaning and add-ons",
      "Water-related repairs, such as condensate drain lines, guaranteed for 30 days",
    ],
  },
];

export const COMFORT_CLUB_ADDONS: ComfortClubAddon[] = [
  { name: "Filter Club", price: "$6/mo" },
  { name: "Plumbing Add-On", price: "$10/mo" },
];
