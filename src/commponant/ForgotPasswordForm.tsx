'use client';

import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // هنا تقدر تضيف منطق إرسال طلب إعادة تعيين كلمة المرور لـ API
  };

  return (
    <div className="flex min-h-screen items-center  w-full justify-center bg-white p-4">
      <div className="w-full max-w-[380px] rounded-2xl bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,0.25)] animate-fadeIn">
        <h2 className="mb-1 text-xl font-bold text-gray-800">Forgot your password?</h2>
        <p className="mb-6 text-sm text-[#8C8C8C]">
          Enter your Email and get OTP to verification.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6 text-left">
            <label className="mb-1 block text-xs font-semibold text-gray-700">Email address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#F05423] py-3 text-sm font-semibold text-white transition hover:bg-[#d9481d]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}