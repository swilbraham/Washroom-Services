"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { customers as initialCustomers, enquiries } from "@/data/enquiries";
import { cn } from "@/lib/utils";
import type { Customer } from "@/types";

export default function AdminCustomersPage() {
  const [customersList, setCustomersList] = useState<Customer[]>([
    ...initialCustomers,
  ]);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const filtered = customersList.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const toggleExpand = (customer: Customer) => {
    if (expandedId === customer.id) {
      setExpandedId(null);
    } else {
      setExpandedId(customer.id);
      setEditNotes(customer.notes);
    }
  };

  const saveNotes = (id: string) => {
    setCustomersList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, notes: editNotes } : c))
    );
    setToast("Customer notes saved");
    setExpandedId(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">Customers</h2>

      {/* Search */}
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <div className="relative">
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
                <th className="text-left px-6 py-3 text-gray-500 font-medium hidden sm:table-cell">
                  Industry
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">
                  Enquiries
                </th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium hidden sm:table-cell">
                  Date
                </th>
                <th className="w-10 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((customer) => (
                <>
                  <tr
                    key={customer.id}
                    className={cn(
                      "border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer",
                      expandedId === customer.id && "bg-teal/5"
                    )}
                    onClick={() => toggleExpand(customer)}
                  >
                    <td className="px-6 py-3 font-medium text-navy">
                      {customer.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {customer.company}
                    </td>
                    <td className="px-6 py-3 text-gray-600 hidden md:table-cell">
                      {customer.email}
                    </td>
                    <td className="px-6 py-3 text-gray-600 hidden sm:table-cell">
                      {customer.industry}
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      {customer.enquiryIds.length}
                    </td>
                    <td className="px-6 py-3 text-gray-500 hidden sm:table-cell">
                      {new Date(customer.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-6 py-3">
                      {expandedId === customer.id ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </td>
                  </tr>

                  {/* Expanded Detail */}
                  {expandedId === customer.id && (
                    <tr key={`${customer.id}-detail`}>
                      <td colSpan={7} className="px-6 py-5 bg-gray-50/50">
                        <div className="space-y-4 max-w-2xl">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-500">Phone:</span>
                              <span className="ml-2 text-gray-700">
                                {customer.phone}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Industry:</span>
                              <span className="ml-2 text-gray-700">
                                {customer.industry}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Email:</span>
                              <span className="ml-2 text-gray-700">
                                {customer.email}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">
                                Customer since:
                              </span>
                              <span className="ml-2 text-gray-700">
                                {new Date(
                                  customer.createdAt
                                ).toLocaleDateString("en-GB")}
                              </span>
                            </div>
                          </div>

                          {/* Linked Enquiries */}
                          {customer.enquiryIds.length > 0 && (
                            <div>
                              <p className="text-sm font-medium text-navy mb-2">
                                Linked Enquiries:
                              </p>
                              <div className="space-y-1">
                                {customer.enquiryIds.map((eId) => {
                                  const enq = enquiries.find(
                                    (e) => e.id === eId
                                  );
                                  return enq ? (
                                    <p
                                      key={eId}
                                      className="text-sm text-gray-600"
                                    >
                                      {eId} &mdash; {enq.interest} (
                                      {enq.status})
                                    </p>
                                  ) : (
                                    <p
                                      key={eId}
                                      className="text-sm text-gray-400"
                                    >
                                      {eId}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Notes */}
                          <div>
                            <label className="block text-sm font-medium text-navy mb-1.5">
                              Admin Notes
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
                              onClick={(e) => {
                                e.stopPropagation();
                                saveNotes(customer.id);
                              }}
                              className="bg-teal text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
                            >
                              Save Notes
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedId(null);
                              }}
                              className="bg-gray-100 text-gray-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
