import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  Building2,
  Home,
  Hotel,
  Warehouse,
  Store,
  Briefcase,
  Server,
  Heart,
  Building,
} from "lucide-react";

const endMarkets = [
  {
    icon: Building2,
    label: "Affordable Housing",
    href: "/commercial/affordable-housing",
    description: "LIHTC & HUD projects",
  },
  {
    icon: Hotel,
    label: "Multifamily",
    href: "/commercial/multifamily",
    description: "Apartments & condos",
  },
  {
    icon: Home,
    label: "New Build Homes",
    href: "/commercial/new-build-homes",
    description: "Single-family construction",
  },
  {
    icon: Building,
    label: "New Build Apartments",
    href: "/commercial/new-build-apartments",
    description: "Ground-up multifamily",
  },
  {
    icon: Store,
    label: "Retail Buildouts",
    href: "/commercial/retail-buildouts",
    description: "Shops & restaurants",
  },
  {
    icon: Briefcase,
    label: "Office Buildings",
    href: "/commercial/office-buildings",
    description: "Commercial offices",
  },
  {
    icon: Warehouse,
    label: "Warehouses",
    href: "/commercial/warehouses",
    description: "Industrial & logistics",
  },
  {
    icon: Heart,
    label: "Hospitals",
    href: "/commercial/hospitals",
    description: "Healthcare facilities",
  },
  {
    icon: Server,
    label: "Data Centers",
    href: "/commercial/data-centers",
    description: "Mission-critical cooling",
  },
];

export function EndMarketsSection() {
  return (
    <section className="py-20 bg-navy-500">
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="font-rubik text-3xl font-bold text-white md:text-4xl">
            Commercial End Markets
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 text-lg">
            From affordable housing to data centers, we deliver precision HVAC
            solutions across every commercial sector in South Florida.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {endMarkets.map((market) => (
            <Link
              key={market.href}
              href={market.href}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 hover:border-cyan-400/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20">
                <market.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-rubik font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {market.label}
                </h3>
                <p className="mt-0.5 text-sm text-white/50">
                  {market.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:+13053356991"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-rubik font-semibold text-white transition-all hover:bg-cyan-600"
          >
            Request a Commercial Bid — (305) 335-6991
          </a>
        </div>
      </Container>
    </section>
  );
}
