'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/commponant/Sidebar';
import { ProfileSection } from '@/commponant/ProfileSection';
import { PreferencesSection } from '@/commponant/PreferencesSection';
import { PaymentSection } from '@/commponant/PaymentSection';
import { HelpSection } from '@/commponant/HelpSection';
import { SettingsSection } from '@/commponant/SettingsSection';
import { BookingSection } from '@/commponant/BookingSection';

export type ProfileTab = 'profile' | 'preferences' | 'payment' | 'help' | 'settings' | 'booking';

export default function ProfilePage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

  return (
    <div className="min-h-screen flex">
      <Sidebar activeTab={activeTab} onChangeTab={setActiveTab} />

      <main className="flex-1 p-6 sm:p-8 lg:p-10 bg-white">
        {activeTab === 'profile' && <ProfileSection onEdit={() => setActiveTab('profile')} />}
        {activeTab === 'preferences' && <PreferencesSection />}
        {activeTab === 'payment' && <PaymentSection />}
        {activeTab === 'help' && <HelpSection />}
        {activeTab === 'settings' && <SettingsSection />}
        {activeTab === 'booking' && <BookingSection />}
      </main>
    </div>
  );
}


