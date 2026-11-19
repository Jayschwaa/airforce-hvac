import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Printed Flight Club QR codes point to /flightclub; send them to the QR landing page.
      { source: "/flightclub", destination: "/welcome-aboard", permanent: false },
      { source: "/flight-club", destination: "/welcome-aboard", permanent: false },
    ];
  },
};

export default nextConfig;
