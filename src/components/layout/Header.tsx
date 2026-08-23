"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-forest-800/10 bg-cream-100/85 backdrop-blur-md"
            : "border-transparent bg-cream-100",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Upside — home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                    active
                      ? "text-forest-800"
                      : "text-forest-500 hover:text-forest-800",
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href="/contact" variant="forest" size="sm">
              Get your free analysis
            </Button>
          </div>

          <button
            className="rounded-full p-2 text-forest-800 transition-colors hover:bg-forest-800/5 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
