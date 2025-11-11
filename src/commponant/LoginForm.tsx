'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex min-h-screen items-center  w-full justify-center bg-white p-4">
      <div className="w-full max-w-[380px] md:max-w-[400px] rounded-2xl bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,0.25)] animate-fadeIn">
        <h2 className="mb-1 text-xl font-bold text-gray-800">Login to your Account</h2>
        <p className="mb-6 text-sm text-[#8C8C8C]">Welcome back! Select method to log in:</p>

        {/* Social Login */}
        <div className="mb-6 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#F05423] bg-white px-3 py-2.5 text-sm font-semibold text-[#DB4437] transition hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
              <path
                fill="#DB4437"
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.868 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
              />
            </svg>
            Google
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#F05423] bg-white px-3 py-2.5 text-sm font-semibold text-[#1877F2] transition hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>

        <form className="text-left">
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

          {/* Password */}
          <div className="mb-5">
            <label className="mb-1 block text-xs font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="•••••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-[#F05423]"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
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

          {/* Options */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#F05423]" />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="Forgot.html" className="font-semibold text-[#F05423] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-[#F05423] py-3 text-sm font-semibold text-white transition hover:bg-[#d9481d]"
          >
            Log In
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have account?{' '}
            <a href="register.html" className="font-semibold text-[#F05423]">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}