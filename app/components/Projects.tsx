"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Projects({ url, page }: { url: string; page: number }) {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={url}
        alt="Featured Project"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top-right indicator */}
      <div className="absolute top-8 right-10 text-white/70 text-sm font-light tracking-wider">
        {page} / 3
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-[80%] flex items-center justify-between text-white">
        {/* Text block */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-wider text-sm mb-3 opacity-80">
            Featured Project
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            lorem <br /> ispum
          </h1>

          <p className="text-base md:text-lg leading-relaxed opacity-90 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit.
          </p>

          <p className="text-base md:text-lg leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit.
          </p>
        </div>

        {/* View Button */}
        <button className="flex items-center gap-2 border border-white/70 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 hover:translate-x-1 transition-all duration-200">
          View
          <ArrowRight size={16} className="opacity-80" />
        </button>
      </div>

      {/* Bottom-left label */}
      <div className="absolute bottom-6 left-8 text-white/60 text-sm">
        Container
      </div>
    </section>
  );
}
