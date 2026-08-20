"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  COMPANY_NAME,
  NAV_ITEMS,
  PHONE,
  PHONE_HREF,
  EMAIL,
} from "@/lib/constants";

/** Check if a nav child label is a section header (e.g. "── End Markets ──") */
function isSectionHeader(label: string) {
  return label.startsWith("──");
}

/** Extract section header text without the dashes */
function sectionHeaderText(label: string) {
  return label.replace(/──\s*/g, "").replace(/\s*──/g, "").trim();
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpanded = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-navy-500 text-white overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="font-rubik font-bold text-lg">{COMPANY_NAME}</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="p-5 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      {/* Parent with children: toggleable accordion */}
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="flex w-full items-center justify-between py-3 text-lg font-rubik font-medium hover:text-cyan-400 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expanded === item.label && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Link to parent page */}
                      <AnimatePresence>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-1 border-l border-white/10 pl-4 pb-2">
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="block py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                View All {item.label}
                              </Link>
                              {item.children.map((child) => {
                                if (isSectionHeader(child.label)) {
                                  return (
                                    <span
                                      key={child.label}
                                      className="block pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-white/40"
                                    >
                                      {sectionHeaderText(child.label)}
                                    </span>
                                  );
                                }
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    className="block py-2 text-sm text-white/70 hover:text-cyan-400 transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 text-lg font-rubik font-medium hover:text-cyan-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact info */}
            <div className="p-5 border-t border-white/10 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">{PHONE}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{EMAIL}</span>
              </a>

              <Button
                href="tel:+18552917007"
                variant="primary"
                size="md"
                className="w-full mt-4"
                onClick={onClose}
              >
                Call 1-855-291-7007
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
