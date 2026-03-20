import Link from "next/link";
import type { Metadata } from "next";
import {
  Droplets,
  Hand,
  Layers,
  Circle,
  Wind,
  Trash2,
  ShoppingBag,
  SprayCan,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Washroom Solutions | Premium Hygiene Systems for Every Facility",
  description:
    "Explore our complete range of commercial washroom solutions including hand hygiene, soap dispensers, paper towels, toilet tissue, air care, sanitary disposal, vending, and surface hygiene products.",
};

const solutions = [
  {
    icon: Droplets,
    title: "Hand Hygiene Systems",
    description:
      "Promote a healthier workplace with our comprehensive hand hygiene stations. From sensor-operated soap dispensers to strategically placed sanitiser units, our systems are engineered to encourage compliance and reduce the spread of infection across your facility.",
    benefits: [
      "Touch-free dispensing reduces cross-contamination",
      "NHS and HSE compliant signage available",
      "Foam, gel, and antibacterial formulations",
      "Refill monitoring to prevent empty dispensers",
    ],
    href: "/shop?category=soap-dispensers",
  },
  {
    icon: Hand,
    title: "Soap & Sanitiser Dispensers",
    description:
      "Equip every wash station with reliable, premium dispensers that deliver the right dose every time. Our range includes manual, automatic, and bulk-fill options designed for high-traffic commercial washrooms where consistency and hygiene are paramount.",
    benefits: [
      "Automatic and manual options available",
      "Controlled dosing reduces waste by up to 30%",
      "Compatible with antibacterial and eco-friendly refills",
      "Sleek, professional designs for any washroom",
    ],
    href: "/shop?category=hand-sanitiser-dispensers",
  },
  {
    icon: Layers,
    title: "Paper Towel Dispensers",
    description:
      "Deliver a superior hand-drying experience with our efficient paper towel dispensing systems. Controlled dispensing technology ensures minimal waste while maintaining a tidy, well-stocked washroom that reflects positively on your business.",
    benefits: [
      "C-fold, Z-fold, and auto-cut options",
      "Controlled dispensing minimises paper waste",
      "High-capacity for reduced refill frequency",
      "FSC-certified and recycled paper available",
    ],
    href: "/shop?category=paper-towel-dispensers",
  },
  {
    icon: Circle,
    title: "Toilet Tissue Systems",
    description:
      "Never let your washrooms run short with our reliable toilet tissue dispensing systems. Jumbo roll and twin-roll dispensers are purpose-built for commercial environments, offering maximum capacity with straightforward maintenance.",
    benefits: [
      "Jumbo and standard roll dispensers",
      "Twin-roll systems for uninterrupted supply",
      "Lockable units prevent pilferage",
      "Sustainably sourced tissue options",
    ],
    href: "/shop?category=toilet-roll-dispensers",
  },
  {
    icon: Wind,
    title: "Air Care Systems",
    description:
      "Create a consistently fresh and welcoming washroom environment with our programmable air care solutions. Our systems neutralise odours at the source rather than merely masking them, ensuring a pleasant experience for every visitor.",
    benefits: [
      "Programmable aerosol and passive gel systems",
      "Odour-neutralising technology",
      "Wide fragrance selection including fragrance-free",
      "COSHH compliant for enclosed spaces",
    ],
    href: "/shop?category=air-freshener-dispensers",
  },
  {
    icon: Trash2,
    title: "Sanitary Bins & Disposal",
    description:
      "Maintain dignity and compliance with our discreet, hygienic sanitary disposal services. All waste is collected and disposed of in full accordance with environmental regulations, giving you complete peace of mind and a full audit trail.",
    benefits: [
      "Regular 4-weekly servicing schedule",
      "Fully compliant with waste regulations",
      "Sealed, odour-controlled pedal bins",
      "Nappy disposal units also available",
    ],
    href: "/shop?category=sanitary-bins",
  },
  {
    icon: ShoppingBag,
    title: "Vending Units for Hygiene Essentials",
    description:
      "Offer your visitors and staff convenient access to personal hygiene products when they need them most. Our modern vending units accept coins and contactless payment, providing a valuable amenity that enhances your washroom offering.",
    benefits: [
      "Coin and contactless payment options",
      "Stock a range of personal care essentials",
      "Revenue-generating washroom amenity",
      "Compact design for any washroom layout",
    ],
    href: "/shop?category=hygiene-vending-machines",
  },
  {
    icon: SprayCan,
    title: "Surface Hygiene, Wipes & Janitorial",
    description:
      "Keep every surface spotless with our professional-grade cleaning and disinfection products. From antibacterial wipes to concentrated surface cleaners, our janitorial range provides the tools your cleaning team needs to maintain the highest standards.",
    benefits: [
      "Antibacterial wipes and surface sprays",
      "Concentrated formulas for cost efficiency",
      "Suitable for healthcare and food environments",
      "Bulk supply options for larger facilities",
    ],
    href: "/shop?category=surface-hygiene-products",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <CheckCircle className="w-4 h-4" />
              Complete Washroom Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Hygiene Solutions for{" "}
              <span className="text-teal">Every Facility</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl mb-10 leading-relaxed">
              From hand hygiene and air care to sanitary disposal and surface
              cleaning, we provide everything your washrooms need to stay clean,
              compliant, and welcoming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-base backdrop-blur-sm"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="A comprehensive range of washroom and hygiene products designed for commercial environments."
          />
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon & Title Block */}
                <div className="lg:w-5/12">
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-5">
                    <solution.icon className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:underline"
                  >
                    View Products <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Benefits */}
                <div className="lg:w-7/12">
                  <div className="bg-clean rounded-2xl p-8">
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
