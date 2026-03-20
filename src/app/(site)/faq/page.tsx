"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqGroups, faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function FAQPage() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const filteredFaqs = activeGroup
    ? faqs.filter((faq) => faq.group === activeGroup)
    : faqs;

  // Group the filtered FAQs by their group field
  const groupedFaqs = faqGroups
    .filter((group) => !activeGroup || group.name === activeGroup)
    .map((group) => ({
      ...group,
      items: filteredFaqs
        .filter((faq) => faq.group === group.name)
        .map((faq) => ({ question: faq.question, answer: faq.answer })),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              Help &amp; Support
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Frequently Asked{" "}
              <span className="text-teal">Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl leading-relaxed">
              Find answers to the most common questions about our washroom
              products, services, delivery, and sustainability commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveGroup(null)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeGroup === null
                  ? "bg-teal text-white"
                  : "bg-clean text-navy hover:bg-teal/10"
              )}
            >
              All Topics
            </button>
            {faqGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.name)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeGroup === group.name
                    ? "bg-teal text-white"
                    : "bg-clean text-navy hover:bg-teal/10"
                )}
              >
                {group.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {groupedFaqs.map((group) => (
              <div key={group.id}>
                <h2 className="text-xl font-bold text-navy mb-5">
                  {group.name}
                </h2>
                <FAQAccordion items={group.items} />
              </div>
            ))}
          </div>

          {groupedFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No FAQs found for this category.
              </p>
            </div>
          )}

          <div className="mt-12 bg-clean rounded-2xl p-8 text-center">
            <h3 className="text-lg font-semibold text-navy mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Our team is happy to help with any enquiry about our products or
              services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors text-sm"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
