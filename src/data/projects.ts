export interface Project {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  units?: string;
  buildings?: string;
  scope: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Jamaican House Condo",
    address: "305 N Pompano Beach Blvd",
    city: "Pompano Beach",
    state: "FL",
    zip: "33062",
    units: "150+",
    scope: "Full HVAC system installation and maintenance",
    image: "/images/projects/jamaican-house.jpg",
  },
  {
    name: "North Barcelona Condo",
    address: "255 S Cypress Rd",
    city: "Pompano Beach",
    state: "FL",
    zip: "33060",
    buildings: "16",
    units: "200+",
    scope: "Complete ductwork and HVAC service for multi-building complex",
    image: "/images/projects/north-barcelona.jpg",
  },
];
