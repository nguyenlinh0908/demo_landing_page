'use client';
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 flex flex-col md:flex-row items-start justify-center gap-12">
      {/* Left Text Block */}
      <div className="w-full md:w-[40%] flex flex-col justify-between">
        <div>
          {/* Icon / Logo Placeholder */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm text-gray-600">
              •
            </div>
            <span className="uppercase text-gray-500 tracking-wide text-sm">
              loremisoum
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
            LOREM <br /> IPSUM
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-10 flex items-center justify-center gap-2 bg-black text-white 
          w-[131px] h-[41px] rounded-full text-sm font-medium 
          hover:bg-white hover:text-black border border-black transition-all duration-300"
        >
          About Us
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Right Image Grid */}
      <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="relative w-full h-[500px]">
          <Image
            src="/about1.jpg"
            alt="about 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/about2.jpg"
            alt="about 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
