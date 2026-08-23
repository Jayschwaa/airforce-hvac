import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Compact currency for stat tiles: 1284 -> $1.3K, 2_400_000 -> $2.4M */
export function compactCurrency(value: number): string {
  if (Math.abs(value) >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (Math.abs(value) >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
}

/** Full currency, no cents: 1284 -> $1,284 */
export function currency(value: number): string {
  return `$${Math.round(value).toLocaleString()}`;
}
