"use client";
import { useState } from "react";
import {
  User,
  SlidersHorizontal,
  CreditCard,
  HelpCircle,
  Settings,
  BookOpen,
  LogOut,
} from "lucide-react";

import { ProfileSection } from './ProfileSection';
import { PreferencesSection } from './PreferencesSection';
import { PaymentSection } from './PaymentSection';
import { HelpSection } from './HelpSection';
import { SettingsSection } from './SettingsSection';
import { BookingSection } from './BookingSection';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  const menuItems = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "preferences", label: "Preferences", icon: <SlidersHorizontal size={18} /> },
    { id: "payment", label: "Payment", icon: <CreditCard size={18} /> },
    { id: "help", label: "Help", icon: <HelpCircle size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "booking", label: "My Booking", icon: <BookOpen size={18} /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-6">
        <div>
          <div className="mb-6">
            <h3 className="text-base font-semibold text-gray-800">Hi, Anna</h3>
            <p className="text-sm text-gray-600 mb-3">AnnaCarolina@gmail.com</p>
            <p className="text-xs text-gray-400">
              Manage your profile, rewards, and preferences for all our brands in one place.
            </p>
          </div>

          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition
                      ${
                        activeTab === item.id
                          ? "bg-orange-50 text-orange-600 font-medium"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                  >
                    <span className="text-orange-500">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button className="text-orange-600 font-semibold flex items-center gap-2 mt-6 hover:text-orange-700">
          <LogOut size={16} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "preferences" && <PreferencesSection />}
        {activeTab === "payment" && <PaymentSection />}
        {activeTab === "help" && <HelpSection />}
        {activeTab === "settings" && <SettingsSection />}
        {activeTab === "booking" && <BookingSection />}
      </main>
    </div>
  );
}
