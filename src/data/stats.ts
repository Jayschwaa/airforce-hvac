export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 40, prefix: "$", suffix: "M+", label: "National Sales" },
  { value: 10, suffix: "%+", label: "Client Savings on Commercial Projects" },
  { value: 300, suffix: "+", label: "System Installs" },
  { value: 400, prefix: "$", suffix: "K+", label: "Client Savings" },
];
