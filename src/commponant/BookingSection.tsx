import React, { useState } from 'react';
import { FaHotel, FaPlane, FaBus, FaTrain, FaUmbrellaBeach } from 'react-icons/fa';

type BookingTab = 'hotels' | 'air' | 'buses' | 'trains' | 'tours';

export const BookingSection: React.FC = () => {
  const [tab, setTab] = useState<BookingTab>('air');

  return (
    <section>
      <h2 className="text-[18px] mb-2">My Booking</h2>
      <p className="text-[#666] text-[14px]">Your bookings will appear here...</p>

      {/* Tabs */}
      <div className="flex justify-center my-5 gap-5">
        {[
          { id: 'hotels', label: 'Hotels', icon: <FaHotel /> },
          { id: 'air', label: 'Air tickets', icon: <FaPlane /> },
          { id: 'buses', label: 'Buses', icon: <FaBus /> },
          { id: 'trains', label: 'Trains', icon: <FaTrain /> },
          { id: 'tours', label: 'Tours', icon: <FaUmbrellaBeach /> },
        ].map((t) => (
          <button
            key={t.id}
            className={`text-center text-[14px] text-[#666] p-2 ${
              tab === t.id ? 'text-[#ff5a1f] font-bold' : ''
            }`}
            onClick={() => setTab(t.id as BookingTab)}
          >
            <span
              className={`block text-[32px] mb-1 ${
                tab === t.id ? 'bg-[#ff5a1f] text-white rounded-full p-3' : 'text-[#999]'
              }`}
            >
              {t.icon}
            </span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Air tickets content */}
      {tab === 'air' && (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between border border-[#eee] rounded-xl p-5 bg-white shadow-sm">
              <div className="flex-1">
                <div className="text-[18px] font-bold mb-2">
                  {i === 1 ? (
                    <>
                      <strong>08:20</strong> LTN → <strong>13:30</strong> SOF
                    </>
                  ) : (
                    <>
                      <strong>10:00</strong> LHR → <strong>15:40</strong> CDG
                    </>
                  )}
                </div>
                <div className="text-[14px] text-[#666]">
                  <span>{i === 1 ? '3 h 10 min duration' : '1 h 40 min duration'}</span>
                  <div className="flex items-center my-2">
                    <div className="w-2.5 h-2.5 bg-[#ff5a1f] rounded-full" />
                    <div className="flex-1 h-[3px] bg-[#ccc] mx-2" />
                    <div className="w-2.5 h-2.5 bg-[#ff5a1f] rounded-full" />
                  </div>
                  <span className="inline-block mt-1 text-[12px] text-green-600 font-bold">Direct</span>
                </div>
              </div>
              <div className="flex-1 text-[14px] text-[#444] leading-6">
                <div><span className="text-[#ff5a1f] mr-1">🧳</span> Hand baggage: 1 pc / 40×30×20 cm</div>
                <div><span className="text-[#ff5a1f] mr-1">💼</span> Checked baggage: {i === 1 ? '1 × 20 kg' : '1 × 25 kg'}</div>
                <div><span className="text-[#ff5a1f] mr-1">✈️</span> Flight: {i === 1 ? 'W6 4302' : 'BA 1234'}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};


