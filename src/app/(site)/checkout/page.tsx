"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Lock, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useCustomerAuth } from "@/lib/auth-store";
import { useOrders } from "@/lib/order-store";
import { formatPrice } from "@/lib/utils";
import type { Order } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const { user, isLoggedIn, login, register } = useCustomerAuth();
  const { addOrder } = useOrders();

  const [authMode, setAuthMode] = useState<"guest" | "login" | "register">("guest");
  const [authForm, setAuthForm] = useState({ email: "", password: "", name: "", phone: "", company: "" });
  const [authError, setAuthError] = useState("");

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    company: user?.company || "",
    line1: "",
    line2: "",
    city: "",
    county: "",
    postcode: "",
  });

  const [processing, setProcessing] = useState(false);

  const vat = subtotal * 0.2;
  const delivery = subtotal >= 150 ? 0 : 9.99;
  const total = subtotal + vat + delivery;

  if (items.length === 0) {
    return (
      <>
        <section className="bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
          </div>
        </section>
        <section className="bg-clean min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 text-silver mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-navy mb-2">Your cart is empty</h2>
            <Link href="/shop" className="text-teal font-medium hover:underline">Browse Products</Link>
          </div>
        </section>
      </>
    );
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (authMode === "login") {
      const result = login(authForm.email, authForm.password);
      if (!result.success) { setAuthError(result.error || "Login failed"); return; }
      setForm((prev) => ({ ...prev, name: user?.name || prev.name, email: authForm.email, phone: user?.phone || prev.phone, company: user?.company || prev.company }));
    } else if (authMode === "register") {
      if (!authForm.name || !authForm.email || !authForm.password) { setAuthError("Please fill in all required fields"); return; }
      const result = register({ email: authForm.email, password: authForm.password, name: authForm.name, phone: authForm.phone, company: authForm.company });
      if (!result.success) { setAuthError(result.error || "Registration failed"); return; }
      setForm((prev) => ({ ...prev, name: authForm.name, email: authForm.email, phone: authForm.phone, company: authForm.company }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    const order: Order = {
      id: `ord-${Date.now()}`,
      userId: user?.id || null,
      guestEmail: !user ? form.email : null,
      customerName: form.name,
      customerEmail: form.email,
      customerPhone: form.phone,
      company: form.company,
      shippingAddress: {
        line1: form.line1,
        line2: form.line2,
        city: form.city,
        county: form.county,
        postcode: form.postcode,
      },
      items: items.map((i) => ({
        productId: i.productId,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
      subtotal,
      vat,
      total,
      status: "pending",
      stripeSessionId: `cs_demo_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    addOrder(order);
    clearCart();

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push(`/checkout/success?order=${order.id}`);
  };

  const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-300">Complete your order securely</p>
        </div>
      </section>

      <section className="bg-clean">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-teal font-medium hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Section */}
              {!isLoggedIn && (
                <div className="bg-white border border-gray-100 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" /> Account
                  </h2>
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => setAuthMode("guest")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${authMode === "guest" ? "bg-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                      Guest Checkout
                    </button>
                    <button
                      onClick={() => setAuthMode("login")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${authMode === "login" ? "bg-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setAuthMode("register")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${authMode === "register" ? "bg-teal text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                      Create Account
                    </button>
                  </div>

                  {authMode !== "guest" && (
                    <form onSubmit={handleAuth} className="space-y-4">
                      {authMode === "register" && (
                        <div>
                          <label className={labelClass}>Full Name *</label>
                          <input type="text" value={authForm.name} onChange={(e) => setAuthForm((p) => ({ ...p, name: e.target.value }))} className={inputClass} required />
                        </div>
                      )}
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input type="email" value={authForm.email} onChange={(e) => setAuthForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass}>Password *</label>
                        <input type="password" value={authForm.password} onChange={(e) => setAuthForm((p) => ({ ...p, password: e.target.value }))} className={inputClass} required />
                      </div>
                      {authMode === "register" && (
                        <>
                          <div>
                            <label className={labelClass}>Phone</label>
                            <input type="tel" value={authForm.phone} onChange={(e) => setAuthForm((p) => ({ ...p, phone: e.target.value }))} className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Company</label>
                            <input type="text" value={authForm.company} onChange={(e) => setAuthForm((p) => ({ ...p, company: e.target.value }))} className={inputClass} />
                          </div>
                        </>
                      )}
                      {authError && <p className="text-sm text-red-500">{authError}</p>}
                      <button type="submit" className="bg-navy text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-navy/90 transition-colors">
                        {authMode === "login" ? "Sign In" : "Create Account"}
                      </button>
                    </form>
                  )}

                  {authMode === "guest" && (
                    <p className="text-sm text-gray-500">You can create an account after placing your order to track future purchases.</p>
                  )}
                </div>
              )}

              {isLoggedIn && (
                <div className="bg-white border border-gray-100 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                    <User className="w-5 h-5" /> Signed In
                  </h2>
                  <p className="text-sm text-gray-500">Welcome back, {user?.name}! Your order will be linked to your account.</p>
                </div>
              )}

              {/* Shipping Form */}
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
                <h2 className="text-lg font-bold text-navy mb-2">Shipping Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Address Line 1 *</label>
                  <input type="text" name="line1" required value={form.line1} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Address Line 2</label>
                  <input type="text" name="line2" value={form.line2} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass}>City *</label>
                    <input type="text" name="city" required value={form.city} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>County</label>
                    <input type="text" name="county" value={form.county} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Postcode *</label>
                    <input type="text" name="postcode" required value={form.postcode} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Summary */}
            <div>
              <div className="bg-white border border-gray-100 rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-bold text-navy mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} x{item.quantity}</span>
                      <span className="font-medium text-navy">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-3 space-y-2 text-sm">
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
                    <span className="font-medium text-teal">{delivery === 0 ? "Free" : formatPrice(delivery)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="font-bold text-navy">Total</span>
                    <span className="font-bold text-navy text-lg">{formatPrice(total)}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  form="checkout-form"
                  disabled={processing}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-teal text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-teal/90 transition-colors text-sm disabled:opacity-60"
                >
                  <Lock className="w-4 h-4" />
                  {processing ? "Processing..." : `Pay ${formatPrice(total)}`}
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Demo mode — no real payment will be taken</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
