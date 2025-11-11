'use client';

import { useState, useRef, useEffect } from 'react';

export default function OtpForm() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // التحرك تلقائيًا إلى الحقل التالي
      if (value !== '' && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);
    // هنا تقدر تضيف منطق إرسال OTP لـ API
  };

  return (
    <div className="flex min-h-screen items-center w-full justify-center bg-white p-4">
      <div className="w-full max-w-[380px]  rounded-2xl bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,0.25)] animate-fadeIn">
        <h2 className="mb-1 text-xl font-bold text-gray-800">Enter OTP</h2>
        <p className="mb-6 text-sm text-[#8C8C8C]">
          Sent OTP on <span className="text-[#F05423]">johncarter@brix.com</span>
        </p>

        <form onSubmit={handleSubmit}>
          {/* OTP Inputs */}
          <div className="mb-6 flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="h-15 w-15 rounded-lg border-2 border-[#F05423] bg-white text-center text-2xl font-bold outline-none"
                placeholder="-"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mb-4 w-full rounded-lg bg-[#F05423] py-3 text-sm font-semibold text-white transition hover:bg-[#d9481d]"
          >
            Get OTP
          </button>

          {/* Resend Button */}
          <button
            type="button"
            className="mx-auto block text-sm font-semibold text-[#FAA51B] hover:text-[#e5950c] transition"
          >
            Resend OTP
          </button>
        </form>
      </div>
    </div>
  );
}