"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full px-5 py-4 text-left bg-white hover:bg-clean transition-colors"
          >
            <span className="font-medium text-navy text-sm pr-4">{item.question}</span>
            <ChevronDown
              className={cn("w-4 h-4 text-silver shrink-0 transition-transform", openIndex === i && "rotate-180")}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed bg-white">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
