"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Package, LogOut, Clock, Mail, Phone, Building2 } from "lucide-react";
import { useCustomerAuth } from "@/lib/auth-store";
import { useOrders } from "@/lib/order-store";
import { formatPrice, cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AccountPage() {
  const { user, isLoggedIn, login, register, logout } = useCustomerAuth();
  const { getOrdersByUser } = useOrders();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "", company: "" });
  const [error, setError] = useState("");

  const userOrders = user ? getOrdersByUser(user.id) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      const result = login(form.email, form.password);
      if (!result.success) setError(result.error || "Login failed");
    } else {
      if (!form.name || !form.email || !form.password) { setError("Please fill in all required fields"); return; }
      const result = register({ email: form.email, password: form.password, name: form.name, phone: form.phone, company: form.company });
      if (!result.success) setError(result.error || "Registration failed");
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <section className="bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Account</h1>
            <p className="text-gray-300">Sign in or create an account to view your orders</p>
          </div>
        </section>
        <section className="bg-clean min-h-[50vh]">
          <div className="max-w-md mx-auto px-4 py-12">
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <div className="flex gap-3 mb-6">
                <button onClick={() => { setMode("login"); setError(""); }} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${mode === "login" ? "bg-teal text-white" : "bg-gray-100 text-gray-600"}`}>
                  Sign In
                </button>
                <button onClick={() => { setMode("register"); setError(""); }} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${mode === "register" ? "bg-teal text-white" : "bg-gray-100 text-gray-600"}`}>
                  Create Account
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "register" && (
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Password *</label>
                  <input type="password" required value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                </div>
                {mode === "register" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
                    </div>
                  </>
                )}
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button type="submit" className="w-full bg-teal text-white py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors">
                  {mode === "login" ? "Sign In" : "Create Account"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Account</h1>
          <p className="text-gray-300">Welcome back, {user?.name}</p>
        </div>
      </section>

      <section className="bg-clean">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
          {/* Account Info */}
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-navy flex items-center gap-2"><User className="w-5 h-5" /> Account Details</h2>
              <button onClick={logout} className="text-sm text-red-500 font-medium hover:underline flex items-center gap-1"><LogOut className="w-3.5 h-3.5" /> Sign Out</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-silver" /><span className="text-gray-600">{user?.name}</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-silver" /><span className="text-gray-600">{user?.email}</span></div>
              {user?.phone && <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-silver" /><span className="text-gray-600">{user.phone}</span></div>}
              {user?.company && <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-silver" /><span className="text-gray-600">{user.company}</span></div>}
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white border border-gray-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><Package className="w-5 h-5" /> Order History</h2>
            {userOrders.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-silver mx-auto mb-3" />
                <p className="text-gray-500 mb-3">No orders yet</p>
                <Link href="/shop" className="text-teal font-medium text-sm hover:underline">Browse Products</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userOrders.map((order) => (
                  <div key={order.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <p className="font-mono text-sm text-navy font-medium">{order.id}</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{new Date(order.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full capitalize", statusColors[order.status] || "bg-gray-100 text-gray-600")}>{order.status}</span>
                        <span className="font-bold text-navy">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.items.map((item, i) => (
                        <span key={item.productId}>{item.name} x{item.quantity}{i < order.items.length - 1 ? ", " : ""}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
