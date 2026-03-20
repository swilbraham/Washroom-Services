"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight, Package } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, itemCount } = useCart();
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  if (items.length === 0) {
    return (
      <>
        <section className="bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          </div>
        </section>
        <section className="bg-clean min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 text-silver mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-navy mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Browse our products and add items to your cart.</p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal/90 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          <p className="text-gray-300">{itemCount} item{itemCount !== 1 ? "s" : ""} in your cart</p>
        </div>
      </section>

      <section className="bg-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4">
                  <Link href={`/shop/${item.slug}`} className="w-20 h-20 bg-clean rounded-lg flex items-center justify-center shrink-0">
                    <Package className="w-8 h-8 text-silver" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/shop/${item.slug}`} className="font-semibold text-navy hover:text-teal transition-colors">{item.name}</Link>
                    <p className="text-sm text-gray-500">{formatPrice(item.price)} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} disabled={item.quantity <= 1} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center text-sm font-medium text-navy">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="font-bold text-navy w-24 text-right">{formatPrice(item.price * item.quantity)}</p>
                  <button onClick={() => removeItem(item.productId)} className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Remove">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <Link href="/shop" className="text-sm text-teal font-medium hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
                </Link>
                <button onClick={clearCart} className="text-sm text-red-500 font-medium hover:underline">Clear Cart</button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-bold text-navy mb-4">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium text-navy">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">VAT (20%)</span>
                    <span className="font-medium text-navy">{formatPrice(vat)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery</span>
                    <span className="font-medium text-teal">{subtotal >= 150 ? "Free" : formatPrice(9.99)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="font-bold text-navy">Total</span>
                    <span className="font-bold text-navy text-lg">{formatPrice(total + (subtotal < 150 ? 9.99 : 0))}</span>
                  </div>
                </div>
                {subtotal < 150 && (
                  <p className="text-xs text-gray-400 mt-3">Free delivery on orders over £150</p>
                )}
                <Link href="/checkout" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-teal/90 transition-colors text-sm">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
