import { FaBed, FaPlane, FaSubway, FaBus, FaUmbrellaBeach } from "react-icons/fa";
import Link from "next/link";
export default function NavTabs() {
  const NavTabs = [
    { icon: FaBed, label: "Hotels", active: true, href: "/HotelsPage" },
    { icon: FaPlane, label: "By air", active: false, href: "/By_air" },
    { icon: FaSubway, label: "Railway station", active: false, href: "/Railway_station" },
    { icon: FaBus, label: "The buses", active: false, href: "/The_buses" },
    { icon: FaUmbrellaBeach, label: "Tours", active: false, href: "/Tours" },
  ];

  return (
    <div className="relative w-full -mt-32 sm:-mt-36 md:-mt-40 h-20 sm:h-24 md:h-32">
      {/* Nav Tabs */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-4/5 md:w-2/3 px-2 sm:px-4 md:px-5">
        <div className="bg-white shadow-sm rounded-lg sm:rounded-xl p-3 sm:p-4 flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto sm:justify-center hide-scrollbar">
          {NavTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link key={tab.label} href={tab.href}>
                <div className={`flex items-center gap-1 sm:gap-2 cursor-pointer font-semibold text-xs sm:text-sm md:text-base relative group whitespace-nowrap ${
                  tab.active ? "text-orange-500" : "text-gray-700"
                }`}>
                  <Icon className={`text-sm sm:text-lg md:text-xl ${
                    tab.active ? "text-orange-500" : "text-gray-700 group-hover:text-orange-500 transition-colors"
                  }`}/>
                  <span className={tab.active ? "text-orange-500" : "group-hover:text-orange-500 transition-colors"}>
                    {tab.label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded transition-opacity duration-200 ${
                    tab.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}/>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}