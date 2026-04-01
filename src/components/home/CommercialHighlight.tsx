import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Building2, CheckCircle2 } from "lucide-react";

const highlights = [
  "300+ System Installs Completed",
  "50,000 Sq. Ft. of Duct Installations",
  "1,000,000 Sq. Ft. of Duct Cleanings",
  "$400K+ in Client Savings",
];

export function CommercialHighlight() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder - shows below text on mobile via order */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.03)_25%,rgba(0,0,0,.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.03)_75%)] bg-[length:40px_40px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-cyan-300" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-500">
              COMMERCIAL DIVISION
            </span>
            <div className="mt-2 mb-4 h-1 w-12 rounded bg-cyan-500" />
            <h2 className="font-rubik text-3xl font-bold text-navy-500 md:text-4xl">
              Multi-Family &amp; Affordable Housing Specialists
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              We bring an equity mindset to every project, delivering
              institutional-quality HVAC, ductwork, and mechanical services to
              affordable and workforce housing communities. Our approach
              prioritizes long-term value, tenant comfort, and operational
              savings for property owners.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-500" />
                  <span className="font-medium text-navy-500">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="secondary" href="/commercial">
                View Our Commercial Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
