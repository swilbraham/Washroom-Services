"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Plus, Star, Pencil, Trash2 } from "lucide-react";
import { products as initialProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice, cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Product } from "@/types";

export default function AdminProductsPage() {
  const [productsList, setProductsList] = useState<Product[]>([
    ...initialProducts,
  ]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const filtered = productsList.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const toggleFeatured = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
    setToast("Product updated");
  };

  const deleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProductsList((prev) => prev.filter((p) => p.id !== id));
      setToast("Product deleted");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-navy">Products</h2>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
        >
          <Plus size={16} />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Category
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Price
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Stock
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Featured
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3 font-medium text-navy">
                    {product.name}
                  </td>
                  <td className="px-6 py-3 text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-3 text-gray-600">
                    {formatPrice(product.price)}
                  </td>
                  <td className="px-6 py-3">
                    <StatusBadge status={product.stock} />
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => toggleFeatured(product.id)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <Star
                        size={18}
                        className={cn(
                          product.featured && "fill-yellow-400 text-yellow-400"
                        )}
                      />
                    </button>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href="/admin/products/new"
                        className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50 animate-in fade-in slide-in-from-bottom-2">
          {toast}
        </div>
      )}
    </div>
  );
}
