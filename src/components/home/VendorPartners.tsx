import Image from "next/image";
import { Container } from "@/components/ui/Container";

const vendors = [
  { name: "Lennox", src: "/images/vendors/lennox.png", width: 160, height: 50 },
  { name: "Carrier", src: "/images/vendors/carrier.png", width: 140, height: 50 },
  { name: "Amana & Goodman", src: "/images/vendors/amana-goodman.png", width: 220, height: 80 },
  { name: "Trane", src: "/images/vendors/trane.png", width: 160, height: 50 },
  { name: "Daikin", src: "/images/vendors/daikin.png", width: 220, height: 70 },
  { name: "Premium Levella", src: "/images/vendors/premium-levella.png", width: 150, height: 45 },
  { name: "The AC Outlet", src: "/images/vendors/ac-outlet.jpg", width: 160, height: 80 },
  { name: "Saez Distributors", src: "/images/vendors/saez.jpg", width: 170, height: 55 },
];

export function VendorPartners() {
  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <h3 className="text-center font-rubik text-lg font-semibold text-navy-400">
          Trusted Vendor Partners
        </h3>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ minWidth: "140px", minHeight: "70px" }}
            >
              <Image
                src={vendor.src}
                alt={`${vendor.name} logo`}
                width={vendor.width}
                height={vendor.height}
                className="object-contain"
                style={{ maxHeight: "75px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
