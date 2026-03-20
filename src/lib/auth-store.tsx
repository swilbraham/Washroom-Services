"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { User } from "@/types";

const USERS_KEY = "ws_users";
const SESSION_KEY = "ws_auth_session";

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (data: { email: string; password: string; name: string; phone: string; company: string }) => { success: boolean; error?: string };
  logout: () => void;
  allUsers: User[];
}

const AuthContext = createContext<AuthContextType | null>(null);

function hashPassword(pw: string): string {
  return btoa(pw);
}

function loadUsers(): User[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(USERS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveUsers(users: User[]) {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); } catch {}
}

function loadSession(): string | null {
  if (typeof window === "undefined") return null;
  try { return localStorage.getItem(SESSION_KEY); } catch { return null; }
}

function saveSession(userId: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (userId) localStorage.setItem(SESSION_KEY, userId);
    else localStorage.removeItem(SESSION_KEY);
  } catch {}
}

export function CustomerAuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const allUsers = loadUsers();
    setUsers(allUsers);
    const sessionId = loadSession();
    if (sessionId) {
      const found = allUsers.find((u) => u.id === sessionId);
      if (found) setUser(found);
    }
    setLoaded(true);
  }, []);

  const login = useCallback((email: string, password: string) => {
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!found) return { success: false, error: "No account found with that email." };
    if (found.passwordHash !== hashPassword(password)) return { success: false, error: "Incorrect password." };
    setUser(found);
    saveSession(found.id);
    return { success: true };
  }, [users]);

  const register = useCallback((data: { email: string; password: string; name: string; phone: string; company: string }) => {
    const exists = users.find((u) => u.email.toLowerCase() === data.email.toLowerCase());
    if (exists) return { success: false, error: "An account with that email already exists." };
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: data.email,
      name: data.name,
      phone: data.phone,
      company: data.company,
      passwordHash: hashPassword(data.password),
      createdAt: new Date().toISOString(),
    };
    const updated = [...users, newUser];
    setUsers(updated);
    saveUsers(updated);
    setUser(newUser);
    saveSession(newUser.id);
    return { success: true };
  }, [users]);

  const logout = useCallback(() => {
    setUser(null);
    saveSession(null);
  }, []);

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, register, logout, allUsers: users }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useCustomerAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useCustomerAuth must be used within CustomerAuthProvider");
  return ctx;
}
