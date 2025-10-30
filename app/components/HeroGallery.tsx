'use client';

import Image from "next/image";

export default function HeroGallery() {
  return (
    <section className="flex flex-col items-center justify-center text-black bg-white px-6 md:px-16 py-20">
      {/* Top Content */}
      <div className="w-full md:w-[90%] flex flex-col md:flex-row items-start justify-between">
        {/* Left Text + Images */}
        <div className="flex flex-col">
          {/* First line */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[4rem] md:text-[8rem] font-light leading-none tracking-tight">
            <span>loremisp</span>
            <Image
              src="/gallery2.jpg"
              alt="Gallery 2"
              width={120}
              height={120}
              className="rounded-sm object-cover inline-block"
            />
            <span>ispums</span>
          </div>

          {/* Second line + Button aligned */}
          <div className="flex items-center gap-6 mt-4 text-[3rem] md:text-[5rem] font-light">
            <div className="flex items-center gap-4">
              <Image
                src="/gallery1.jpg"
                alt="Gallery 1"
                width={120}
                height={120}
                className="rounded-sm object-cover inline-block"
              />
              <span>by HIVE®</span>
            </div>

            {/* Button aligned to same baseline */}
            <button
              className="bg-black text-white rounded-full w-[131px] h-[41px] 
              flex items-center justify-center text-sm font-medium 
              hover:bg-gray-900 transition-all duration-300"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Paragraphs */}
      <div className="w-full md:w-[80%] mt-16 space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit.
        </p>
      </div>
    </section>
  );
}
