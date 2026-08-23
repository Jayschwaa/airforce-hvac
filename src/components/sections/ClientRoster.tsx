import { Container } from "@/components/ui/Container";
import { CLIENTS, clientLabel } from "@/data/clients";

export function ClientRoster({
  heading = "Who we do this for",
}: {
  heading?: string;
}) {
  return (
    <section className="border-y border-ink-800/8 bg-cream-200/60 py-14">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
          {heading}
        </p>

        <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <li key={c.name} className="text-center">
              <p className="font-display text-[1.0625rem] font-bold leading-tight tracking-tight text-ink-800">
                {clientLabel(c)}
              </p>
              <p className="mt-1.5 text-[0.75rem] leading-snug text-ink-400">
                {c.detail}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
