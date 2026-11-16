export type PhotoCategory = "team" | "install" | "air" | "commercial";

export type Photo = {
  src: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  category: PhotoCategory;
  /** Position in the "Install Day" story, shown as a numbered badge. */
  step?: number;
};

export const PHOTO_CATEGORIES: { id: PhotoCategory; label: string; emoji: string }[] = [
  { id: "team", label: "Meet the Team", emoji: "👋" },
  { id: "install", label: "Install Day", emoji: "🔧" },
  { id: "air", label: "Air Quality & Plumbing", emoji: "🌬️" },
  { id: "commercial", label: "Commercial", emoji: "🏢" },
];

const P = "/images/photos";

export const PHOTOS: Photo[] = [
  // ── Meet the Team ──────────────────────────────────────────
  {
    src: `${P}/team-arms-crossed.jpg`,
    width: 1125,
    height: 2000,
    title: "Ready for the mission",
    caption: "Our crew, suited up and ready to keep South Florida cool.",
    category: "team",
  },
  {
    src: `${P}/team-duo-front-door.jpg`,
    width: 1125,
    height: 2000,
    title: "Service with a smile",
    caption: "Friendly faces at your front door. That's the Air Force way.",
    category: "team",
  },
  {
    src: `${P}/team-walkthrough.jpg`,
    width: 1440,
    height: 1800,
    title: "Walking through the plan",
    caption: "Before any work starts, we walk the property and talk through every step.",
    category: "team",
  },
  {
    src: `${P}/team-video-intro.jpg`,
    width: 1440,
    height: 1440,
    title: "Explaining the job",
    caption: "We explain what we're doing and why, in plain English.",
    category: "team",
  },
  {
    src: `${P}/office-planning.jpg`,
    width: 1440,
    height: 1440,
    title: "Options, not pressure",
    caption: "Reviewing system options with homeowners so they can choose what fits.",
    category: "team",
  },
  {
    src: `${P}/team-service-van.jpg`,
    width: 1200,
    height: 1600,
    title: "Fully stocked and rolling",
    caption: "Our service vans carry the parts to fix most problems on the first visit.",
    category: "team",
  },
  {
    src: `${P}/tech-at-door.jpg`,
    width: 1200,
    height: 1600,
    title: "Shoe covers on",
    caption: "We treat your home like our own, starting at the front door.",
    category: "team",
  },
  {
    src: `${P}/office-storefront.jpg`,
    width: 900,
    height: 1600,
    title: "Home base",
    caption: "Our office and storefront in Deerfield Beach, Florida.",
    category: "team",
  },

  // ── Install Day (in order) ─────────────────────────────────
  {
    src: `${P}/lennox-delivery.jpg`,
    width: 1440,
    height: 1440,
    title: "The new system is here",
    caption: "Brand-new Lennox equipment, ready to go in.",
    category: "install",
    step: 1,
  },
  {
    src: `${P}/new-equipment-arrives.jpg`,
    width: 1271,
    height: 1500,
    title: "Unboxing day",
    caption: "Unpacking the new air handler right outside the home.",
    category: "install",
    step: 2,
  },
  {
    src: `${P}/air-handler-inspection.jpg`,
    width: 1440,
    height: 1440,
    title: "Out with the old",
    caption: "Opening up the old air handler to see what we're working with.",
    category: "install",
    step: 3,
  },
  {
    src: `${P}/refrigerant-lines.jpg`,
    width: 1440,
    height: 1800,
    title: "Disconnecting the lines",
    caption: "Carefully separating the refrigerant lines from the old unit.",
    category: "install",
    step: 4,
  },
  {
    src: `${P}/air-handler-removal.jpg`,
    width: 1440,
    height: 1440,
    title: "Teamwork in tight spaces",
    caption: "Pulling the old unit out of the closet without a scratch on the walls.",
    category: "install",
    step: 5,
  },
  {
    src: `${P}/air-handler-carry-in.jpg`,
    width: 1440,
    height: 1440,
    title: "Heavy lifting",
    caption: "Carrying the new air handler in, with shoe covers on.",
    category: "install",
    step: 6,
  },
  {
    src: `${P}/line-set-brazing.jpg`,
    width: 1440,
    height: 1440,
    title: "Brazing the copper",
    caption: "Torch-brazing the line set for a tight, leak-free connection.",
    category: "install",
    step: 7,
  },
  {
    src: `${P}/condenser-wiring.jpg`,
    width: 1125,
    height: 2000,
    title: "Wiring it up",
    caption: "Connecting the new outdoor condenser.",
    category: "install",
    step: 8,
  },
  {
    src: `${P}/condenser-testing.jpg`,
    width: 1440,
    height: 1440,
    title: "Testing, testing",
    caption: "Checking pressures and performance before we call it done.",
    category: "install",
    step: 9,
  },
  {
    src: `${P}/finished-air-handler.jpg`,
    width: 1440,
    height: 1440,
    title: "Clean and complete",
    caption: "The finished install: neat wiring, sealed connections, ready to run.",
    category: "install",
    step: 10,
  },
  {
    src: `${P}/copper-brazing.jpg`,
    width: 1200,
    height: 1600,
    title: "Coil repair",
    caption: "Brazing copper refrigerant lines on an evaporator coil.",
    category: "install",
  },
  {
    src: `${P}/hvac-unit-service.jpg`,
    width: 700,
    height: 700,
    title: "Condenser service",
    caption: "Servicing a residential outdoor condenser unit.",
    category: "install",
  },

  // ── Air Quality & Plumbing ─────────────────────────────────
  {
    src: `${P}/drain-pan-uv-walkthrough.jpg`,
    width: 1440,
    height: 1440,
    title: "Show and tell",
    caption: "Showing the homeowners the new drain pan and UV light before they go in.",
    category: "air",
  },
  {
    src: `${P}/uv-light-upgrade.jpg`,
    width: 1440,
    height: 1440,
    title: "UV light upgrade",
    caption: "A UV air purifier helps keep the coil clean and the air fresher.",
    category: "air",
  },
  {
    src: `${P}/rheem-water-heater.jpg`,
    width: 1440,
    height: 1440,
    title: "Hot water, handled",
    caption: "Checking out a Rheem water heater. We do plumbing too.",
    category: "air",
  },
  {
    src: `${P}/duct-cleaning-equipment.jpg`,
    width: 1200,
    height: 1600,
    title: "Duct cleaning gear",
    caption: "Professional HEPA-filtered duct cleaning equipment set up in a home.",
    category: "air",
  },
  {
    src: `${P}/tech-duct-cleaning.jpg`,
    width: 910,
    height: 1600,
    title: "HEPA clean",
    caption: "Duct cleaning with a HEPA backpack vacuum.",
    category: "air",
  },
  {
    src: `${P}/coil-cleaning-outdoor.jpg`,
    width: 1200,
    height: 1600,
    title: "Deep coil wash",
    caption: "Evaporator coil pulled out for a deep acid-wash cleaning.",
    category: "air",
  },

  // ── Commercial ─────────────────────────────────────────────
  {
    src: `${P}/rooftop-ocean-view.jpg`,
    width: 1179,
    height: 1468,
    title: "Office with a view",
    caption: "Servicing commercial units on a rooftop catwalk overlooking the ocean.",
    category: "commercial",
  },
  {
    src: `${P}/rooftop-rtu-service.jpg`,
    width: 1200,
    height: 1600,
    title: "Rooftop unit service",
    caption: "Keeping a commercial rooftop unit (RTU) running strong.",
    category: "commercial",
  },
  {
    src: `${P}/commercial-ductwork.jpg`,
    width: 1600,
    height: 1200,
    title: "Spiral ductwork",
    caption: "A commercial spiral ductwork installation.",
    category: "commercial",
  },
  {
    src: `${P}/warehouse-project.jpg`,
    width: 1600,
    height: 1200,
    title: "Big jobs, too",
    caption: "A large commercial warehouse HVAC project.",
    category: "commercial",
  },
  {
    src: `${P}/blower-inspection.jpg`,
    width: 1200,
    height: 1600,
    title: "Inside the blower",
    caption: "Inspecting the inside of a large commercial blower unit.",
    category: "commercial",
  },
];
