import { clsx, type ClassValue } from "clsx";

/**
 * Merge Tailwind class names, resolving conflicts with clsx.
 */
export function cn(...args: ClassValue[]): string {
  return clsx(args);
}

/**
 * Format a raw phone string (e.g. "+18552917007") into a readable format.
 * If the string already looks formatted it is returned as-is.
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("1")) {
    const area = digits.slice(1, 4);
    const prefix = digits.slice(4, 7);
    const line = digits.slice(7);
    return `(${area}) ${prefix}-${line}`;
  }

  if (digits.length === 10) {
    const area = digits.slice(0, 3);
    const prefix = digits.slice(3, 6);
    const line = digits.slice(6);
    return `(${area}) ${prefix}-${line}`;
  }

  return phone;
}
