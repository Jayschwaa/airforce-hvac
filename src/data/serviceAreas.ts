export interface CountyArea {
  name: string;
  cities: string[];
}

export interface ServiceAreas {
  counties: CountyArea[];
}

export const SERVICE_AREAS: ServiceAreas = {
  counties: [
    {
      name: "Miami-Dade County",
      cities: [
        "Miami",
        "Miami Beach",
        "Hialeah",
        "Coral Gables",
        "Doral",
        "Homestead",
        "North Miami",
        "Aventura",
        "Kendall",
        "Miami Gardens",
        "Cutler Bay",
        "Palmetto Bay",
        "Pinecrest",
        "Key Biscayne",
        "Sunny Isles Beach",
        "Miami Springs",
        "South Miami",
        "Miami Lakes",
        "Opa-locka",
        "Sweetwater",
      ],
    },
    {
      name: "Broward County",
      cities: [
        "Fort Lauderdale",
        "Hollywood",
        "Pompano Beach",
        "Coral Springs",
        "Deerfield Beach",
        "Plantation",
        "Sunrise",
        "Davie",
        "Miramar",
        "Pembroke Pines",
        "Weston",
        "Coconut Creek",
        "Tamarac",
        "Margate",
        "Lauderhill",
        "Oakland Park",
        "Wilton Manors",
        "Lighthouse Point",
        "Hillsboro Beach",
        "Lauderdale-by-the-Sea",
      ],
    },
    {
      name: "Palm Beach County",
      cities: [
        "West Palm Beach",
        "Boca Raton",
        "Delray Beach",
        "Boynton Beach",
        "Lake Worth Beach",
        "Palm Beach Gardens",
        "Jupiter",
        "Wellington",
        "Royal Palm Beach",
        "Riviera Beach",
        "Greenacres",
        "Palm Springs",
        "Lantana",
        "North Palm Beach",
        "Juno Beach",
        "Tequesta",
        "Palm Beach",
        "Highland Beach",
        "Ocean Ridge",
        "Gulf Stream",
      ],
    },
  ],
};
