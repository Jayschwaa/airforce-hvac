import { Phone, ArrowUpRight } from "lucide-react";
import { PHONE, PHONE_HREF, COVERAGE, FEE_MODEL } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden bg-forest-900 text-cream-100/70 md:block">
      <div className="mx-auto flex h-10 w-full max-w-6xl items-center justify-between px-5 text-[0.8125rem] sm:px-8">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
          {FEE_MODEL.bullets[0]} · {FEE_MODEL.bullets[1]}
        </span>

        <span className="hidden lg:block">{COVERAGE}</span>

        <a
          href={PHONE_HREF}
          className="group flex items-center gap-1.5 transition-colors hover:text-gold-400"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="tabular">{PHONE}</span>
          <ArrowUpRight
            className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
