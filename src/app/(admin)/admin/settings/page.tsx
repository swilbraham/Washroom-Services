"use client";

import { useState, useEffect } from "react";
import { siteSettings } from "@/data/settings";
import type { SiteSettings } from "@/types";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings>({ ...siteSettings });
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [name]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast("Settings saved successfully!");
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal";
  const labelClass = "block text-sm font-medium text-navy mb-1.5";

  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-navy">Settings</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Info */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy">
            Company Information
          </h3>

          <div>
            <label htmlFor="companyName" className={labelClass}>
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={settings.companyName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={settings.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={settings.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className={labelClass}>
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={settings.address}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="ctaText" className={labelClass}>
              CTA Text
            </label>
            <input
              id="ctaText"
              name="ctaText"
              type="text"
              value={settings.ctaText}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 space-y-5">
          <h3 className="text-lg font-semibold text-navy">Social Links</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="facebook" className={labelClass}>
                Facebook
              </label>
              <input
                id="facebook"
                name="facebook"
                type="text"
                value={settings.socialLinks.facebook}
                onChange={handleSocialChange}
                className={inputClass}
                placeholder="https://facebook.com/..."
              />
            </div>
            <div>
              <label htmlFor="twitter" className={labelClass}>
                Twitter
              </label>
              <input
                id="twitter"
                name="twitter"
                type="text"
                value={settings.socialLinks.twitter}
                onChange={handleSocialChange}
                className={inputClass}
                placeholder="https://twitter.com/..."
              />
            </div>
            <div>
              <label htmlFor="linkedin" className={labelClass}>
                LinkedIn
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                value={settings.socialLinks.linkedin}
                onChange={handleSocialChange}
                className={inputClass}
                placeholder="https://linkedin.com/..."
              />
            </div>
            <div>
              <label htmlFor="instagram" className={labelClass}>
                Instagram
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                value={settings.socialLinks.instagram}
                onChange={handleSocialChange}
                className={inputClass}
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-teal text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-teal/90 transition-colors"
        >
          Save Settings
        </button>
      </form>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-success text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
