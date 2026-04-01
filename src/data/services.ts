export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  isCommercial: boolean;
  isResidential: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "hvac",
    name: "HVAC",
    shortDescription:
      "Complete commercial and residential AC repair, installation, diagnostics, and maintenance for all system types.",
    longDescription:
      "Air Force HVAC delivers full-spectrum heating, ventilation, and air conditioning services across South Florida. From rooftop units and water-cooled systems to split AC, central air, and ductless mini-splits, our certified technicians have completed over 300 system installs for both residential homes and large commercial properties. We handle emergency repairs, seasonal maintenance, new construction installations, and system diagnostics — keeping your space comfortable year-round in the Florida heat.",
    icon: "Thermometer",
    features: [
      {
        title: "System Installation",
        description:
          "Expert installation of central AC, split systems, ductless mini-splits, and commercial rooftop units with manufacturer-backed warranties.",
      },
      {
        title: "Emergency Repair",
        description:
          "Fast-response AC repair service with same-day availability. We stock common parts on our trucks to minimize downtime.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Comprehensive tune-ups that extend equipment life, reduce energy bills, and catch small problems before they become costly failures.",
      },
      {
        title: "Commercial RTU & Water-Cooled Systems",
        description:
          "Specialized service for commercial rooftop units, water-cooled systems, and large-scale HVAC infrastructure serving multi-unit properties.",
      },
    ],
    faqs: [
      {
        question: "How often should I service my AC in South Florida?",
        answer:
          "We recommend twice-yearly maintenance — once before summer and once before the cooler season. South Florida's year-round humidity and heat put extra strain on systems, making regular tune-ups essential to prevent breakdowns and keep energy costs down.",
      },
      {
        question: "What size AC system do I need for my home?",
        answer:
          "System sizing depends on square footage, insulation, window placement, ceiling height, and ductwork condition. Our technicians perform a Manual J load calculation to determine the exact capacity your home needs — oversized and undersized units both cause problems.",
      },
      {
        question: "How long does a typical AC installation take?",
        answer:
          "Most residential installations are completed in a single day. Commercial projects and multi-unit buildings may take longer depending on scope. We provide a detailed timeline before any work begins.",
      },
      {
        question: "Do you offer financing for new AC systems?",
        answer:
          "Yes, we offer flexible financing options to make new system installations affordable. Ask our team about current promotions and payment plans available for qualified buyers.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
  {
    slug: "ductwork",
    name: "Ductwork",
    shortDescription:
      "Professional metal, spiral, and fiberglass duct installation, repair, sealing, and cleaning services.",
    longDescription:
      "Properly designed and maintained ductwork is the backbone of any efficient HVAC system. Air Force HVAC has installed over 50,000 square feet of new ductwork and cleaned more than 1 million square feet across South Florida. We work with metal, spiral, and fiberglass duct systems — handling everything from new construction installations to duct sealing, leak repair, and deep cleaning. Poorly sealed or dirty ducts can increase your energy bills by 20-30% and degrade indoor air quality.",
    icon: "Wind",
    features: [
      {
        title: "Duct Installation & Design",
        description:
          "Custom ductwork design and installation using metal, spiral, or fiberglass materials, engineered for optimal airflow and efficiency.",
      },
      {
        title: "Duct Sealing & Repair",
        description:
          "Aeroseal and manual sealing to eliminate leaks that waste energy. We locate and fix disconnections, gaps, and deteriorating joints.",
      },
      {
        title: "Duct Cleaning",
        description:
          "Thorough cleaning that removes dust, mold, allergens, and debris from your entire duct system, improving air quality and system performance.",
      },
      {
        title: "Duct Insulation",
        description:
          "Proper insulation prevents condensation and energy loss, especially critical in South Florida's humid climate where uninsulated ducts cause sweating and mold growth.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my ductwork needs replacing?",
        answer:
          "Signs include uneven cooling between rooms, visible damage or disconnections, excessive dust around vents, rising energy bills, and ducts older than 15 years. We offer free ductwork inspections to assess your system's condition.",
      },
      {
        question: "Can leaky ducts really affect my energy bill?",
        answer:
          "Absolutely. The Department of Energy estimates that leaky ducts can lose 20-30% of conditioned air. In South Florida's heat, that translates to hundreds of dollars per year in wasted energy. Sealing your ducts is one of the highest-ROI home improvements available.",
      },
      {
        question: "How often should ductwork be cleaned?",
        answer:
          "We recommend professional duct cleaning every 3-5 years, or sooner if you notice musty odors, visible mold, excessive dust, or after any renovation work that generates debris.",
      },
      {
        question: "What type of ductwork is best for Florida homes?",
        answer:
          "It depends on your property. Metal ducts are the most durable and resist mold, spiral ducts offer excellent airflow for commercial spaces, and flex ducts work well for residential retrofits. Our team will recommend the best option for your specific situation.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    shortDescription:
      "Air purification, humidity control, UV treatment, and comprehensive air quality testing for healthier spaces.",
    longDescription:
      "South Florida's warm, humid climate creates the perfect breeding ground for mold, allergens, and airborne contaminants. Air Force HVAC's indoor air quality solutions address these challenges head-on with advanced air purification systems, whole-home dehumidifiers, UV germicidal treatment, and professional air quality testing. Whether you are dealing with allergy symptoms, musty odors, or simply want cleaner air for your family, our IAQ experts design custom solutions that deliver measurable results.",
    icon: "Leaf",
    features: [
      {
        title: "Air Purification Systems",
        description:
          "HEPA filtration and electronic air cleaners that capture 99.97% of airborne particles including dust, pollen, pet dander, and bacteria.",
      },
      {
        title: "Humidity Control",
        description:
          "Whole-home dehumidifiers that maintain optimal 45-55% humidity levels, preventing mold growth and protecting your home's structure and furnishings.",
      },
      {
        title: "UV Germicidal Treatment",
        description:
          "UV-C light systems installed inside your ductwork that neutralize mold spores, bacteria, and viruses before they circulate through your home.",
      },
      {
        title: "Air Quality Testing",
        description:
          "Comprehensive indoor air quality assessments that measure particulate levels, humidity, VOCs, and mold spore counts to identify exactly what needs improvement.",
      },
    ],
    faqs: [
      {
        question: "Why is indoor air quality such a concern in South Florida?",
        answer:
          "South Florida's high humidity and warm temperatures accelerate mold and mildew growth. Combined with tightly sealed modern buildings, contaminants can reach concentrations 2-5 times higher than outdoor levels. Proper IAQ solutions are especially important here.",
      },
      {
        question: "Do UV lights really work inside ductwork?",
        answer:
          "Yes. UV-C germicidal lights are proven to neutralize up to 99.9% of mold, bacteria, and viruses on surfaces and in the air stream. They are recommended by ASHRAE and have been used in hospitals and commercial buildings for decades.",
      },
      {
        question: "How do I know if I have an indoor air quality problem?",
        answer:
          "Common signs include persistent allergy symptoms indoors, musty or stale odors, visible mold around vents, excessive humidity, and frequent respiratory issues. Our air quality testing can pinpoint the exact problem.",
      },
      {
        question: "Will a dehumidifier help with my energy bills?",
        answer:
          "Yes. When humidity is controlled, your AC does not have to work as hard to cool your space. Many homeowners see a noticeable reduction in energy costs after installing a whole-home dehumidifier, plus the added benefit of improved comfort.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDescription:
      "Reliable pipe repair, water heater service, leak detection, drain cleaning, and backflow prevention.",
    longDescription:
      "Air Force HVAC's licensed plumbing division handles everything from routine drain cleaning to complex pipe repairs and water heater installations. Our technicians use advanced leak detection technology to find hidden problems without tearing up your walls or floors. We service both residential and commercial properties across Broward and Palm Beach counties, offering upfront pricing and same-day emergency service. As a Flight Club member, you receive priority plumbing service with no overtime charges.",
    icon: "Droplets",
    features: [
      {
        title: "Pipe Repair & Replacement",
        description:
          "Expert repair and repiping services for copper, PVC, and PEX systems. We handle everything from pinhole leaks to full property repiping.",
      },
      {
        title: "Water Heater Service",
        description:
          "Installation, repair, and maintenance for tank and tankless water heaters. We help you choose the right system for your household's hot water demands.",
      },
      {
        title: "Leak Detection",
        description:
          "Non-invasive electronic leak detection that pinpoints hidden leaks behind walls, under slabs, and in underground pipes — saving you from costly exploratory demolition.",
      },
      {
        title: "Drain Cleaning & Backflow Prevention",
        description:
          "Professional drain clearing using hydro-jetting and cable machines, plus backflow preventer installation and annual testing to protect your water supply.",
      },
    ],
    faqs: [
      {
        question: "Do you offer emergency plumbing service?",
        answer:
          "Yes, we provide same-day emergency plumbing service. Flight Club members receive priority scheduling and no overtime charges for after-hours calls, making emergency service even more affordable.",
      },
      {
        question: "How do I know if I have a hidden water leak?",
        answer:
          "Warning signs include unexplained increases in your water bill, the sound of running water when all fixtures are off, warm spots on floors, musty odors, and visible mold or water stains. Our electronic leak detection can locate the problem without any demolition.",
      },
      {
        question: "Should I choose a tank or tankless water heater?",
        answer:
          "Tankless heaters provide endless hot water and save energy, but cost more upfront. Tank heaters are more affordable to install and work well for most households. We evaluate your hot water usage and budget to recommend the best option.",
      },
      {
        question: "What is backflow prevention and do I need it?",
        answer:
          "Backflow prevention devices stop contaminated water from flowing back into your clean water supply. Many Florida municipalities require annual backflow testing for commercial properties and some residential installations. We handle both installation and certification.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortDescription:
      "Commercial and residential roofing inspection, repair, replacement, and ongoing maintenance.",
    longDescription:
      "Your roof is your property's first line of defense against South Florida's intense sun, heavy rain, and hurricane-force winds. Air Force HVAC provides comprehensive roofing services including detailed inspections, storm damage repair, full roof replacements, and preventive maintenance programs. We work with all major roofing materials — shingle, tile, metal, and flat roof systems — and coordinate seamlessly with our HVAC team when rooftop equipment is involved.",
    icon: "Home",
    features: [
      {
        title: "Roof Inspection & Assessment",
        description:
          "Thorough inspections that document every issue with photos and detailed reports, helping you make informed decisions about repairs versus replacement.",
      },
      {
        title: "Storm Damage Repair",
        description:
          "Rapid response after hurricanes and severe weather. We secure your property with emergency tarping and complete permanent repairs efficiently.",
      },
      {
        title: "Roof Replacement",
        description:
          "Full tear-off and replacement using top-quality materials rated for South Florida's wind and weather conditions, backed by manufacturer warranties.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Regular maintenance programs that extend your roof's lifespan, identify problems early, and keep warranties valid — saving you from costly emergency repairs.",
      },
    ],
    faqs: [
      {
        question: "How often should my roof be inspected in Florida?",
        answer:
          "We recommend annual inspections, plus an additional inspection after any major storm. Florida's combination of UV exposure, heavy rain, and hurricane risk means roofing materials degrade faster here than in most other states.",
      },
      {
        question: "How do I know if I need a roof repair or full replacement?",
        answer:
          "Factors include the roof's age, extent of damage, number of previous repairs, and underlying deck condition. If your roof is over 15-20 years old with widespread issues, replacement is often more cost-effective. Our inspection report will lay out your options clearly.",
      },
      {
        question: "Do you handle insurance claims for storm damage?",
        answer:
          "We work with all major insurance carriers and can assist you with documentation, damage assessments, and the claims process. Our detailed inspection reports with photos help ensure you receive fair coverage.",
      },
      {
        question: "Can you coordinate roofing work with HVAC equipment on my roof?",
        answer:
          "Absolutely — this is one of our unique advantages. When rooftop HVAC units need to be moved or reconnected during roofing work, our in-house HVAC team handles it, eliminating the need to hire a separate contractor.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortDescription:
      "Panel upgrades, wiring, outlet installation, lighting, and generator service for homes and businesses.",
    longDescription:
      "Air Force HVAC's electrical division provides safe, code-compliant electrical services for residential and commercial properties throughout Broward and Palm Beach counties. From panel upgrades that support modern AC systems to whole-home generator installations that keep you powered through hurricane season, our licensed electricians handle projects of every scale. We also coordinate electrical work with HVAC installations to ensure your system has the proper circuits, disconnects, and wiring it needs to run efficiently.",
    icon: "Zap",
    features: [
      {
        title: "Panel Upgrades",
        description:
          "Upgrade outdated electrical panels to meet modern load requirements. Essential when installing new AC systems, EV chargers, or adding circuits to your property.",
      },
      {
        title: "Wiring & Outlet Installation",
        description:
          "New circuit installation, outlet additions, GFCI upgrades, and whole-property rewiring. All work meets current NEC and Florida building codes.",
      },
      {
        title: "Lighting Solutions",
        description:
          "Interior and exterior lighting installation including LED retrofits, landscape lighting, security lighting, and commercial fixture upgrades.",
      },
      {
        title: "Generator Service",
        description:
          "Whole-home and commercial generator installation, maintenance, and repair. Ensure your property stays powered during Florida's hurricane season and grid outages.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need an electrical panel upgrade?",
        answer:
          "Signs include frequently tripped breakers, a panel rated under 200 amps, visible corrosion, a Federal Pacific or Zinsco brand panel, or plans to add major appliances like a new AC system. Most older South Florida homes benefit from a panel upgrade.",
      },
      {
        question: "Do I need a permit for electrical work in Florida?",
        answer:
          "Most electrical work in Florida requires a permit and inspection. We pull all necessary permits and schedule inspections as part of our service — you never have to visit a permitting office.",
      },
      {
        question: "What size generator do I need for my home?",
        answer:
          "Generator sizing depends on what you want to power during an outage. A basic setup covering AC, refrigerator, and lights typically requires 10-14 kW. For whole-home coverage, 20-24 kW is common. We perform a load analysis to recommend the right size.",
      },
      {
        question: "Can you install the electrical for a new AC system?",
        answer:
          "Yes — and this is one of the key advantages of working with Air Force HVAC. We handle both the HVAC and electrical work in-house, ensuring proper disconnect switches, dedicated circuits, and code-compliant wiring without the hassle of coordinating multiple contractors.",
      },
    ],
    isCommercial: true,
    isResidential: true,
  },
];
