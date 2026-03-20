import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Washroom Solutions | Premium Washroom & Hygiene Products",
  description:
    "Premium dispensers, consumables, sanitary solutions, air care, and workplace hygiene products designed for cleaner, safer spaces.",
  openGraph: {
    title: "Washroom Solutions | Premium Washroom & Hygiene Products",
    description:
      "Premium dispensers, consumables, sanitary solutions, air care, and workplace hygiene products designed for cleaner, safer spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
