/* eslint-disable @next/next/no-img-element */

interface LogoSvgProps {
  className?: string;
  /** Use the transparent logo suitable for dark backgrounds */
  variant?: "default" | "light";
}

/**
 * Air Force HVAC brand logo — uses the real logo images.
 * "default" variant uses the white-background logo, /images/logo.jpg (for header).
 * "light" variant uses the transparent logo, /images/logo.png (for footer / dark backgrounds).
 */
export function LogoSvg({ className, variant = "default" }: LogoSvgProps) {
  const src = variant === "light" ? "/images/logo.png" : "/images/logo.jpg";

  return (
    <img
      src={src}
      alt="Air Force HVAC"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
