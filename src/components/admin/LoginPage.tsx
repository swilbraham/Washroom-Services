"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useAuth } from "./AuthProvider";

export function LoginPage() {
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setError(true);
      setPassword("");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-teal rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">WS</span>
          </div>
          <h1 className="text-2xl font-bold text-navy">Admin Login</h1>
          <p className="text-sm text-gray-500 mt-1">Washroom Solutions Dashboard</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal focus:border-teal outline-none transition-colors"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                Incorrect password. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={!password}
              className="w-full bg-teal hover:bg-teal/90 disabled:bg-gray-200 disabled:text-gray-400 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="mt-4 bg-sky/10 rounded-lg p-3 text-center">
          <p className="text-xs text-sky font-medium">Demo password: admin123</p>
        </div>
      </div>
    </div>
  );
}
