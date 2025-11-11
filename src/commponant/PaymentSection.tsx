import React from 'react';
import { FaCcVisa, FaCcAmex, FaCcMastercard, FaPaypal } from 'react-icons/fa';

export const PaymentSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-[18px] flex items-center justify-between">Payment <span className="text-[#ff5722] text-[14px] cursor-pointer">Edit</span></h2>
      <p className="text-[#666] text-[14px] mb-5">Securely Add Or Remove Payment Methods To Make It Easier When You Book.</p>

      {/* Methods */}
      <div className="flex gap-3 my-4">
        <div className="px-3 py-2 border border-[#ddd] rounded-lg bg-[#fafafa] hover:bg-white hover:border-[#F05423] transition"><FaCcVisa size={32} className="text-[#1a1f71]" /></div>
        <div className="px-3 py-2 border border-[#ddd] rounded-lg bg-[#fafafa] hover:bg-white hover:border-[#F05423] transition"><FaCcAmex size={32} className="text-[#2e77bc]" /></div>
        <div className="px-3 py-2 border border-[#ddd] rounded-lg bg-[#fafafa] hover:bg-white hover:border-[#F05423] transition"><FaCcMastercard size={32} className="text-[#eb001b]" /></div>
        <div className="px-3 py-2 border border-[#ddd] rounded-lg bg-[#fafafa] hover:bg-white hover:border-[#F05423] transition"><FaPaypal size={32} className="text-[#003087]" /></div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Name On The Card<span className="text-red-500">*</span></label>
          <input className="p-3 border border-[#ccc] rounded-lg text-[15px] focus:outline-none focus:border-[#F05423] focus:shadow-[0_0_6px_rgba(240,84,35,0.3)]" placeholder="John Doe" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Card Number<span className="text-red-500">*</span></label>
          <input className="p-3 border border-[#ccc] rounded-lg text-[15px] focus:outline-none focus:border-[#F05423] focus:shadow-[0_0_6px_rgba(240,84,35,0.3)]" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Exp Date<span className="text-red-500">*</span></label>
          <input className="p-3 border border-[#ccc] rounded-lg text-[15px] focus:outline-none focus:border-[#F05423] focus:shadow-[0_0_6px_rgba(240,84,35,0.3)]" placeholder="MM/YY" />
        </div>
      </div>
    </section>
  );
};


