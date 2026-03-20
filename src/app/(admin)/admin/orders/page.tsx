"use client";

import { useState } from "react";
import { Package, Search, User, Clock, MapPin } from "lucide-react";
import { useOrders } from "@/lib/order-store";
import { formatPrice, cn } from "@/lib/utils";
import type { OrderStatus } from "@/types";

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const statuses: OrderStatus[] = ["pending", "processing", "shipped", "delivered", "cancelled"];

export default function AdminOrdersPage() {
  const { allOrders, updateOrderStatus } = useOrders();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const filtered = allOrders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.customerEmail.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = allOrders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = allOrders.filter((o) => o.status === "pending").length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Orders</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold text-navy">{allOrders.length}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-navy">{formatPrice(totalRevenue)}</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="text-sm text-gray-500">Pending Orders</p>
          <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search orders..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal" />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal">
            <option value="all">All Statuses</option>
            {statuses.map((s) => (
              <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-xl p-12 text-center">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400">No orders found</p>
          </div>
        ) : (
          filtered.map((order) => (
            <div key={order.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-teal" />
                    <div>
                      <p className="font-mono text-sm font-medium text-navy">{order.id}</p>
                      <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-navy">{order.customerName}</p>
                      <p className="text-xs text-gray-400">{order.customerEmail}</p>
                    </div>
                    <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full capitalize", statusColors[order.status])}>{order.status}</span>
                    <span className="font-bold text-navy">{formatPrice(order.total)}</span>
                  </div>
                </div>
              </button>

              {expandedOrder === order.id && (
                <div className="border-t border-gray-100 p-4 bg-gray-50/50 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 flex items-center gap-1 mb-1"><User className="w-3.5 h-3.5" /> Customer</p>
                      <p className="text-navy font-medium">{order.customerName}</p>
                      <p className="text-gray-500">{order.customerEmail}</p>
                      {order.customerPhone && <p className="text-gray-500">{order.customerPhone}</p>}
                      {order.company && <p className="text-gray-500">{order.company}</p>}
                      <p className="text-xs mt-1">{order.userId ? <span className="text-teal">Registered Customer</span> : <span className="text-gray-400">Guest Checkout</span>}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 flex items-center gap-1 mb-1"><MapPin className="w-3.5 h-3.5" /> Shipping</p>
                      <p className="text-navy">{order.shippingAddress.line1}</p>
                      {order.shippingAddress.line2 && <p className="text-navy">{order.shippingAddress.line2}</p>}
                      <p className="text-navy">{order.shippingAddress.city}{order.shippingAddress.county ? `, ${order.shippingAddress.county}` : ""}</p>
                      <p className="text-navy">{order.shippingAddress.postcode}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 flex items-center gap-1 mb-1"><Clock className="w-3.5 h-3.5" /> Update Status</p>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Items</p>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left px-4 py-2 text-gray-500 font-medium">Product</th>
                            <th className="text-left px-4 py-2 text-gray-500 font-medium">Qty</th>
                            <th className="text-left px-4 py-2 text-gray-500 font-medium">Price</th>
                            <th className="text-right px-4 py-2 text-gray-500 font-medium">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((item) => (
                            <tr key={item.productId} className="border-t border-gray-100">
                              <td className="px-4 py-2 text-navy">{item.name}</td>
                              <td className="px-4 py-2 text-gray-600">{item.quantity}</td>
                              <td className="px-4 py-2 text-gray-600">{formatPrice(item.price)}</td>
                              <td className="px-4 py-2 text-right font-medium text-navy">{formatPrice(item.price * item.quantity)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t border-gray-200 bg-gray-50">
                            <td colSpan={3} className="px-4 py-2 text-right text-gray-500">Subtotal</td>
                            <td className="px-4 py-2 text-right font-medium text-navy">{formatPrice(order.subtotal)}</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td colSpan={3} className="px-4 py-2 text-right text-gray-500">VAT (20%)</td>
                            <td className="px-4 py-2 text-right font-medium text-navy">{formatPrice(order.vat)}</td>
                          </tr>
                          <tr className="bg-gray-50 border-t border-gray-200">
                            <td colSpan={3} className="px-4 py-2 text-right font-bold text-navy">Total</td>
                            <td className="px-4 py-2 text-right font-bold text-navy">{formatPrice(order.total)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
