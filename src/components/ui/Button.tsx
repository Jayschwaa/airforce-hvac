import Link from "next/link";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500",
  secondary:
    "bg-navy-500 text-white hover:bg-navy-600 focus:ring-navy-500",
  outline:
    "bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500",
  ghost:
    "bg-transparent text-cyan-500 hover:bg-cyan-50 focus:ring-cyan-500",
} as const;

const sizeStyles = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
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
    "inline-flex items-center justify-center rounded-lg font-semibold font-rubik transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in rest && rest.href != null) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, "href">;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
