"use client";

import { Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <a
        href="tel:01510000000"
        className="group flex items-center justify-center w-14 h-14 bg-teal hover:bg-teal/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call now
        </span>
      </a>
    </div>
  );
}
