"use client";
import { useState } from "react";
import Header from "@/commponant/header";
import {
  User,
  SlidersHorizontal,
  CreditCard,
  HelpCircle,
  Settings,
  BookOpen,
  LogOut,
  Menu,
  X
} from "lucide-react";

import { ProfileSection } from "@/commponant/ProfileSection";
import { PreferencesSection } from "@/commponant/PreferencesSection";
import { PaymentSection } from "@/commponant/PaymentSection";
import { HelpSection } from "@/commponant/HelpSection";
import { SettingsSection } from "@/commponant/SettingsSection";
import { BookingSection } from "@/commponant/BookingSection";
import FadeInFromRight from "@/commponant/anmtionscrol";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "preferences", label: "Preferences", icon: <SlidersHorizontal size={18} /> },
    { id: "payment", label: "Payment", icon: <CreditCard size={18} /> },
    { id: "help", label: "Help", icon: <HelpCircle size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    { id: "booking", label: "My Booking", icon: <BookOpen size={18} /> },
  ];

const handleSelect = (id: string) => {
  setActiveTab(id);
  setIsDrawerOpen(false);
};

  return (
    <div className="min-h-screen">
      <Header />

      {/* زر الموبايل لفتح القائمة */}
      <button
        className="lg:hidden flex items-center gap-2 p-3 text-orange-600"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu size={24} />
        Menu
      </button>

      <div className="flex min-h-screen">

        {/* Sidebar للكمبيوتر فقط */}
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-6">
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

        {/* Drawer للموبايل */}
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* الغطاء الخلفي */}
            <div
              className="absolute inset-0 bg-black/50 bg-opacity-40"
              onClick={() => setIsDrawerOpen(false)}
            ></div>

            {/* القائمة نفسها */}
            <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col justify-between">
              
              {/* Header Drawer */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-base font-semibold text-gray-800">Hi, Anna</h3>
                  <button onClick={() => setIsDrawerOpen(false)}>
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>

                <p className="text-sm text-gray-600 mb-3">AnnaCarolina@gmail.com</p>

                <nav>
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSelect(item.id)}
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
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 bg-white p-8">
          {activeTab === "profile" && <FadeInFromRight delay={0.1}> <ProfileSection /></FadeInFromRight>}
          {activeTab === "preferences" && <FadeInFromRight delay={0.2}><PreferencesSection /></FadeInFromRight>}
          {activeTab === "payment" && <FadeInFromRight delay={0.3}><PaymentSection /></FadeInFromRight>}
          {activeTab === "help" && <FadeInFromRight delay={0.4}><HelpSection /></FadeInFromRight>}
          {activeTab === "settings" && <FadeInFromRight delay={0.5}><SettingsSection /></FadeInFromRight>}
          {activeTab === "booking" && <FadeInFromRight delay={0.6}><BookingSection /></FadeInFromRight>}
        </main>
      </div>
    </div>
  );
}
