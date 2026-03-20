"use client";

import { useState, useEffect } from "react";
import { Search, Eye, X } from "lucide-react";
import { enquiries as initialEnquiries } from "@/data/enquiries";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";
import type { ContactEnquiry } from "@/types";

export default function AdminEnquiriesPage() {
  const [enquiriesList, setEnquiriesList] = useState<ContactEnquiry[]>([
    ...initialEnquiries,
  ]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<ContactEnquiry["status"]>("new");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const filtered = enquiriesList.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.company.toLowerCase().includes(search.toLowerCase()) ||
      e.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const selected = selectedId
    ? enquiriesList.find((e) => e.id === selectedId)
    : null;

  const openDetail = (enq: ContactEnquiry) => {
    setSelectedId(enq.id);
    setEditNotes(enq.notes);
    setEditStatus(enq.status);
  };

  const saveDetail = () => {
    if (!selectedId) return;
    setEnquiriesList((prev) =>
      prev.map((e) =>
        e.id === selectedId ? { ...e, notes: editNotes, status: editStatus } : e
      )
    );
    setToast("Enquiry updated");
    setSelectedId(null);
  };

  const statuses = ["all", "new", "contacted", "closed"];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Enquiries</h2>

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
              placeholder="Search by name, company, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            />
          </div>
          <div className="flex gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium capitalize transition-colors",
                  statusFilter === s
                    ? "bg-teal text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {s}
              </button>
            ))}
          </div>
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
                  Company
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium hidden md:table-cell">
                  Email
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Interest
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium hidden sm:table-cell">
                  Date
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((enq) => (
                <tr
                  key={enq.id}
                  className={cn(
                    "border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer",
                    selectedId === enq.id && "bg-teal/5"
                  )}
                  onClick={() => openDetail(enq)}
                >
                  <td className="px-6 py-3 font-medium text-navy">
                    {enq.name}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{enq.company}</td>
                  <td className="px-6 py-3 text-gray-600 hidden md:table-cell">
                    {enq.email}
                  </td>
                  <td className="px-6 py-3 text-gray-600">{enq.interest}</td>
                  <td className="px-6 py-3">
                    <StatusBadge status={enq.status} />
                  </td>
                  <td className="px-6 py-3 text-gray-500 hidden sm:table-cell">
                    {new Date(enq.createdAt).toLocaleDateString("en-GB")}
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openDetail(enq);
                      }}
                      className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors"
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-navy">
              Enquiry Detail
            </h3>
            <button
              onClick={() => setSelectedId(null)}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Name:</span>
              <span className="ml-2 font-medium text-navy">
                {selected.name}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Company:</span>
              <span className="ml-2 font-medium text-navy">
                {selected.company}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Email:</span>
              <span className="ml-2 text-gray-700">{selected.email}</span>
            </div>
            <div>
              <span className="text-gray-500">Phone:</span>
              <span className="ml-2 text-gray-700">{selected.phone}</span>
            </div>
            <div>
              <span className="text-gray-500">Interest:</span>
              <span className="ml-2 text-gray-700">{selected.interest}</span>
            </div>
            <div>
              <span className="text-gray-500">Date:</span>
              <span className="ml-2 text-gray-700">
                {new Date(selected.createdAt).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Message:</p>
            <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-4">
              {selected.message}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">
                Status
              </label>
              <select
                value={editStatus}
                onChange={(e) =>
                  setEditStatus(e.target.value as ContactEnquiry["status"])
                }
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-1.5">
              Notes
            </label>
            <textarea
              rows={3}
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              placeholder="Add internal notes..."
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={saveDetail}
              className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => setSelectedId(null)}
              className="bg-gray-100 text-gray-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
