import { Phone, Mail } from "lucide-react";
import { PHONE, PHONE_HREF, EMAIL, SERVICE_AREA } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden md:flex h-10 bg-cyan-500 text-white text-sm items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Phone */}
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>{PHONE}</span>
        </a>

        {/* Center: Service area */}
        <span className="text-white/90">
          Serving Miami-Dade, Broward &amp; Palm Beach Counties, as well as Commercial Clients Nationwide
        </span>

        {/* Right: Email */}
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{EMAIL}</span>
        </a>
      </div>
    </div>
  );
}
