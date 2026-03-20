"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { chatbotKnowledge, suggestedPrompts } from "@/data/chatbot-knowledge";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
}

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch: { answer: string; score: number } | null = null;

  for (const entry of chatbotKnowledge) {
    const score = entry.keywords.reduce((acc, kw) => {
      return acc + (lower.includes(kw.toLowerCase()) ? kw.length : 0);
    }, 0);
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { answer: entry.answer, score };
    }
  }

  return (
    bestMatch?.answer ??
    "I'm not sure about that specific question. For detailed advice, please contact our team via the Contact page or call us on 0151 000 0000. We're happy to help with any washroom or hygiene product queries."
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content:
        "Hello! I'm here to help you find the right washroom and hygiene products. Ask me anything or choose a question below.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(text?: string) {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: msg };
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      content: findAnswer(msg),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sky hover:bg-sky/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy text-white px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-sky rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">Washroom Assistant</p>
                <p className="text-xs text-silver">Product guidance & support</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-silver hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "bot" ? "bg-sky/10 text-sky" : "bg-teal/10 text-teal"
                  }`}
                >
                  {msg.role === "bot" ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                </div>
                <div
                  className={`max-w-[260px] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-clean text-graphite rounded-tl-sm"
                      : "bg-teal text-white rounded-tr-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Suggested prompts (only show initially) */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="block w-full text-left text-xs px-3 py-2 bg-clean hover:bg-gray-100 text-graphite rounded-lg transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="px-4 py-1.5 border-t border-gray-100">
            <p className="text-[10px] text-silver text-center">
              AI answers are for general guidance and product selection support.
            </p>
          </div>

          {/* Input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 bg-clean rounded-xl px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our products..."
                className="flex-1 bg-transparent text-sm text-navy placeholder:text-silver outline-none"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-8 h-8 bg-teal hover:bg-teal/90 disabled:bg-silver text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
