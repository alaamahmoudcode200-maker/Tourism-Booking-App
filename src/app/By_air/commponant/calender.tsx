import DualCalendar from "./DualCalendar";  
export default function Calendar() {
  // حالة عدد الركاب


  return (
     <div className="dropdown dropdown-center ">
        <div className="">
            <label htmlFor="when" className="block text-gray-400 text-xs mb-1">When</label>
            <div className="flex ">
               <input
              id="when"
              type="text"
              value="16 Aug"
              readOnly
              className="w-full bg-transparent outline-none font-semibold text-gray-800"
            />
          
            <div tabIndex={0} className="">
                 x
            </div>
            </div>            
             </div>
         
            
              
             <ul tabIndex={-1} className="dropdown-content menu  rounded-box z-10 w-4xl p-2 ">
                 <DualCalendar/>
             </ul>
             </div>
  
  );
}