"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Order } from "@/types";

const STORAGE_KEY = "ws_orders";

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  getOrdersByUser: (userId: string) => Order[];
  getOrdersByEmail: (email: string) => Order[];
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  allOrders: Order[];
}

const OrderContext = createContext<OrderContextType | null>(null);

function load(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function save(orders: Order[]) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(orders)); } catch {}
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setOrders(load());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) save(orders);
  }, [orders, loaded]);

  const addOrder = useCallback((order: Order) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const getOrdersByUser = useCallback((userId: string) => {
    return orders.filter((o) => o.userId === userId);
  }, [orders]);

  const getOrdersByEmail = useCallback((email: string) => {
    return orders.filter((o) => o.customerEmail.toLowerCase() === email.toLowerCase());
  }, [orders]);

  const updateOrderStatus = useCallback((orderId: string, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  }, []);

  if (!loaded) return null;

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrdersByUser, getOrdersByEmail, updateOrderStatus, allOrders: orders }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
}
