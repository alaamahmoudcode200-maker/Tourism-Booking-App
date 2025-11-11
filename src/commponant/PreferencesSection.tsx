import React from 'react';
import Image from 'next/image';
export const PreferencesSection: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-[18px] flex items-center justify-between">Preferences <span className="text-[#ff5722] text-[14px] cursor-pointer">Edit</span></h2>
        <p className="text-[#666] text-[14px] mb-5">Change Your Language, Currency, And Accessibility Requirements.</p>

        {/* Currency */}
        <div className="mb-6">
          <div className="text-[14px] font-semibold mb-2">Currency</div>
          <div className="relative inline-block mt-2">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F05423] font-bold">$</span>
            <select className="pl-8 pr-3 py-3 border border-[#ccc] rounded-lg text-[15px] min-w-[220px]">
              <option>U.S Dollar</option>
              <option>Euro</option>
              <option>British Pound</option>
              <option>Egyptian Pound</option>
            </select>
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="text-[14px] font-semibold mb-2">Language</div>
          <div className="space-y-3 mt-2">
            {[
              { code: 'gb', name: 'English', checked: true },
              { code: 'sa', name: 'Arabic', checked: false },
              { code: 'ru', name: 'Russian', checked: false },
              { code: 'cn', name: 'Chinese', checked: false },
            ].map((l) => (
              <div key={l.code} className="flex items-center justify-between p-2 rounded-lg">
                <div className="flex items-center gap-3">
                  <Image fill src={""} alt={l.name} className="w-8 h-[22px] rounded" />
                  <span>{l.name}</span>
                </div>
                <label className="relative inline-block w-[45px] h-[24px]">
                  <input type="radio" name="language" defaultChecked={l.checked} className="hidden" />
                  <span className="absolute inset-0 bg-[#ccc] rounded-[22px] transition before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


