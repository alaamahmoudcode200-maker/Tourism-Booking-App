export default function MiniSeatMap() {
  // 0: متاح (برتقالي)، 1: محجوز (رمادي)
  const seats1 = [
    [0, 1],
    [0, 0],
    [1, 0],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 1],
  ];
    const seats2 = [
    [1, 0],
    [1, 0],
    [0, 1],
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 0],
  ];

  return (
    <div className=" py-3 rounded-xl   ">
      <div className="flex flex-row justify-center ">
      
        <div className="bg-white rounded-2xl py-4 flex justify-center gap-2 ">
               <div>
          {seats1.map((row, rowIdx) => (
            <div key={rowIdx} className="flex  gap-2 flex-row mb-1 last:mb-0">
              {row.map((seat, colIdx) =>
                seat === null ? (
                  <div key={colIdx} className="w-7 h-8 mx-0.5" />
                ) : (
                  <div
                    key={colIdx}
                    className={`w-6 h-6 mx-0.5 rounded ${seat === 0 ? "bg-orange-400" : "bg-gray-200"}`}
                  />
                )
              )}
            </div>
          ))}
               </div>
                   <div className="flex flex-col justify-between ">
          {seats1.map((_, i) => (
            <span key={i} className="text-xs text-gray-300 select-none">{i + 1}</span>
          ))}
                     </div>
               <div>
          {seats2.map((row, rowIdx) => (
            <div key={rowIdx} className="flex  gap-2 flex-row mb-1 last:mb-0">
              {row.map((seat, colIdx) =>
                seat === null ? (
                  <div key={colIdx} className="w-7 h-8 mx-0.5" />
                ) : (
                  <div
                    key={colIdx}
                    className={`w-6 h-6 mx-0.5 rounded ${seat === 0 ? "bg-orange-400" : "bg-gray-200"}`}
                  />
                )
              )}
            </div>
          ))}
               </div>
        </div>
      
      </div>
    </div>
  );
}