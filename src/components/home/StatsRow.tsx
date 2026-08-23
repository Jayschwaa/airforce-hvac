import { Container } from "@/components/ui/Container";
import { StatTile } from "@/components/ui/StatTile";
import { IllustrativeNotice } from "@/components/sections/IllustrativeNotice";
import { HEADLINE_STATS } from "@/data/results";

export function StatsRow() {
  return (
    <section className="border-b border-ink-800/8 py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {HEADLINE_STATS.map((s) => (
            <StatTile
              key={s.label}
              label={s.label}
              value={s.value}
              prefix={"prefix" in s ? s.prefix : undefined}
              suffix={s.suffix}
              delta={s.delta}
              trend={s.trend}
            />
          ))}
        </div>
        <IllustrativeNotice className="mt-10 max-w-2xl" />
      </Container>
    </section>
  );
}
