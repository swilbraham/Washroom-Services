import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  GraduationCap,
  UtensilsCrossed,
  HeartPulse,
  Store,
  Dumbbell,
  Factory,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Washroom Solutions for Every Sector",
  description:
    "Tailored washroom and hygiene solutions for offices, schools, hospitality, healthcare, retail, gyms, and industrial facilities across the UK.",
};

const industryIcons: Record<string, React.ElementType> = {
  Building2,
  GraduationCap,
  UtensilsCrossed,
  HeartPulse,
  Store,
  Dumbbell,
  Factory,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Sector-Specific Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Washroom Solutions Tailored to{" "}
              <span className="text-teal">Your Industry</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl mb-10 leading-relaxed">
              Every sector has unique hygiene requirements. We deliver
              purpose-built washroom systems designed around the specific demands
              of your facility and its users.
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
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-base backdrop-blur-sm"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.icon] || Building2;
              return (
                <Link
                  key={ind.id}
                  href={`#${ind.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-navy hover:bg-teal/10 hover:text-teal transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {ind.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Premium washroom products and managed services for every commercial environment."
          />
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry.icon] || Building2;
              return (
                <div
                  key={industry.id}
                  id={industry.slug}
                  className="scroll-mt-24"
                >
                  <div
                    className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Info */}
                    <div className="lg:w-1/2">
                      <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-teal" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-4">
                        {industry.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
                      >
                        Get a Tailored Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Benefits */}
                    <div className="lg:w-1/2">
                      <div className="bg-clean rounded-2xl p-8">
                        <h4 className="text-sm font-semibold text-navy uppercase tracking-wide mb-4">
                          Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {industry.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-3"
                            >
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need a Solution for Your Industry?"
        subtitle="Tell us about your facility and we'll recommend the perfect washroom setup."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
