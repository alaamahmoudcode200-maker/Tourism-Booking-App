import React from 'react';
import { FaCommentDots, FaPhone } from 'react-icons/fa';

export const HelpSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-[18px] mb-2">Help</h2>
      <p className="text-[#666] text-[14px]">Have Questions Or Feedback For Us? We're Listening.</p>

      <div className="flex flex-wrap items-center gap-5 mt-5">
        <div className="flex-1 min-w-[220px] flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl text-[16px] cursor-pointer transition hover:border-[#F05423]">
          <span className="flex items-center gap-2"><FaCommentDots className="text-[#555]" /> Chat</span>
          <span className="text-[#888] text-[20px]">›</span>
        </div>
        <div className="flex-1 min-w-[220px] flex items-center justify-between px-4 py-3 border border-[#ddd] rounded-xl text-[16px] cursor-pointer transition">
          <span className="flex items-center gap-2"><FaPhone className="text-[#555]" /> Call Easyset</span>
          <span className="text-[#888] text-[20px]">›</span>
        </div>
        <input value="05959595959640" readOnly className="p-3 border border-[#ddd] rounded-xl text-[16px] min-w-[220px]" />
      </div>
    </section>
  );
};


