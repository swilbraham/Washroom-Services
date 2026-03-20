"use client";

import { useState, useEffect, useCallback } from "react";
import { products as seedProducts } from "@/data/products";
import type { Product } from "@/types";

const STORAGE_KEY = "ws_products";

function loadProducts(): Product[] {
  if (typeof window === "undefined") return seedProducts;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return seedProducts;
}

function saveProducts(products: Product[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch {}
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProducts(loadProducts());
    setLoaded(true);
  }, []);

  const update = useCallback((updater: (prev: Product[]) => Product[]) => {
    setProducts((prev) => {
      const next = updater(prev);
      saveProducts(next);
      return next;
    });
  }, []);

  const addProduct = useCallback((product: Product) => {
    update((prev) => [...prev, product]);
  }, [update]);

  const updateProduct = useCallback((id: string, data: Partial<Product>) => {
    update((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  }, [update]);

  const deleteProduct = useCallback((id: string) => {
    update((prev) => prev.filter((p) => p.id !== id));
  }, [update]);

  const toggleFeatured = useCallback((id: string) => {
    update((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
  }, [update]);

  const getProduct = useCallback(
    (idOrSlug: string) => {
      return products.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
    },
    [products]
  );

  const resetProducts = useCallback(() => {
    setProducts(seedProducts);
    saveProducts(seedProducts);
  }, []);

  return {
    products,
    loaded,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleFeatured,
    getProduct,
    resetProducts,
  };
}
