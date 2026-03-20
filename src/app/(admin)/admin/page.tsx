"use client";

import Link from "next/link";
import {
  Package,
  Star,
  AlertTriangle,
  MessageSquare,
  Plus,
  ArrowRight,
} from "lucide-react";
import { products } from "@/data/products";
import { enquiries } from "@/data/enquiries";
import { formatPrice } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function AdminDashboard() {
  const totalProducts = products.length;
  const featuredProducts = products.filter((p) => p.featured).length;
  const lowStockItems = products.filter((p) => p.stock === "low-stock").length;
  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e) => e.status === "new").length;

  const recentEnquiries = [...enquiries]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-teal/10 text-teal",
    },
    {
      label: "Featured Products",
      value: featuredProducts,
      icon: Star,
      color: "bg-sky/10 text-sky",
    },
    {
      label: "Low Stock Items",
      value: lowStockItems,
      icon: AlertTriangle,
      color: "bg-warning/10 text-warning",
    },
    {
      label: "Total Enquiries",
      value: totalEnquiries,
      icon: MessageSquare,
      color: "bg-navy/10 text-navy",
    },
    {
      label: "New Enquiries",
      value: newEnquiries,
      icon: MessageSquare,
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-navy">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white border border-gray-100 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <p className="text-2xl font-bold text-navy">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Enquiries */}
      <div className="bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-navy">
            Recent Enquiries
          </h3>
          <Link
            href="/admin/enquiries"
            className="text-sm text-teal hover:underline flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Company
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Interest
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentEnquiries.map((enq) => (
                <tr
                  key={enq.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3 font-medium text-navy">
                    {enq.name}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{enq.company}</td>
                  <td className="px-6 py-3 text-gray-600">{enq.interest}</td>
                  <td className="px-6 py-3">
                    <StatusBadge status={enq.status} />
                  </td>
                  <td className="px-6 py-3 text-gray-500">
                    {new Date(enq.createdAt).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">
          Quick Actions
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 bg-teal text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
          >
            <Plus size={16} />
            Add Product
          </Link>
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <MessageSquare size={16} />
            View Enquiries
          </Link>
          <Link
            href="/admin/faq"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <ArrowRight size={16} />
            Edit FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
