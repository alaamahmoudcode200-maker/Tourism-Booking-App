
export default function FormCity() {
   const cities = [
    { name: "Sochi", country: "Russia" },
    { name: "Sochi", country: "Russia" },
    { name: "Sochi", country: "Russia" },
  ];


  return (
     <div className="dropdown dropdown-center ">
        <div className="">
              <label htmlFor="from" className="block text-gray-400 text-xs mb-1">From</label>
            <div className="flex ">
        
    
            <input
              id="from"
              type="text"
              value="Moscow"
              readOnly
              className="w-full bg-transparent outline-none text-center font-semibold text-gray-800"
            />
          
            <div tabIndex={0} className="">
                 x
            </div>
            </div>            
          
         
            
              
             <ul tabIndex={-1} className="dropdown-content menu  rounded-box z-10 w-90 p-2 ">
                  <div className="bg-white rounded-2xl shadow p-4 max-w-xs">
                    {cities.map((city, idx) => (
                    <div key={idx}>
                     <div className="py-2">
                      <div className="font-bold text-lg text-start">{city.name}</div>
                       <div className="text-gray-400 text-sm text-start">{city.country}</div>
                       </div>
                      {idx !== cities.length - 1 && (
                   <hr className="border-gray-200 my-1" />
                    )}
                  </div>
                 ))}
                </div>
             </ul>
             </div>
        </div>
  );
}