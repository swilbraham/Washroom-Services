"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImagePlus, X } from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import { slugify } from "@/lib/utils";
import { useProducts } from "@/lib/product-store";

export default function NewProductPage() {
  const router = useRouter();
  const { addProduct } = useProducts();
  const [toast, setToast] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "",
    shortDescription: "",
    description: "",
    price: "",
    sku: "",
    stock: "in-stock" as "in-stock" | "low-stock" | "out-of-stock",
    featured: false,
    industries: [] as string[],
    features: "",
    benefits: "",
    image: "",
    gallery: [] as string[],
  });
  const [galleryInput, setGalleryInput] = useState("");

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "name") updated.slug = slugify(value);
      return updated;
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleIndustryToggle = (industryName: string) => {
    setForm((prev) => ({
      ...prev,
      industries: prev.industries.includes(industryName)
        ? prev.industries.filter((i) => i !== industryName)
        : [...prev.industries, industryName],
    }));
  };

  const addGalleryImage = () => {
    if (galleryInput.trim()) {
      setForm((prev) => ({ ...prev, gallery: [...prev.gallery, galleryInput.trim()] }));
      setGalleryInput("");
    }
  };

  const removeGalleryImage = (index: number) => {
    setForm((prev) => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `prod-${Date.now()}`;
    addProduct({
      id,
      slug: form.slug,
      name: form.name,
      category: form.category,
      shortDescription: form.shortDescription,
      description: form.description,
      features: form.features.split("\n").filter(Boolean),
      benefits: form.benefits.split("\n").filter(Boolean),
      image: form.image || `/images/products/${form.slug}.jpg`,
      gallery: form.gallery,
      featured: form.featured,
      price: parseFloat(form.price) || 0,
      sku: form.sku,
      stock: form.stock,
      industries: form.industries,
      faqs: [],
      specifications: {},
    });
    setToast("Product created successfully!");
    setTimeout(() => router.push("/admin/products"), 1000);
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className="p-2 text-gray-400 hover:text-navy rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-navy">Add New Product</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>Product Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="e.g. Touch-Free Soap Dispenser" />
            </div>
            <div>
              <label htmlFor="slug" className={labelClass}>Slug</label>
              <input id="slug" name="slug" type="text" required value={form.slug} onChange={handleChange} className={inputClass} placeholder="auto-generated-from-name" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="category" className={labelClass}>Category</label>
              <select id="category" name="category" required value={form.category} onChange={handleChange} className={inputClass}>
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sku" className={labelClass}>SKU</label>
              <input id="sku" name="sku" type="text" required value={form.sku} onChange={handleChange} className={inputClass} placeholder="e.g. WS-1001" />
            </div>
          </div>
          <div>
            <label htmlFor="shortDescription" className={labelClass}>Short Description</label>
            <input id="shortDescription" name="shortDescription" type="text" required value={form.shortDescription} onChange={handleChange} className={inputClass} placeholder="Brief product summary" />
          </div>
          <div>
            <label htmlFor="description" className={labelClass}>Full Description</label>
            <textarea id="description" name="description" required rows={4} value={form.description} onChange={handleChange} className={inputClass} placeholder="Detailed product description" />
          </div>
        </div>

        {/* Images */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
            <ImagePlus size={20} /> Product Images
          </h3>
          <div>
            <label htmlFor="image" className={labelClass}>Main Image URL</label>
            <input id="image" name="image" type="url" value={form.image} onChange={handleChange} className={inputClass} placeholder="https://example.com/product-image.jpg" />
            <p className="text-xs text-gray-400 mt-1">Enter a URL for the main product image, or leave blank for placeholder</p>
          </div>
          <div>
            <label className={labelClass}>Gallery Images</label>
            <div className="flex gap-2 mb-3">
              <input
                type="url"
                value={galleryInput}
                onChange={(e) => setGalleryInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addGalleryImage(); } }}
                className={inputClass}
                placeholder="https://example.com/gallery-image.jpg"
              />
              <button type="button" onClick={addGalleryImage} className="px-4 py-2.5 bg-teal text-white rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors shrink-0">
                Add
              </button>
            </div>
            {form.gallery.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {form.gallery.map((url, i) => (
                  <div key={i} className="flex items-center gap-1 bg-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">
                    <span className="max-w-[200px] truncate">{url}</span>
                    <button type="button" onClick={() => removeGalleryImage(i)} className="text-gray-400 hover:text-red-500">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy">Pricing &amp; Stock</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="price" className={labelClass}>Price (&pound;)</label>
              <input id="price" name="price" type="number" step="0.01" min="0" required value={form.price} onChange={handleChange} className={inputClass} placeholder="0.00" />
            </div>
            <div>
              <label htmlFor="stock" className={labelClass}>Stock Status</label>
              <select id="stock" name="stock" value={form.stock} onChange={handleChange} className={inputClass}>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer pb-2.5">
                <input type="checkbox" name="featured" checked={form.featured} onChange={handleCheckbox} className="w-4 h-4 text-teal rounded border-gray-300 focus:ring-teal" />
                <span className="text-sm font-medium text-navy">Featured Product</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-navy">Industries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <label key={ind.id} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.industries.includes(ind.name)} onChange={() => handleIndustryToggle(ind.name)} className="w-4 h-4 text-teal rounded border-gray-300 focus:ring-teal" />
                <span className="text-sm text-gray-700">{ind.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy">Features &amp; Benefits</h3>
          <div>
            <label htmlFor="features" className={labelClass}>Features (one per line)</label>
            <textarea id="features" name="features" rows={4} value={form.features} onChange={handleChange} className={inputClass} placeholder="Enter each feature on a new line" />
          </div>
          <div>
            <label htmlFor="benefits" className={labelClass}>Benefits (one per line)</label>
            <textarea id="benefits" name="benefits" rows={4} value={form.benefits} onChange={handleChange} className={inputClass} placeholder="Enter each benefit on a new line" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="bg-teal text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors">
            Create Product
          </button>
          <Link href="/admin/products" className="bg-gray-100 text-gray-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Cancel
          </Link>
        </div>
      </form>

      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
