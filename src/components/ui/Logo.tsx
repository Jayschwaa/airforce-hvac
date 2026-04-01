/* eslint-disable @next/next/no-img-element */

interface LogoSvgProps {
  className?: string;
  /** Use lighter palette suitable for dark backgrounds */
  variant?: "default" | "light";
}

/**
 * Air Force HVAC brand logo — uses the real logo images.
 * "default" variant uses the light-background logo (for header).
 * "light" variant uses the dark-background logo (for footer).
 */
export function LogoSvg({ className, variant = "default" }: LogoSvgProps) {
  const src = variant === "light" ? "/images/logo-dark.png" : "/images/logo-alt.png";

  return (
    <img
      src={src}
      alt="Air Force HVAC"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
