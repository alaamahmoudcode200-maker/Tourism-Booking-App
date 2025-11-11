import React from 'react';
import type { ProfileTab } from '@/app/profile/page';
import { FaUser, FaSliders, FaCreditCard, FaCircleQuestion, FaGear, FaBook } from 'react-icons/fa6';

interface SidebarProps {
  activeTab: ProfileTab;
  onChangeTab: (tab: ProfileTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onChangeTab }) => {
  const itemCls = (tab: ProfileTab) =>
    `flex items-center justify-between px-3 py-2 rounded-lg text-[15px] transition cursor-pointer ${
      activeTab === tab ? 'bg-[#fff5f0] text-[#ff5722] font-medium' : 'text-[#333] hover:bg-[#fff5f0] hover:text-[#ff5722]'
    }`;

  return (
    <aside className="w-[250px] bg-white border-r border-[#eee] p-6 flex flex-col justify-between">
      <div>
        <div className="mb-5">
          <h3 className="text-[16px] m-0">Hi, Anna</h3>
          <p className="text-[14px] text-[#666] mt-1 mb-3">AnnaCarolina@gmail.com</p>
          <small className="block text-[#999] text-[12px]">
            Manage your profile, rewards, and preferences for all our brands in one place.
          </small>
        </div>

        <nav>
          <ul className="list-none p-0 m-0 space-y-[18px]">
            <li>
              <button className={itemCls('profile')} onClick={() => onChangeTab('profile')}>
                <span className="flex items-center gap-2">
                  <FaUser className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">Profile</span>
                </span>
              </button>
            </li>
            <li>
              <button className={itemCls('preferences')} onClick={() => onChangeTab('preferences')}>
                <span className="flex items-center gap-2">
                  <FaSliders className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">Preferences</span>
                </span>
              </button>
            </li>
            <li>
              <button className={itemCls('payment')} onClick={() => onChangeTab('payment')}>
                <span className="flex items-center gap-2">
                  <FaCreditCard className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">Payment</span>
                </span>
              </button>
            </li>
            <li>
              <button className={itemCls('help')} onClick={() => onChangeTab('help')}>
                <span className="flex items-center gap-2">
                  <FaCircleQuestion className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">Help</span>
                </span>
              </button>
            </li>
            <li>
              <button className={itemCls('settings')} onClick={() => onChangeTab('settings')}>
                <span className="flex items-center gap-2">
                  <FaGear className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">Settings</span>
                </span>
              </button>
            </li>
            <li>
              <button className={itemCls('booking')} onClick={() => onChangeTab('booking')}>
                <span className="flex items-center gap-2">
                  <FaBook className="text-[#ff5722] w-5" />
                  <span className="flex-1 text-left">My Booking</span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-[#ff5722] font-bold text-[14px] mt-5 cursor-pointer">Sign Out</div>
    </aside>
  );
};


