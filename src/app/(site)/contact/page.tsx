"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Talk About Your{" "}
              <span className="text-teal">Washroom Needs</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl leading-relaxed">
              Whether you need a full washroom setup or a simple consumable
              order, our team is ready to help. Get in touch for a free,
              no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Send Us a Message"
            subtitle="Fill in the form below and we will get back to you within 24 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                action="https://formsubmit.co/contact@wirralcarpetcleaning.com"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden fields */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry from Washroom Solutions Website"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value={
                    typeof window !== "undefined"
                      ? `${window.location.origin}/contact/success`
                      : "/contact/success"
                  }
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Name <span className="text-teal">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Email <span className="text-teal">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="0151 000 0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow"
                    />
                  </div>
                </div>

                {/* Product/Service Interest */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Product / Service Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Hand Hygiene Systems">
                      Hand Hygiene Systems
                    </option>
                    <option value="Soap & Sanitiser Dispensers">
                      Soap &amp; Sanitiser Dispensers
                    </option>
                    <option value="Paper Towel Dispensers">
                      Paper Towel Dispensers
                    </option>
                    <option value="Toilet Tissue Systems">
                      Toilet Tissue Systems
                    </option>
                    <option value="Air Care Systems">Air Care Systems</option>
                    <option value="Sanitary Bins & Disposal">
                      Sanitary Bins &amp; Disposal
                    </option>
                    <option value="Hygiene Vending">Hygiene Vending</option>
                    <option value="Surface Hygiene & Janitorial">
                      Surface Hygiene &amp; Janitorial
                    </option>
                    <option value="Full Washroom Setup">
                      Full Washroom Setup
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    Message <span className="text-teal">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-300 focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-shadow resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors text-sm"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-clean rounded-2xl p-8 space-y-8">
                <h3 className="text-lg font-semibold text-navy">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:01510000000"
                        className="text-sm text-gray-500 hover:text-teal transition-colors"
                      >
                        0151 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:contact@wirralcarpetcleaning.com"
                        className="text-sm text-gray-500 hover:text-teal transition-colors break-all"
                      >
                        contact@wirralcarpetcleaning.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy mb-1">
                        Address
                      </p>
                      <p className="text-sm text-gray-500">
                        Liverpool, Merseyside
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy mb-1">
                        Business Hours
                      </p>
                      <div className="text-sm text-gray-500 space-y-0.5">
                        <p>Monday &ndash; Friday: 8:00 AM &ndash; 5:30 PM</p>
                        <p>Saturday: 9:00 AM &ndash; 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Prefer to Browse First?"
        subtitle="Explore our full range of washroom products and solutions."
        primaryText="Browse Products"
        primaryHref="/shop"
        secondaryText="View Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
