import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Sent | Washroom Solutions",
  description: "Thank you for contacting us. We will be in touch shortly.",
};

export default function ContactSuccessPage() {
  return (
    <section className="bg-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-teal" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Thank You!
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Your message has been sent successfully. Our team will review your
            enquiry and be in touch shortly, typically within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal/90 text-white font-medium px-7 py-3 rounded-lg transition-colors text-sm"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-clean hover:bg-gray-100 text-navy font-medium px-7 py-3 rounded-lg transition-colors text-sm"
            >
              Send Another Message
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
