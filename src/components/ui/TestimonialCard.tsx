import { Star } from "lucide-react";
import { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-warning fill-warning" : "text-gray-200"}`}
          />
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-5">&ldquo;{testimonial.quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-sm text-navy">{testimonial.name}</p>
        <p className="text-xs text-gray-400">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
