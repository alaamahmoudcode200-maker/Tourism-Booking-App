"use client"
import { useState } from "react";

import { Info } from "lucide-react";

interface SeatData {
  id: string;
  row: number;
  column: 'A' | 'B' | 'C' | 'D';
  isReserved: boolean;
  isSelected: boolean;
}

const SeatSelector = () => {
  const [seats, setSeats] = useState<SeatData[]>(() => {
    const initialSeats: SeatData[] = [];
    const columns: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    
    // Create seats from row 6 to 23
    for (let row = 6; row <= 23; row++) {
      columns.forEach((column) => {
        // All seats available
        initialSeats.push({
          id: `${row}${column}`,
          row,
          column,
          isReserved: false,
          isSelected: false,
        });
      });
    }
    
    return initialSeats;
  });

  const exitRows = [13, 18];
  const pricePerSeat = 84.16;

  const toggleSeat = (seatId: string) => {
    setSeats(seats.map(seat => {
      if (seat.id === seatId && !seat.isReserved) {
        return { ...seat, isSelected: !seat.isSelected };
      }
      return seat;
    }));
  };

  const selectedSeats = seats.filter(s => s.isSelected);
  const totalPrice = selectedSeats.length * pricePerSeat;

  const getSeatsByRow = (row: number) => {
    return seats.filter(s => s.row === row).sort((a, b) => {
      const order = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      return order[a.column] - order[b.column];
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="md:w-4xl mx-auto">
        <div className="w-full bg-whit rounded-xl shadow-lg border border-gray-300  p-6">
          <h1 className="text-2xl font-bold text-foreground mb-6">Preferred Seat</h1>
          
          {/* Legend */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-sm font-medium text-foreground">Seat selection:</span>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-orange-400"></div>
              <span className="text-sm text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gray-400"></div>
              <span className="text-sm text-muted-foreground">Reserved</span>
            </div>
          </div>

          {/* Seat Grid */}
          <div className=" flex justify-center">
<div className="space-y-2 w-60   border py-3 border-gray-400 rounded-2xl">
            {Array.from({ length: 18 }, (_, i) => i + 6).map((row) => {
              const rowSeats = getSeatsByRow(row);
              const isExitRow = exitRows.includes(row);
              
              return (
                <div key={row} className="flex items-center  justify-center gap-2">
                  {/* Left seats (A, B) */}
                  <div className="flex gap-1">
                    {rowSeats.slice(0, 2).map((seat) => (
                      <div
                        key={seat.id}
                        className={`flex items-center justify-center w-7 h-7 rounded transition-all duration-200 ${
                          seat.isSelected
                            ? 'bg-seat-available'
                            : 'bg-seat-reserved'
                        }`}
                      >
                  
                        <input 
                           type="checkbox" 
                           checked={seat.isSelected} 
                           onChange={() => toggleSeat(seat.id)} 
                           disabled={seat.isReserved} 
                           aria-label={`Seat ${seat.row}${seat.column}`}
                               className="checkbox bg-gray-300 w-6 text-white checked:bg-orange-500"
/>
                      </div>
                    ))}
                  </div>

                  {/* Row number */}
                  <div className="w-16  text-center">
                    <span className="text-sm font-medium text-muted-foreground">{row}</span>
                    {isExitRow && (
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Info className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Exit row</span>
                      </div>
                    )}
                  </div>

                  {/* Right seats (C, D) */}
                  <div className="flex gap-1">
                    {rowSeats.slice(2, 4).map((seat) => (
                      <div
                        key={seat.id}
                        className={`flex items-center justify-center w-7 h-7 rounded transition-all duration-200 ${
                          seat.isSelected
                            ? 'bg-seat-available'
                            : 'bg-seat-reserved'
                        }`}
                      >
                   <input 
                           type="checkbox" 
                           checked={seat.isSelected} 
                           onChange={() => toggleSeat(seat.id)} 
                           disabled={seat.isReserved} 
                           aria-label={`Seat ${seat.row}${seat.column}`}
                               className="checkbox bg-gray-300 text-white checked:bg-orange-500"
/>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          
        </div>

        {/* Price Footer */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-sm text-orange-400">Total Ticket Price</span>
            <p className="text-2xl font-bold text-orange-500">${totalPrice.toFixed(2)}</p>
          </div>
          <button 
          
            className="bg-orange-400 text-white hover:bg-orange-400 px-12 py-3 text-lg font-semibold rounded-lg"
            disabled={selectedSeats.length === 0}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;