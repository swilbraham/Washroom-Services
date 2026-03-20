export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  gallery: string[];
  featured: boolean;
  price: number;
  sku: string;
  stock: "in-stock" | "low-stock" | "out-of-stock";
  industries: string[];
  faqs: { question: string; answer: string }[];
  specifications: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface ContactEnquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  status: "new" | "contacted" | "closed";
  notes: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  notes: string;
  enquiryIds: string[];
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  group: string;
}

export interface FAQGroup {
  id: string;
  name: string;
  slug: string;
}

export interface SiteSettings {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  ctaText: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
}

// ── Cart ─────────────────────────────────────────────────────────────────────

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// ── Auth / User ──────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  company: string;
  passwordHash: string; // simple hash for demo only
  createdAt: string;
}

// ── Orders ───────────────────────────────────────────────────────────────────

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string | null; // null = guest
  guestEmail: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  company: string;
  shippingAddress: {
    line1: string;
    line2: string;
    city: string;
    county: string;
    postcode: string;
  };
  items: OrderItem[];
  subtotal: number;
  vat: number;
  total: number;
  status: OrderStatus;
  stripeSessionId: string | null;
  createdAt: string;
}
