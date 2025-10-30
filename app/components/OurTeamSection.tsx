'use client';

import Image from "next/image";

export default function OurTeamSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 gap-12">
      
      {/* Left content */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Logo / title */}
        <div>
          <p className="text-sm tracking-wide text-gray-600">HIVE Group®</p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mt-3">
            Our <br />
            <span className="font-semibold">Team</span>
          </h2>
        </div>

        {/* Paragraphs */}
        <div className="text-gray-600 text-sm md:text-base space-y-4 max-w-md leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod tempor.
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil,
            illum dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-6 bg-black text-white rounded-full px-6 py-2 text-sm md:text-base w-[131px] h-[41px] hover:bg-neutral-800 transition-all duration-300"
        >
          Our Team
        </button>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/team.jpg" // ← replace with your team image path
          alt="Our Team"
          width={700}
          height={700}
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
}
