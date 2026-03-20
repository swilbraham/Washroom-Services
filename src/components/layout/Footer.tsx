import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Soap Dispensers", href: "/shop?category=soap-dispensers" },
    { label: "Sanitiser Dispensers", href: "/shop?category=hand-sanitiser-dispensers" },
    { label: "Paper Towel Dispensers", href: "/shop?category=paper-towel-dispensers" },
    { label: "Air Fresheners", href: "/shop?category=air-freshener-dispensers" },
    { label: "Sanitary Bins", href: "/shop?category=sanitary-bins" },
    { label: "All Products", href: "/shop" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Offices", href: "/industries#offices" },
    { label: "Schools", href: "/industries#schools" },
    { label: "Hospitality", href: "/industries#hospitality" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Retail", href: "/industries#retail" },
    { label: "Gyms & Leisure", href: "/industries#gyms-leisure" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">WS</span>
              </div>
              <span className="font-bold text-lg">Washroom Solutions</span>
            </div>
            <p className="text-silver text-sm leading-relaxed mb-6 max-w-sm">
              Premium washroom and hygiene products for modern facilities.
              Trusted by offices, schools, healthcare, and hospitality businesses.
            </p>
            <div className="space-y-3">
              <a href="tel:01510000000" className="flex items-center gap-2 text-sm text-silver hover:text-teal transition-colors">
                <Phone className="w-4 h-4" />
                0151 000 0000
              </a>
              <a href="mailto:contact@wirralcarpetcleaning.com" className="flex items-center gap-2 text-sm text-silver hover:text-teal transition-colors">
                <Mail className="w-4 h-4" />
                contact@wirralcarpetcleaning.com
              </a>
              <p className="flex items-center gap-2 text-sm text-silver">
                <MapPin className="w-4 h-4" />
                Liverpool, Merseyside
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-silver hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver">
            &copy; {new Date().getFullYear()} Washroom Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-silver hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-silver hover:text-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
