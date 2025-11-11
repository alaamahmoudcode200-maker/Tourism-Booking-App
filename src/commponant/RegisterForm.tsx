'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPassword = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="flex min-h-screen items-center w-full justify-center bg-white p-4">
      <div className="w-full max-w-[380px] md:max-w-[480px] rounded-2xl bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,0.25)] animate-fadeIn">
        <h2 className="mb-1 text-xl font-bold text-gray-800">Login to your Account</h2>
        <p className="mb-6 text-sm text-[#8C8C8C]">Welcome back! Select method to log in:</p>

        <form className="text-left">
          {/* Username */}
          <div className="mb-5">
            <label className="mb-1 block text-xs font-semibold text-gray-700">Username</label>
            <div className="relative">
              <input
                type="text"
                placeholder="johncarter"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 text-sm outline-none transition focus:border-[#F05423]"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F05423]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-1 block text-xs font-semibold text-gray-700">Email address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="johncarter@brix.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 text-sm outline-none transition focus:border-[#F05423]"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F05423]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>

          {/* New Password */}
          <div className="mb-5">
            <label className="mb-1 block text-xs font-semibold text-gray-700">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="•••••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-[#F05423]"
                required
              />
              <button
                type="button"
                onClick={toggleNewPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.178a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.5-.25.8-.615 1.547-1.07 2.234" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="mb-1 block text-xs font-semibold text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="•••••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-[#F05423]"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.964 7.178a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.964-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.5-.25.8-.615 1.547-1.07 2.234" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-[#F05423] py-3 text-sm font-semibold text-white transition hover:bg-[#d9481d]"
          >
            register
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600">
            You have account?{' '}
            <a href="login.html" className="font-semibold text-[#F05423]">
              Login now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}