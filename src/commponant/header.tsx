"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { LuPhoneCall, LuSearch, LuHeart } from "react-icons/lu";
import HeaderTest from './test';
import { ChevronRight, LogOut, Settings, CreditCard, HelpCircle, User } from "lucide-react";
import Link from 'next/link';
export default function Header(): React.JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);

  // 👇 متغير وهمي لتجربة حالة تسجيل الدخول
  const isLoggedIn = true; // ← غيّرها لـ false لتجرب الشكل التاني

  const user = {
    name: "Anna Carlina",
    avatar: "/profile.jpg", // حط هنا صورة المستخدم الفعلية
  };

  return (
    <>
      <HeaderTest/>
      <header className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-2 relative">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            src="/logo.png"
            alt="Tourism Main App logo"
            width={160}
            height={60}
            priority
            className="object-contain w-[140px] h-auto"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenDrawer(true)}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition md:hidden"
          >
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full mb-5 md:mb-0 md:max-w-[550px] mx-auto">
          <div className="w-full flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              aria-label="Search"
              placeholder="Search destinations, hotels..."
              className="flex-1 px-3 py-2 text-sm text-black outline-none placeholder-gray-500"
            />
            <button
              type="button"
              aria-label="Search"
              className="px-3 py-2 border-l border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              <LuSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language */}
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <Image
              src="/gb.png"
              alt="English"
              width={40}
              height={28}
              className="rounded-full"
            />
          </div>

          {/* Favorite */}
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <LuHeart className="text-orange-600 text-base" />
          </button>
 
          {/* Phone */}
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <LuPhoneCall className="text-orange-600 text-base" />
          </button>

          {/* 👇 حالة المستخدم */}
          {isLoggedIn ? (
            // Logged in
            <details className="dropdown dropdown-end">
                  <summary className="flex items-center gap-2  rounded-full px-2 py-1 hover:bg-gray-50 transition">
              <Image
                src={user.avatar}
                alt={user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-500">Your Account</span>
                <span className="text-xs font-semibold text-orange-600">
                  {user.name}
                </span>
              </div>
                  </summary>
                
         
          <ul className="menu dropdown-content bg-white  z-1 w-64 rounded-2xl shadow-lg border border-white p-4">
              
        <div className="    z-50">
          {/* معلومات المستخدم */}
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">Anna</span>
              <span className="text-sm text-gray-500">carina@gmail.com</span>
            </div>
          </div>

          {/* عناصر القائمة */}
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition">
              <span className="flex items-center gap-2">
                <User size={16} />
                My Account
              </span>
              <ChevronRight size={16} />
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <CreditCard size={16} />
                Payments
              </span>
              <ChevronRight size={16} />
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </span>
              <ChevronRight size={16} />
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <HelpCircle size={16} />
                Support
              </span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* زر تسجيل الخروج */}
          <button className="w-full flex items-center gap-2 mt-4 text-sm text-red-500 font-medium hover:text-red-600">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
          </ul>
          
            </details>
          ) : (
            // Guest (not logged in)
            <>
              <a
                href="/register"
                className="px-3 py-2 rounded-lg font-semibold text-xs bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
              >
                Sign up
              </a>
              <a
                href="/login"
                className="px-3 py-2 rounded-lg font-semibold text-xs bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
              >
                Log in
              </a>
            </>
          )}
        </div>
      </header>

      {/* Overlay for Drawer */}
      {openDrawer && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenDrawer(false)}
        />
      )}

      {/* Drawer (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          openDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpenDrawer(false)}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 mb-4">
     
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Your Account</span>
                  <span className="text-sm font-semibold text-orange-600">
                    {user.name}
                  </span>
                </div>
              </div>
                 <div className="    z-50">
         

          {/* عناصر القائمة */}
          <div className="space-y-1">
            <Link href={"/profile"}>
             <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition">
              <span className="flex items-center gap-2">
                <User size={16} />
                My Account
              </span>
              <ChevronRight size={16} />
            </button>
            </Link>
           

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <CreditCard size={16} />
                Payments
              </span>
              <ChevronRight size={16} />
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </span>
              <ChevronRight size={16} />
            </button>

            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <span className="flex items-center gap-2">
                <HelpCircle size={16} />
                Support
              </span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* زر تسجيل الخروج */}
          <button className="w-full flex items-center gap-2 mt-4 text-sm text-orange-500 font-medium hover:text-red-600">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
            </>
          ) : (
            <div className="flex gap-3 mb-4">
              <a
                href="/register"
                className="flex-1 px-3 py-2 rounded-lg font-semibold text-xs bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition text-center"
              >
                Sign up
              </a>
              <a
                href="/login"
                className="flex-1 px-3 py-2 rounded-lg font-semibold text-xs bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition text-center"
              >
                Log in
              </a>
            </div>
          )}
          <div className='flex gap-3 mt-5 items-center'>
         <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <Image
              src="/gb.png"
              alt="English"
              width={40}
              height={28}
              className="rounded-full"
            />
          </div>

          {/* Favorite */}
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <LuHeart className="text-orange-600 text-base" />
          </button>
             {/* Phone */}
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <LuPhoneCall className="text-orange-600 text-base" />
          </button>
          </div>
  
        </div>
      </div>
    </>
  );
}
