import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Truck,
  Headphones,
  Leaf,
  Droplets,
  Wind,
  Trash2,
  SprayCan,
  Hand,
  Building2,
  GraduationCap,
  UtensilsCrossed,
  HeartPulse,
  Store,
  Dumbbell,
  Factory,
  CheckCircle,
  Package,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/settings";
import { faqs } from "@/data/faqs";

const trustItems = [
  { icon: Shield, label: "Quality Assured" },
  { icon: Truck, label: "UK-Wide Delivery" },
  { icon: Headphones, label: "Expert Support" },
  { icon: Leaf, label: "Sustainable Options" },
];

const categoryIcons: Record<string, React.ElementType> = {
  Droplets, Hand, Wind, Trash2, SprayCan, Package,
};

const whyChooseUs = [
  { title: "Premium Products", description: "Carefully selected dispensers and consumables from leading manufacturers.", icon: CheckCircle },
  { title: "Expert Guidance", description: "Our team helps you choose the right products for your facility.", icon: Headphones },
  { title: "Reliable Supply", description: "Dependable delivery schedules to keep your washrooms stocked.", icon: Truck },
  { title: "Sustainable Focus", description: "Eco-friendly options including recycled consumables and refillable systems.", icon: Leaf },
];

const industryIcons: Record<string, React.ElementType> = {
  Building2, GraduationCap, UtensilsCrossed, HeartPulse, Store, Dumbbell, Factory,
};

const industryList = [
  { name: "Offices", icon: "Building2", slug: "offices" },
  { name: "Schools", icon: "GraduationCap", slug: "schools" },
  { name: "Hospitality", icon: "UtensilsCrossed", slug: "hospitality" },
  { name: "Healthcare", icon: "HeartPulse", slug: "healthcare" },
  { name: "Retail", icon: "Store", slug: "retail" },
  { name: "Gyms & Leisure", icon: "Dumbbell", slug: "gyms-leisure" },
  { name: "Industrial", icon: "Factory", slug: "industrial" },
];

const stats = [
  { value: "500+", label: "Products Available" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24hr", label: "Quote Response" },
  { value: "UK Wide", label: "Delivery Coverage" },
];

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
  const topCategories = categories.slice(0, 6);
  const previewFaqs = faqs.slice(0, 5).map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-teal/10 text-teal text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Trusted by facilities across the UK
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Smarter Washroom &amp; Hygiene Solutions for{" "}
              <span className="text-teal">Modern Facilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-silver max-w-2xl mb-10 leading-relaxed">
              Premium dispensers, consumables, sanitary solutions, air care, and workplace
              hygiene products designed for cleaner, safer spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-base backdrop-blur-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-teal" />
                </div>
                <span className="text-sm font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-teal mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-clean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Product Categories"
            subtitle="Everything you need to equip and maintain hygienic, well-stocked washrooms."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {topCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Package;
              return (
                <Link
                  key={cat.id}
                  href={`/shop?category=${cat.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 p-6 card-hover text-center"
                >
                  <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                    <Icon className="w-7 h-7 text-teal" />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{cat.name}</h3>
                  <p className="text-xs text-gray-400">{cat.productCount} products</p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:underline"
            >
              View All Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Products"
            subtitle="Our most popular washroom and hygiene products, chosen by facilities managers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-clean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Washroom Solutions"
            subtitle="We make it easy for you to create cleaner, better-equipped facilities."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-6 card-hover">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored washroom solutions for every sector."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industryList.map((ind) => {
              const Icon = industryIcons[ind.icon] || Building2;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries#${ind.slug}`}
                  className="group text-center p-4 rounded-xl hover:bg-clean transition-colors"
                >
                  <div className="w-12 h-12 bg-navy/5 group-hover:bg-teal/10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors">
                    <Icon className="w-6 h-6 text-navy group-hover:text-teal transition-colors" />
                  </div>
                  <p className="text-xs font-medium text-navy">{ind.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-clean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Trusted by facilities managers and businesses across the UK."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common washroom and hygiene product questions."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={previewFaqs} />
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:underline"
              >
                View All FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
