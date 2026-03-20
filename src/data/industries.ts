import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "ind-1", name: "Offices", slug: "offices", icon: "Building2",
    image: "/images/industries/offices.jpg",
    description: "Create a cleaner, healthier workspace with premium washroom solutions designed for modern office buildings.",
    benefits: ["Reduce sick days with effective hand hygiene stations", "Touch-free dispensers for shared washrooms", "Air care systems for a pleasant environment", "Managed service options for hassle-free maintenance"],
  },
  {
    id: "ind-2", name: "Schools & Education", slug: "schools", icon: "GraduationCap",
    image: "/images/industries/schools.jpg",
    description: "Child-friendly, durable washroom products that promote good hygiene habits from an early age.",
    benefits: ["Robust, tamper-resistant dispensers", "Colourful, engaging hygiene solutions", "High-capacity systems for busy break times", "Affordable consumable refills"],
  },
  {
    id: "ind-3", name: "Hospitality", slug: "hospitality", icon: "UtensilsCrossed",
    image: "/images/industries/hospitality.jpg",
    description: "Impress guests with premium washroom fixtures that match your venue's quality standards.",
    benefits: ["Sleek designer dispensers", "Premium air care and fragrances", "High-capacity for peak service", "Branded washroom accessories"],
  },
  {
    id: "ind-4", name: "Healthcare", slug: "healthcare", icon: "HeartPulse",
    image: "/images/industries/healthcare.jpg",
    description: "Clinical-grade hygiene products designed for infection control in healthcare facilities.",
    benefits: ["Touch-free sensor-operated units", "Antimicrobial surfaces", "Clinical waste disposal solutions", "Compliance-ready products"],
  },
  {
    id: "ind-5", name: "Retail", slug: "retail", icon: "Store",
    image: "/images/industries/retail.jpg",
    description: "Keep customer washrooms clean and stocked with reliable, cost-effective solutions.",
    benefits: ["Compact dispensers for smaller washrooms", "Easy-refill consumable systems", "Cost-effective bulk options", "Discreet sanitary disposal"],
  },
  {
    id: "ind-6", name: "Gyms & Leisure", slug: "gyms-leisure", icon: "Dumbbell",
    image: "/images/industries/gyms.jpg",
    description: "High-performance washroom products built for heavy footfall and demanding environments.",
    benefits: ["Heavy-duty, vandal-resistant units", "Fast-refill consumable systems", "Powerful air care for changing rooms", "Surface hygiene solutions"],
  },
  {
    id: "ind-7", name: "Industrial & Warehouses", slug: "industrial", icon: "Factory",
    image: "/images/industries/industrial.jpg",
    description: "Tough, reliable washroom equipment built for factories, warehouses, and industrial facilities.",
    benefits: ["Industrial-grade dispensers", "Heavy-duty hand cleaner systems", "High-capacity paper and tissue", "Robust mounting solutions"],
  },
];
