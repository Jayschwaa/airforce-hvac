export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
  serviceType: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Air Force HVAC replaced our entire AC system in one day. The crew was professional, on time, and left our home spotless. Our energy bill dropped by 30% the very first month.",
    name: "Maria Gonzalez",
    location: "Coral Springs, FL",
    rating: 5,
    serviceType: "HVAC Installation",
  },
  {
    quote:
      "We manage over 150 units and Air Force handles every single one. Their response time is unmatched — even on weekends. They truly understand the urgency of keeping tenants comfortable in South Florida heat.",
    name: "David Chen",
    location: "Pompano Beach, FL",
    rating: 5,
    serviceType: "Commercial HVAC",
  },
  {
    quote:
      "After years of battling humidity and mold issues, their indoor air quality team installed a UV purification system that completely transformed our home. No more allergy flare-ups for our kids.",
    name: "Samantha Williams",
    location: "Boca Raton, FL",
    rating: 5,
    serviceType: "Indoor Air Quality",
  },
  {
    quote:
      "The ductwork in our 1980s condo was falling apart. Air Force redesigned and replaced everything, and now every room cools evenly. Wish we had called them sooner.",
    name: "Robert Thompson",
    location: "Fort Lauderdale, FL",
    rating: 5,
    serviceType: "Ductwork",
  },
  {
    quote:
      "Signed up for the Flight Club and it's already paid for itself. They caught a refrigerant leak during a routine tune-up that would have cost us thousands if it went undetected.",
    name: "Jennifer Patel",
    location: "Deerfield Beach, FL",
    rating: 5,
    serviceType: "Flight Club",
  },
  {
    quote:
      "Jason and his team handled our plumbing emergency on a Saturday with zero overtime charges because we're Flight Club members. Honest pricing, fast work, and genuinely good people.",
    name: "Carlos Rivera",
    location: "Delray Beach, FL",
    rating: 5,
    serviceType: "Plumbing",
  },
];
