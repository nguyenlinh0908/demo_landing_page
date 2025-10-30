'use client';
import Image from "next/image";

export default function Project() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <Image
        src="/project1.jpg"
        alt="Featured Project"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay text */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16 text-white">
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
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit.
        </p>

        <p className="text-base md:text-lg leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit.
        </p>

        <div className="absolute bottom-6 left-8 md:left-16 text-sm text-white/60">
          HorizontalBorder
        </div>
      </div>
    </section>
  );
}
