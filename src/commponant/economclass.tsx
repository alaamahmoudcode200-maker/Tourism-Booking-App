"use client"
import { useState } from "react";

import { Info } from "lucide-react";

interface SeatData {
  id: string;
  row: number;
  column: 'A' | 'B' | 'C' | 'D' | 'E' |'F';
  isReserved: boolean;
  isSelected: boolean;
}

const LongSeatMap = () => {
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
      const order = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E':4,'F':5 };
      return order[a.column] - order[b.column];
    });
  };

  return (
 
 
<div className="space-y-2 bg-white  rounded py-2 px-2 mt-5">
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
                  <div className="w-4  text-center">
                    <span className="text-sm font-medium text-muted-foreground">{row}</span>
                    {isExitRow && (
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Info className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Right seats (C, D) */}
                  <div className="flex gap-1">
                    {rowSeats.slice(2, 5).map((seat) => (
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
          
 

  );
};

export default LongSeatMap;