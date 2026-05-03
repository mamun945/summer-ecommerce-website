"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "animate.css";

const banners = [
  {
    title: "Summer Products Offer ☀️",
    desc: "Up to 50% off on summer essentials!",
    image:
      "https://images.unsplash.com/photo-1753161029001-153c43be9eb7?q=80&w=1031&auto=format&fit=crop",
  },
  {
    title: "Cool Fashion Deals 😎",
    desc: "Stay stylish this summer season",
    image:
      "https://images.unsplash.com/photo-1753161025693-e68299ad484f?w=600&auto=format&fit=crop",
  },
  {
    title: "Hot Sale 🔥",
    desc: "Limited time discounts on top products",
    image:
      "https://images.unsplash.com/photo-1753161025156-7d41a911ca17?w=600&auto=format&fit=crop",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-2xl shadow-lg">

      {banners.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENT */}
          {index === current && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

              <h1 className="text-3xl font-bold text-center animate__animated animate__zoomIn">
                {item.title}
              </h1>

              <p className="mt-3 text-sm animate__animated animate__fadeInUp">
                {item.desc}
              </p>

            </div>
          )}
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}