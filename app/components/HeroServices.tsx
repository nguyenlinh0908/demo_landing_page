'use client';

import Image from "next/image";

export default function HeroServices() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/service.jpg" // ← replace with your actual image path
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top-left text */}
      <div className="absolute top-16 left-12 md:top-24 md:left-20 text-white z-10 max-w-sm">
        <p className="text-xl md:text-2xl font-light leading-snug">
          Lorem ipsum dolor
          <br /> sit amet, consectetur
          <br /> adipiscing elit.
        </p>
      </div>

      {/* Bottom-right content */}
      <div className="absolute bottom-16 right-12 md:bottom-20 md:right-20 text-white z-10 flex flex-col items-end space-y-4">
        <p className="text-sm md:text-base text-gray-200 text-right max-w-xs leading-snug">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit sed do.
        </p>

        <button
          className="border border-white text-white rounded-full px-6 py-2 text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300"
        >
          See all services
        </button>
      </div>
    </section>
  );
}
