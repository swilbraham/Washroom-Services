import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title = "Ready to Upgrade Your Washroom?",
  subtitle = "Get a free, no-obligation quote tailored to your facility. Our team is ready to help.",
  primaryText = "Request a Quote",
  primaryHref = "/contact",
  secondaryText = "Browse Products",
  secondaryHref = "/shop",
}: CTABannerProps) {
  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-silver text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
