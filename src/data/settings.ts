import type { SiteSettings, Testimonial } from "@/types";

export const siteSettings: SiteSettings = {
  companyName: "Washroom Solutions",
  phone: "0151 000 0000",
  email: "contact@wirralcarpetcleaning.com",
  address: "Liverpool, Merseyside",
  ctaText: "Get a Free Quote Today",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Mitchell",
    role: "Facilities Manager",
    company: "Riverside Business Park",
    quote:
      "Since switching to Washroom Solutions our washroom complaints have dropped to virtually zero. The service team is reliable, professional, and always leaves everything spotless.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "David Clarke",
    role: "Office Manager",
    company: "Strand Legal Associates",
    quote:
      "The team took the hassle out of managing our washroom supplies entirely. Everything is topped up on schedule and the quality of the consumables is noticeably better than our previous provider.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Karen Hughes",
    role: "School Business Manager",
    company: "St Andrew's Primary Academy",
    quote:
      "Excellent value for money and a genuinely flexible service. When we needed extra sanitary units for a school event they arranged installation within 48 hours with no fuss at all.",
    rating: 4,
  },
  {
    id: "test-4",
    name: "James Thornton",
    role: "Operations Director",
    company: "NorthWest Leisure Group",
    quote:
      "Managing washrooms across multiple leisure centres used to be a real headache. Washroom Solutions streamlined everything into one contract with consistent quality at every site.",
    rating: 5,
  },
  {
    id: "test-5",
    name: "Linda Beckett",
    role: "Practice Manager",
    company: "Parkfield Medical Centre",
    quote:
      "Hygiene standards in a healthcare setting are non-negotiable and this team understands that completely. The touch-free dispensers and clinical waste service have been faultless from day one.",
    rating: 4,
  },
];
