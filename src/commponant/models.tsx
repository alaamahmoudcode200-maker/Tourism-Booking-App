'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // منع التمرير عند فتح المودال
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
      onClick={onClose} // إغلاق عند النقر خارج المحتوى
    >
      <div
        className="bg-white rounded-lg w-3xl lg:max-w-4xl p-6 relative"
        onClick={(e) => e.stopPropagation()} // منع الإغلاق عند النقر داخل المحتوى
      > 
       <div className='max-w-4xl px-10 py-6 '>{children}</div>
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className=" mr-19  bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-full absolute top-4 right-4"
          aria-label="Close modal"
        >
          Close
        </button>

        {/* محتوى المودال */}
      
      </div>
    </div>
  );
}