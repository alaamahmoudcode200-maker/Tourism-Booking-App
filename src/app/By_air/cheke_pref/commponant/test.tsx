'use client';
import React, { useState } from 'react';

type SeatStatus = 'selected' | 'available' | 'unavailable';

interface Seat {
  label: string;
  status: SeatStatus;
}

interface Row {
  number: number;
  seats: Seat[];
  isExitRow?: boolean;
}

const initialRows: Row[] = [
  {
    number: 1,
    seats: [
      { label: 'A', status: 'selected' },
      { label: 'B', status: 'selected' },
      { label: 'C', status: 'selected' },
      { label: 'D', status: 'selected' },
      { label: 'E', status: 'selected' },
      { label: 'F', status: 'selected' },
    ],
  },
  {
    number: 10,
    isExitRow: true,
    seats: [
      { label: 'A', status: 'available' },
      { label: 'B', status: 'selected' },
      { label: 'C', status: 'available' },
      { label: 'D', status: 'available' },
      { label: 'E', status: 'selected' },
      { label: 'F', status: 'available' },
    ],
  },
  {
    number: 21,
    isExitRow: true,
    seats: [
      { label: 'A', status: 'selected' },
      { label: 'B', status: 'available' },
      { label: 'C', status: 'unavailable' },
      { label: 'D', status: 'available' },
      { label: 'E', status: 'selected' },
      { label: 'F', status: 'available' },
    ],
  },
];

const AirplaneSeating: React.FC = () => {
  const [rows, setRows] = useState<Row[]>(initialRows);

  const toggleSeat = (rowIndex: number, seatIndex: number) => {
    setRows((prevRows) =>
      prevRows.map((row, rIdx) =>
        rIdx === rowIndex
          ? {
              ...row,
              seats: row.seats.map((seat, sIdx) =>
                sIdx === seatIndex && seat.status !== 'unavailable'
                  ? {
                      ...seat,
                      status: seat.status === 'selected' ? 'available' : 'selected',
                    }
                  : seat
              ),
            }
          : row
      )
    );
  };

  const seatColor = {
    selected: 'bg-orange-500',
    available: 'bg-gray-300',
    unavailable: 'bg-white border border-gray-400',
  };

  return (
    <div className="flex flex-col items-center bg-orange-100 p-4 rounded-lg">
      {rows.map((row, rowIndex) => (
        <div key={row.number} className="flex items-center mb-2">
          <span className="w-8 text-center font-bold">{row.number}</span>
          <div className="flex gap-2">
            {row.seats.map((seat, seatIndex) => (
              <label
                key={seat.label}
                className={`w-6 h-6 rounded flex items-center justify-center ${seatColor[seat.status]} cursor-pointer`}
              >
                <input
                  type="checkbox"
                  checked={seat.status === 'selected'}
                  disabled={seat.status === 'unavailable'}
                  onChange={() => toggleSeat(rowIndex, seatIndex)}
                  className="opacity-0 w-full h-full cursor-pointer"
                />
              </label>
            ))}
          </div>
          {row.isExitRow && (
            <span className="ml-2 text-xs text-red-600 font-bold">Exit Row</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default AirplaneSeating;