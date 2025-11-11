'use client'
import React, { useState } from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import MastercardIcon from './mastercard';
export default function CardPay() {
        const [cardNumber, setCardNumber] = useState('');
        const [expiryDate, setExpiryDate] = useState('');
        const [vcc, setVcc] = useState('');
        const [cardHolder, setCardHolder] = useState('');
  return (

  <div className=" max-w-4xl bg-white">
    <div className="grid grid-cols-1 items-center md:grid-cols-2 text-black  gap-6 ">
      {/* Payment Details */}
        <div className="max-w-full mx-auto p-6">
      {/* عنوان النموذج */}
      <h2 className="text-lg font-bold text-orange-500 mb-4">Card Detail</h2>

      {/* حقل Card Number مع أيقونة Mastercard */}
      <div className="mb-4">
        <div className="relative">
   <input
  type="text"
  placeholder="Card number"
  value={cardNumber}
  onChange={(e) => {
    // خذ القيمة واحذف كل ما ليس رقمًا
    const value = e.target.value.replace(/\D/g, '');
    // اقطعها عند 16 رقم
    const limitedValue = value.slice(0, 16);
    setCardNumber(limitedValue);
  }}
  maxLength={19} // 16 رقم + 3 مسافات (مثلاً: 1234 5678 9012 3456)
  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          {/* أيقونة Mastercard */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
            <MastercardIcon />
          </div>
        </div>
      </div>

      {/* حقل Expiry Date و VCC في صف واحد */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="date"
          placeholder="Expiry date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="VCC"
          value={vcc}
          onChange={(e) => setVcc(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* حقل Card Holder */}
      <input
        type="text"
        placeholder="Card holder"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        </div>
        <div className="max-w-full mx-auto p-2">
      {/* بطاقة المعاينة */}
      <div className="relative w-80 bg-gradient-to-br from-amber-500 via-orange-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
        {/* شريحة (Chip) */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-sm">
          <FcSimCardChip  className='w-full h-full text-white'/>
        </div>

        {/* رمز NFC */}
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <div className="w-1 h-2 bg-white rounded-full">

          </div>
          <div className="w-1 h-2 bg-white rounded-full rotate-45"></div>
          <div className="w-1 h-2 bg-white rounded-full -rotate-45"></div>
        </div>

        {/* أرقام البطاقة */}
        
        
        <div className="mt-10 mb-6 font-mono text-xl  text-center">
          {cardNumber || '#### #### #### ####'}
        </div>

        {/* اسم صاحب البطاقة وتاريخ الانتهاء */}
        <div className="flex justify-between items-end">
          <div>
            
            <div className="text-sm font-semibold">
              {cardHolder.toUpperCase() || 'CARD HOLDER'}
            </div>
            <div className="text-xs flex gap-10 opacity-80">
              {expiryDate || 'DD/MM/YY'}
              <span>
          {vcc || 'VCC'}
        </span>
            </div>
          </div>
          {/* شعار Mastercard */}
          <div className="flex gap-1">
            <MastercardIcon />
          </div>
        </div>
      </div>
       </div>
  
    </div>
  </div>

  )
}