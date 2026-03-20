import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Target,
  Leaf,
  Users,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Washroom Solutions",
  description:
    "Learn about our mission to deliver premium washroom and hygiene solutions. Discover our values, sustainability commitments, and customer-first approach.",
};

const values = [
  {
    icon: Shield,
    title: "Quality Without Compromise",
    description:
      "Every product we supply is rigorously tested and sourced from trusted manufacturers to ensure lasting performance in demanding commercial environments.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "We believe that clean, well-equipped washrooms positively impact the wellbeing and productivity of the people who use them every day.",
  },
  {
    icon: Target,
    title: "Precision & Reliability",
    description:
      "From product selection to delivery scheduling, we operate with the precision your facility demands. When we commit to a service level, we deliver it.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    description:
      "Environmental responsibility is built into everything we do, from sourcing FSC-certified paper to offering refillable, low-waste dispensing systems.",
  },
];

const sustainabilityPoints = [
  "FSC and PEFC certified paper products from responsibly managed forests",
  "100% recycled paper options across our towel and tissue range",
  "Refillable dispensing systems that minimise single-use packaging",
  "Concentrated cleaning formulas that reduce plastic waste",
  "Route-optimised delivery schedules to lower carbon emissions",
  "End-of-life dispenser recycling programme",
];

const customerPoints = [
  {
    icon: Award,
    title: "Free Site Surveys",
    description:
      "We visit your premises, assess your requirements, and recommend the ideal washroom setup at no cost or obligation.",
  },
  {
    icon: Heart,
    title: "Tailored Service Plans",
    description:
      "No two facilities are alike. We build bespoke service schedules around your footfall, budget, and hygiene standards.",
  },
  {
    icon: Target,
    title: "Responsive Support",
    description:
      "If something needs attention between visits, our support team arranges a prompt response to keep your washrooms running smoothly.",
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description:
      "Every client has a named account manager who understands your facility and ensures your service evolves as your needs change.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Committed to{" "}
              <span className="text-teal">Cleaner Spaces</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl leading-relaxed">
              We partner with businesses across the UK to deliver washroom and
              hygiene solutions that protect health, enhance comfort, and reflect
              the standards your facility deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Who We Are"
              subtitle="Founded with a mission to deliver premium washroom solutions that businesses can rely on."
            />
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Founded with a mission to deliver premium washroom solutions to
                businesses of every size, Washroom Solutions was born from a
                simple belief: that every facility deserves access to
                high-quality hygiene products backed by dependable, professional
                service.
              </p>
              <p>
                We recognised that many organisations were settling for
                unreliable suppliers, inconsistent stock, and poor-quality
                consumables. We set out to change that by combining carefully
                curated products from leading manufacturers with a service model
                built around flexibility, transparency, and genuine care for our
                customers.
              </p>
              <p>
                Today, we supply and service washrooms across offices, schools,
                hospitals, hospitality venues, retail spaces, and industrial
                facilities throughout the North West and beyond. Our growing
                range covers everything from soap and sanitiser dispensers to air
                care, sanitary disposal, and surface hygiene products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-clean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide every product we supply and every service we deliver."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-gray-100 p-6 card-hover"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hygiene Matters */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy rounded-2xl p-8 sm:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-teal/20 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Why Hygiene Matters
                  </h2>
                  <p className="text-silver text-sm">
                    The case for investing in washroom hygiene
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-silver leading-relaxed">
                <p>
                  Hand hygiene remains one of the most effective and affordable
                  measures for reducing the spread of germs in any shared
                  environment. Studies consistently show that proper handwashing
                  can reduce the risk of respiratory and gastrointestinal
                  illnesses by up to 20&ndash;30%.
                </p>
                <p>
                  For businesses, this translates directly into fewer sick days,
                  higher productivity, and a safer environment for staff and
                  visitors alike. Well-maintained washrooms also shape how people
                  perceive your organisation&mdash;reinforcing professionalism,
                  care, and attention to detail.
                </p>
                <p>
                  By investing in quality dispensers, reliable consumables, and
                  professional servicing, you create a washroom environment that
                  actively protects the people who use it every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-clean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Sustainability Commitments"
            subtitle="We are committed to reducing environmental impact across every aspect of our business."
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-navy">
                  Environmental Responsibility
                </h3>
              </div>
              <ul className="space-y-3">
                {sustainabilityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-First */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Customer-First Approach"
            subtitle="Your satisfaction drives everything we do. Here is how we deliver on that promise."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {customerPoints.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-5 bg-clean rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Partner With Us?"
        subtitle="Let us show you how our washroom solutions can make a difference in your facility."
      />
    </>
  );
}
