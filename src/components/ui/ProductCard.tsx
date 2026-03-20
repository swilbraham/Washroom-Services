import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

const stockColors = {
  "in-stock": "bg-success/10 text-success",
  "low-stock": "bg-warning/10 text-warning",
  "out-of-stock": "bg-red-100 text-red-600",
};

const stockLabels = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
};

export function ProductCard({ product, view = "grid" }: ProductCardProps) {
  if (view === "list") {
    return (
      <Link
        href={`/shop/${product.slug}`}
        className="group flex gap-6 bg-white rounded-xl border border-gray-100 p-4 card-hover"
      >
        <div className="w-40 h-32 bg-clean rounded-lg flex items-center justify-center shrink-0">
          <Package className="w-12 h-12 text-silver" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-teal font-medium mb-1">{product.category}</p>
              <h3 className="font-semibold text-navy group-hover:text-teal transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.shortDescription}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-bold text-lg text-navy">{formatPrice(product.price)}</p>
              <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", stockColors[product.stock])}>
                {stockLabels[product.stock]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden card-hover flex flex-col"
    >
      <div className="aspect-[4/3] bg-clean flex items-center justify-center relative">
        <Package className="w-16 h-16 text-silver" />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-teal text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-teal font-medium mb-1.5">{product.category}</p>
        <h3 className="font-semibold text-navy group-hover:text-teal transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-navy">{formatPrice(product.price)}</p>
          <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", stockColors[product.stock])}>
            {stockLabels[product.stock]}
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
          <span className="text-teal font-medium group-hover:underline flex items-center gap-1">
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
