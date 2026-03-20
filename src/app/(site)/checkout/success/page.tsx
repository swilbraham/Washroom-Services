"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Package, User } from "lucide-react";
import { useCustomerAuth } from "@/lib/auth-store";
import { useOrders } from "@/lib/order-store";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");
  const { isLoggedIn, register } = useCustomerAuth();
  const { allOrders } = useOrders();

  const order = allOrders.find((o) => o.id === orderId);

  const [showRegister, setShowRegister] = useState(false);
  const [regForm, setRegForm] = useState({ password: "", confirm: "" });
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (regForm.password.length < 6) { setRegError("Password must be at least 6 characters"); return; }
    if (regForm.password !== regForm.confirm) { setRegError("Passwords do not match"); return; }
    if (!order) return;
    const result = register({
      email: order.customerEmail,
      password: regForm.password,
      name: order.customerName,
      phone: order.customerPhone,
      company: order.company,
    });
    if (!result.success) { setRegError(result.error || "Registration failed"); return; }
    setRegSuccess(true);
  };

  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-300">Thank you for your order</p>
        </div>
      </section>

      <section className="bg-clean">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          {order && (
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-teal" />
                <h2 className="text-lg font-bold text-navy">Order Details</h2>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Order ID</span><span className="font-mono text-navy">{order.id}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="text-teal font-medium capitalize">{order.status}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Items</span><span className="text-navy">{order.items.length} product{order.items.length !== 1 ? "s" : ""}</span></div>
                <div className="border-t border-gray-100 pt-2 flex justify-between"><span className="font-bold text-navy">Total</span><span className="font-bold text-navy">{formatPrice(order.total)}</span></div>
              </div>
            </div>
          )}

          {/* Guest account creation prompt */}
          {!isLoggedIn && order && !regSuccess && (
            <div className="bg-white border border-teal/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-teal" />
                <h2 className="text-lg font-bold text-navy">Create an Account</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">Create an account to track your orders and speed up future checkouts.</p>
              {!showRegister ? (
                <button onClick={() => setShowRegister(true)} className="bg-teal text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors">
                  Create Account
                </button>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <p className="text-sm text-gray-600">Account email: <strong>{order.customerEmail}</strong></p>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Choose a Password *</label>
                    <input type="password" required minLength={6} value={regForm.password} onChange={(e) => setRegForm((p) => ({ ...p, password: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Confirm Password *</label>
                    <input type="password" required minLength={6} value={regForm.confirm} onChange={(e) => setRegForm((p) => ({ ...p, confirm: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                  </div>
                  {regError && <p className="text-sm text-red-500">{regError}</p>}
                  <button type="submit" className="bg-teal text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors">Create Account</button>
                </form>
              )}
            </div>
          )}

          {regSuccess && (
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-teal mx-auto mb-2" />
              <p className="font-semibold text-navy">Account created successfully!</p>
              <p className="text-sm text-gray-500">You can now track orders and enjoy faster checkout.</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {isLoggedIn && (
              <Link href="/account" className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-medium hover:bg-navy/90 transition-colors text-sm">
                View My Orders
              </Link>
            )}
            <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal/90 transition-colors text-sm">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-clean flex items-center justify-center"><div className="w-8 h-8 border-4 border-teal/30 border-t-teal rounded-full animate-spin" /></div>}>
      <SuccessContent />
    </Suspense>
  );
}
