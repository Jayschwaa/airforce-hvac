import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Home,
  Building2,
  Thermometer,
  Droplets,
  Zap,
  Wind,
  ShieldCheck,
  TrendingDown,
  Phone,
  MessageSquare,
} from "lucide-react";

const residentialServices = [
  { icon: Thermometer, label: "AC Repair & Installation" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Zap, label: "Electrical" },
  { icon: Home, label: "Roofing" },
];

const commercialServices = [
  { icon: Wind, label: "Commercial HVAC & Ductwork" },
  { icon: Building2, label: "Multi-Family & Condo" },
  { icon: ShieldCheck, label: "Preventive Maintenance" },
  { icon: TrendingDown, label: "10%+ Cost Savings" },
];

export function ResidentialCommercialSplit() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            HOW CAN WE HELP?
          </p>
          <h2 className="font-rubik text-3xl font-bold text-navy-500 md:text-4xl">
            Residential & Commercial Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
            Whether you&apos;re a homeowner or a property manager, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Residential Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-cyan-200">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Home className="h-7 w-7 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-rubik text-2xl font-bold text-navy-500">
                  Residential
                </h3>
                <p className="text-sm text-gray-500">Homeowners & Families</p>
              </div>
            </div>

            <p className="mb-6 text-gray-600 leading-relaxed">
              From AC tune-ups to full-home re-pipes, our licensed technicians
              deliver fast, reliable service you can trust. 24/7 emergency
              support when you need it most.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              {residentialServices.map((svc) => (
                <div
                  key={svc.label}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2.5 text-sm font-medium text-navy-500"
                >
                  <svc.icon className="h-4 w-4 text-cyan-500 shrink-0" />
                  {svc.label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button href="tel:+18552917007" size="md">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button href="sms:+18552917007" variant="outline" size="md">
                <MessageSquare className="h-4 w-4 mr-2" />
                Text Us
              </Button>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-navy-200">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50">
                <Building2 className="h-7 w-7 text-navy-500" />
              </div>
              <div>
                <h3 className="font-rubik text-2xl font-bold text-navy-500">
                  Commercial
                </h3>
                <p className="text-sm text-gray-500">
                  Property Managers & Investors
                </p>
              </div>
            </div>

            <p className="mb-6 text-gray-600 leading-relaxed">
              $40M+ in national facilities sales. We deliver precision-tuned
              solutions with an ownership mindset — saving our clients 10%+ on
              commercial projects.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              {commercialServices.map((svc) => (
                <div
                  key={svc.label}
                  className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2.5 text-sm font-medium text-navy-500"
                >
                  <svc.icon className="h-4 w-4 text-navy-400 shrink-0" />
                  {svc.label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button href="tel:+18552917007" variant="secondary" size="md">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button href="sms:+18552917007" variant="outline" size="md">
                <MessageSquare className="h-4 w-4 mr-2" />
                Text Us
              </Button>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
