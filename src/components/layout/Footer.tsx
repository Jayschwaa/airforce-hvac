import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { RECOVERY_CATEGORIES } from "@/data/recovery";
import {
  NAV_ITEMS,
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  LEGAL_NAME,
  SOCIAL_LINKS,
  TAGLINE,
  SUBLINE,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-cream-100/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="light" showTagline />
            <p className="mt-6 max-w-sm font-display text-2xl font-bold leading-snug tracking-tight text-cream-100">
              {TAGLINE}
            </p>
            <p className="mt-2 max-w-sm text-[0.9375rem] leading-relaxed">
              {SUBLINE} We audit what your buildings already spend, recover what
              was overbilled, and hand the difference back to NOI.
            </p>

            <div className="mt-8 space-y-3 text-[0.9375rem]">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span className="tabular">{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {EMAIL}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span>
                  {ADDRESS.street}, {ADDRESS.unit}
                  <br />
                  {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                </span>
              </p>
            </div>
          </div>

          {/* Site */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cream-100">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                <Link href="/" className="transition-colors hover:text-gold-400">
                  Home
                </Link>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
              {SOCIAL_LINKS.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-gold-400"
                  >
                    {s.platform}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What we open */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cream-100">
              What we open
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-[0.9375rem] sm:grid-cols-2 md:grid-cols-1">
              {RECOVERY_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/what-we-recover#${c.slug}`}
                    className="transition-colors hover:text-gold-400"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream-100/10 pt-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {LEGAL_NAME}. All rights reserved.
          </p>
          <p className="text-cream-100/40">
            Fees are contingent on realised savings. Nothing here is tax,
            legal or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
