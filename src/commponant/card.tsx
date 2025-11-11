"use client";
import React, { useState } from "react";
import { FaRegHeart, FaMoon, FaUser } from "react-icons/fa";
import Image from "next/image";

interface TourBadge {
  text: string;
  color: string;
}

interface Tour {
  id: number;
  image: string;
  title: string;
  duration: string;
  guests: string;
  price: string;
  badge: TourBadge;
}

type FavoriteState = Record<number, boolean>;

const tours: Tour[] = [
  {
    id: 1,
    image: "/Grand4.png",
    title: "California Sunset/Twilight Boat Cruise",
    duration: "2 days 3 nights",
    guests: "4-6 guest",
    price: "$48.25",
    badge: { text: "Top Rated", color: "bg-orange-500" },
  },
  {
    id: 2,
    image: "/Grand2.png",
    title: "NYC: Food Tastings and Culture Tour",
    duration: "3 days 3 nights",
    guests: "4-6 guest",
    price: "$17.32",
    badge: { text: "Best Sale", color: "bg-emerald-500" },
  },
  {
    id: 3,
    image: "/Grand1.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
    {
    id: 4,
    image: "/Grand4.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
    {
    id: 5,
    image: "/Grand2.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
    {
    id: 6,
    image: "/Grand1.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
    {
    id: 7,
    image: "/Grand2.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
    {
    id: 8,
    image: "/Grand4.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
      {
    id: 9,
    image: "/Grand2.png",
    title: "Grand Canyon Horseshoe Bend 2 days",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "bg-sky-600" },
  },
 
];

export default function CardHotels() {
  const [fav, setFav] = useState<FavoriteState>({});

  const toggleFav = (id: number): void => {
    setFav((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <section className="max-w-[1150px] - mx-auto px-5 py-12">
   
      <div className="grid grid-cols-1 -ml-8 gap-16 md:grid-cols-3 ">
        {tours.map((t) => (
          <article
            key={t.id}
            className="group relative h-full  w-[380px] border border-gray-100 rounded-[20px] overflow-hidden shadow-sm transition-transform duration-400 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative h-[240px] overflow-hidden">
              <Image src={t.image} alt={t.title} width={380} height={240} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              <span className={`absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full ${t.badge.color}`}>{t.badge.text}</span>

              <button
                onClick={() => toggleFav(t.id)}
                aria-label="favorite"
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <FaRegHeart className={`text-sm ${fav[t.id] ? "text-red-500" : "text-gray-600"}`} />
              </button>
            </div>
            <div className="bg-white  p-5 rounded ">
              <h3 className="text-lg text-gray-700 font-semibold mb-3">{t.title}</h3>
              <div className="flex text-sm text-gray-600 gap-6 mb-4">
                <span className="flex items-center gap-2"><FaMoon className="text-sm" /> {t.duration}</span>
                <span className="flex items-center gap-2"><FaUser className="text-sm" /> {t.guests}</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl text-gray-700 font-bold">{t.price}</span>
                  <small className="text-sm text-gray-500 ml-1">/ person</small>
                </div>
                <button className="px-4 py-2 bg-[#E85528] text-white rounded-md font-semibold hover:bg-[#c9441e]">Book Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}