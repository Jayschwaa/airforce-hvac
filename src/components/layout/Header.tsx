"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Menu,
  Phone,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LogoSvg } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import {
  NAV_ITEMS,
  PHONE,
  PHONE_HREF,
} from "@/lib/constants";

/** Check if a nav child label is a section header (e.g. "── End Markets ──") */
function isSectionHeader(label: string) {
  return label.startsWith("──");
}

/** Extract section header text without the dashes */
function sectionHeaderText(label: string) {
  return label.replace(/──\s*/g, "").replace(/\s*──/g, "").trim();
}

/**
 * Split children into groups based on section-header items.
 * Returns an array of { heading: string; items: NavChild[] }.
 */
function splitIntoColumns(children: { label: string; href: string }[]) {
  const columns: { heading: string; items: { label: string; href: string }[] }[] = [];
  let current: { heading: string; items: { label: string; href: string }[] } | null = null;

  for (const child of children) {
    if (isSectionHeader(child.label)) {
      current = { heading: sectionHeaderText(child.label), items: [] };
      columns.push(current);
    } else {
      if (!current) {
        current = { heading: "", items: [] };
        columns.push(current);
      }
      current.items.push(child);
    }
  }

  return columns;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = useCallback((label: string) => {
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white shadow-sm transition-all duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <LogoSvg
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-12" : "h-14"
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isCommercial = item.label === "Commercial";
              const columns = hasChildren ? splitIntoColumns(item.children!) : [];
              const isMegaMenu = columns.length > 1;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() =>
                    hasChildren ? openDropdown(item.label) : undefined
                  }
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium font-rubik text-navy-700 rounded-lg hover:text-cyan-500 hover:bg-cyan-50 transition-colors",
                      activeDropdown === item.label && "text-cyan-500 bg-cyan-50"
                    )}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega-menu dropdown for Commercial (two columns) */}
                  {hasChildren && isMegaMenu && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 min-w-[600px] grid grid-cols-2 gap-8">
                        {columns.map((col) => (
                          <div key={col.heading}>
                            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                              {col.heading}
                            </h4>
                            <div className="space-y-0.5">
                              {col.items.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  prefetch={false}
                                  onClick={closeDropdown}
                                  className="block px-3 py-2 rounded-lg text-sm font-medium font-rubik text-navy-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Simple single-column dropdown (Residential) */}
                  {hasChildren && !isMegaMenu && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px]">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeDropdown}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium font-rubik text-navy-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side: Emergency badge, phone, CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-rubik bg-red-500/10 text-red-600 border border-red-200">
              24/7 Emergency
            </span>
            <a
              href={PHONE_HREF}
              className="text-sm font-medium font-rubik text-navy-700 hover:text-cyan-500 transition-colors"
            >
              {PHONE}
            </a>
            <Button href="tel:+18552917007" variant="primary" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-navy-500 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
