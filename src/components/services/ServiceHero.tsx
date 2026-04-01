import Link from "next/link";
import { Container } from "@/components/ui/Container";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

type ServiceHeroProps = {
  title: string;
  description: string;
  iconName: string;
};

function getIcon(name: string) {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<LucideProps>
  >;
  return icons[name] ?? icons["Wrench"];
}

export function ServiceHero({ title, description, iconName }: ServiceHeroProps) {
  const Icon = getIcon(iconName);

  return (
    <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20 md:py-28 border-b border-gray-100">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="transition-colors hover:text-cyan-500">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="transition-colors hover:text-cyan-500">
            Services
          </Link>
          <span>/</span>
          <span className="text-navy-500">{title}</span>
        </nav>

        <div className="flex flex-col items-start gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50">
            <Icon className="h-10 w-10 text-cyan-500" />
          </div>

          <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
