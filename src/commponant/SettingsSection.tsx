import React from 'react';

export const SettingsSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-[18px] mb-4">Settings</h2>

      <div className="my-6">
        <h3 className="text-[18px] font-bold mb-1">Sign-in and security</h3>
        <p className="text-[14px] text-[#555] mb-3">Keep Your Account Safe With A Secure Password...</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl bg-white cursor-pointer hover:border-[#F05423]">Email <span className="text-[#888] text-[20px]">›</span></div>
          <div className="flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl bg-white cursor-pointer hover:border-[#F05423]">Change Password <span className="text-[#888] text-[20px]">›</span></div>
          <div className="flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl bg-white cursor-pointer hover:border-[#F05423]">Connected Device <span className="text-[#888] text-[20px]">›</span></div>
        </div>
      </div>

      <div className="my-6">
        <h3 className="text-[18px] font-bold mb-1">Account management</h3>
        <p className="text-[14px] text-[#555] mb-3">Control Other Options To Manage Your Data...</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl bg-white cursor-pointer hover:border-[#F05423]">Data Control <span className="text-[#888] text-[20px]">›</span></div>
          <a className="block mt-3 text-[#F05423] font-bold hover:underline" href="#">Delete account</a>
        </div>
      </div>
    </section>
  );
};


