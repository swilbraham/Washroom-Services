"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { faqs as initialFaqs, faqGroups } from "@/data/faqs";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

export default function AdminFAQPage() {
  const [faqList, setFaqList] = useState<FAQItem[]>([...initialFaqs]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAnswer, setEditAnswer] = useState("");
  const [expandedGroups, setExpandedGroups] = useState<string[]>(
    faqGroups.map((g) => g.id)
  );
  const [toast, setToast] = useState<string | null>(null);

  // New FAQ form state
  const [addingToGroup, setAddingToGroup] = useState<string | null>(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  const startEdit = (faq: FAQItem) => {
    setEditingId(faq.id);
    setEditAnswer(faq.answer);
  };

  const saveEdit = (id: string) => {
    setFaqList((prev) =>
      prev.map((f) => (f.id === id ? { ...f, answer: editAnswer } : f))
    );
    setEditingId(null);
    setToast("FAQ updated");
  };

  const deleteFaq = (id: string) => {
    if (window.confirm("Are you sure you want to delete this FAQ item?")) {
      setFaqList((prev) => prev.filter((f) => f.id !== id));
      setToast("FAQ deleted");
    }
  };

  const addFaq = (groupName: string) => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    const newFaq: FAQItem = {
      id: `faq-new-${Date.now()}`,
      question: newQuestion.trim(),
      answer: newAnswer.trim(),
      group: groupName,
    };
    setFaqList((prev) => [...prev, newFaq]);
    setNewQuestion("");
    setNewAnswer("");
    setAddingToGroup(null);
    setToast("FAQ item added");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">FAQ Content</h2>

      {faqGroups.map((group) => {
        const groupFaqs = faqList.filter((f) => f.group === group.name);
        const isExpanded = expandedGroups.includes(group.id);

        return (
          <div
            key={group.id}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden"
          >
            {/* Group Header */}
            <button
              onClick={() => toggleGroup(group.id)}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-navy">
                  {group.name}
                </h3>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  {groupFaqs.length}
                </span>
              </div>
              {isExpanded ? (
                <ChevronUp size={18} className="text-gray-400" />
              ) : (
                <ChevronDown size={18} className="text-gray-400" />
              )}
            </button>

            {isExpanded && (
              <div className="border-t border-gray-100">
                {groupFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-gray-50 last:border-b-0 px-6 py-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-navy mb-1">
                          {faq.question}
                        </p>

                        {editingId === faq.id ? (
                          <div className="space-y-3 mt-2">
                            <textarea
                              rows={4}
                              value={editAnswer}
                              onChange={(e) => setEditAnswer(e.target.value)}
                              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => saveEdit(faq.id)}
                                className="inline-flex items-center gap-1 bg-teal text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-teal/90 transition-colors"
                              >
                                <Check size={14} />
                                Save
                              </button>
                              <button
                                onClick={() => setEditingId(null)}
                                className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                              >
                                <X size={14} />
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        )}
                      </div>

                      {editingId !== faq.id && (
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => startEdit(faq)}
                            className="p-1.5 text-gray-400 hover:text-teal rounded transition-colors"
                            title="Edit"
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            onClick={() => deleteFaq(faq.id)}
                            className="p-1.5 text-gray-400 hover:text-red-500 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Add New FAQ */}
                {addingToGroup === group.name ? (
                  <div className="px-6 py-4 bg-gray-50/50 space-y-3">
                    <input
                      type="text"
                      placeholder="Question"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                    />
                    <textarea
                      rows={3}
                      placeholder="Answer"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => addFaq(group.name)}
                        className="inline-flex items-center gap-1 bg-teal text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-teal/90 transition-colors"
                      >
                        <Check size={14} />
                        Add FAQ
                      </button>
                      <button
                        onClick={() => {
                          setAddingToGroup(null);
                          setNewQuestion("");
                          setNewAnswer("");
                        }}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                      >
                        <X size={14} />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 py-3">
                    <button
                      onClick={() => setAddingToGroup(group.name)}
                      className="inline-flex items-center gap-1.5 text-sm text-teal hover:text-teal/80 font-medium transition-colors"
                    >
                      <Plus size={15} />
                      Add FAQ to this group
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
