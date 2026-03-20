import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Package,
  ArrowLeft,
  Check,
  Star,
  Truck,
  ShieldCheck,
  Phone,
  ChevronRight,
} from "lucide-react";
import { products } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductCard } from "@/components/ui/ProductCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Washroom Services`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const specEntries = Object.entries(product.specifications);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-teal font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <div className="flex items-center gap-2 mt-2 text-sm text-silver">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-navy transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-navy transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-navy">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery Placeholder */}
            <div>
              <div className="aspect-square bg-clean rounded-2xl flex items-center justify-center border border-gray-100">
                <Package className="w-24 h-24 text-silver" />
              </div>
              {product.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {product.gallery.map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-clean rounded-xl flex items-center justify-center border border-gray-100"
                    >
                      <Package className="w-8 h-8 text-silver/60" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-teal font-medium">
                  {product.category}
                </span>
                <StatusBadge status={product.stock} />
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4">
                {product.name}
              </h1>

              <p className="text-gray-500 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-navy">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-silver">exc. VAT</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-silver mb-8">
                <span>
                  SKU: <span className="text-navy font-medium">{product.sku}</span>
                </span>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-clean rounded-xl">
                  <Truck className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-navy">Free Delivery</p>
                    <p className="text-xs text-silver">On orders over &pound;150</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-clean rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-navy">Warranty</p>
                    <p className="text-xs text-silver">12-month guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-clean rounded-xl">
                  <Phone className="w-5 h-5 text-teal shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-navy">Support</p>
                    <p className="text-xs text-silver">Expert advice available</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors text-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy hover:text-white transition-colors text-sm"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="bg-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Features */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-teal" />
                    </span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-xl font-bold text-navy mb-6">Benefits</h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Star className="w-3 h-3 text-teal" />
                    </span>
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {specEntries.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-xl font-bold text-navy mb-6">Specifications</h2>
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {specEntries.map(([key, value], i) => (
                    <tr
                      key={key}
                      className={cn(
                        "border-b border-gray-50 last:border-0",
                        i % 2 === 0 ? "bg-clean" : "bg-white"
                      )}
                    >
                      <td className="px-5 py-3.5 font-medium text-navy w-1/3">
                        {key}
                      </td>
                      <td className="px-5 py-3.5 text-gray-500">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Industries / Use Cases */}
      {product.industries.length > 0 && (
        <section className="bg-clean">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-xl font-bold text-navy mb-6">
              Ideal For These Industries
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-navy"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl">
              <FAQAccordion items={product.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Delivery Info */}
      <section className="bg-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
            <Truck className="w-8 h-8 text-teal shrink-0" />
            <div>
              <h3 className="font-semibold text-navy mb-1">
                Delivery Information
              </h3>
              <p className="text-sm text-gray-500">
                Free UK mainland delivery on orders over &pound;150. Standard
                delivery is 3&ndash;5 working days. Express and next-day options
                are available at checkout. For bulk or pallet orders, please
                contact our team for a bespoke delivery quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-xl font-bold text-navy mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Our team of washroom specialists can help you find the right products
            for your facility. Get in touch for expert advice and competitive
            pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-teal text-white font-semibold rounded-xl hover:bg-teal/90 transition-colors text-sm"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
