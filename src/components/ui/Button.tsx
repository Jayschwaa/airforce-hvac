import Link from "next/link";
import { cn } from "@/lib/utils";

const variantStyles = {
  /* gold-400 on ink is the signature pair — validated at high contrast */
  primary:
    "bg-gold-400 text-ink-900 hover:bg-gold-300 focus-visible:ring-gold-400",
  ink: "bg-ink-800 text-cream-100 hover:bg-ink-700 focus-visible:ring-ink-800",
  outline:
    "bg-transparent border border-ink-800/25 text-ink-800 hover:border-ink-800 hover:bg-ink-800 hover:text-cream-100 focus-visible:ring-ink-800",
  outlineLight:
    "bg-transparent border border-cream-100/30 text-cream-100 hover:bg-cream-100 hover:text-ink-900 focus-visible:ring-cream-100",
  ghost:
    "bg-transparent text-gold-700 hover:text-ink-800 underline underline-offset-4 decoration-gold-400 decoration-2 focus-visible:ring-gold-700",
} as const;

const sizeStyles = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-[0.9375rem] px-6 py-3 gap-2",
  lg: "text-base px-8 py-4 gap-2.5",
} as const;

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-tight",
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-cream-100",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in rest && rest.href != null) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const isExternal = /^(tel:|mailto:|sms:|https?:)/.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} {...linkRest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<ButtonAsButton, "href">)}>
      {children}
    </button>
  );
}
