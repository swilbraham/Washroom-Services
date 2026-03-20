"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  "Offices",
  "Schools & Education",
  "Hospitality",
  "Healthcare",
  "Retail",
  "Gyms & Leisure",
  "Industrial & Warehouses",
];

const ITEMS_PER_PAGE = 12;

type SortOption = "featured" | "newest" | "price-asc" | "price-desc";
type StockFilter = "all" | "in-stock" | "low-stock";
type ViewMode = "grid" | "list";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [industry, setIndustry] = useState("");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Category
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // Industry
    if (industry) {
      result = result.filter((p) => p.industries.includes(industry));
    }

    // Stock
    if (stockFilter !== "all") {
      result = result.filter((p) => p.stock === stockFilter);
    }

    // Sort
    switch (sort) {
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "newest":
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [search, category, industry, stockFilter, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleFilterChange = (setter: (v: string) => void) => (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setter(e.target.value);
    setPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setIndustry("");
    setStockFilter("all");
    setSort("featured");
    setPage(1);
  };

  const hasActiveFilters = search || category || industry || stockFilter !== "all";

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our complete range of commercial washroom products, from
            dispensers and consumables to hygiene solutions for every industry.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Top row: search + view toggle */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-silver" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-navy placeholder:text-silver focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors lg:hidden",
                showFilters
                  ? "border-teal bg-teal/5 text-teal"
                  : "border-gray-200 text-navy hover:border-gray-300"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <div className="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={cn(
                  "p-2.5 transition-colors",
                  view === "grid"
                    ? "bg-teal text-white"
                    : "text-silver hover:text-navy"
                )}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setView("list")}
                className={cn(
                  "p-2.5 transition-colors",
                  view === "list"
                    ? "bg-teal text-white"
                    : "text-silver hover:text-navy"
                )}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter row */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-3",
              showFilters ? "flex" : "hidden lg:flex"
            )}
          >
            <select
              value={category}
              onChange={handleFilterChange(setCategory)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            <select
              value={industry}
              onChange={handleFilterChange(setIndustry)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
            >
              <option value="">All Industries</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>

            <select
              value={stockFilter}
              onChange={(e) => {
                setStockFilter(e.target.value as StockFilter);
                setPage(1);
              }}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
            >
              <option value="all">All Stock</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
            >
              <option value="featured">Sort: Featured</option>
              <option value="newest">Sort: Newest</option>
              <option value="price-asc">Sort: Price Low–High</option>
              <option value="price-desc">Sort: Price High–Low</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-teal font-medium hover:underline"
              >
                Clear filters
              </button>
            )}

            <span className="ml-auto text-sm text-silver">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-clean min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-silver mb-2">No products found</p>
              <p className="text-sm text-gray-400 mb-6">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-5 py-2.5 bg-teal text-white text-sm font-medium rounded-lg hover:bg-teal/90 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div
                className={cn(
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "flex flex-col gap-4"
                )}
              >
                {paginated.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    view={view}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-navy bg-white hover:border-gray-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-silver">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-navy bg-white hover:border-gray-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-clean flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-teal/30 border-t-teal rounded-full animate-spin" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
