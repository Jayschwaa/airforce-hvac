"use client";

import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { STATS } from "@/data/stats";

export function StatsBar() {
  return (
    <section className="bg-cyan-50/60 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i < STATS.length - 1
                  ? "md:border-r md:border-navy-200/30"
                  : undefined
              }
            >
              <StatCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                className="text-navy-500 [&_div:first-child]:text-navy-500 [&_div:last-child]:text-gray-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
