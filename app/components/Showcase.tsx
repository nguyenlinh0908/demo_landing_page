import Image from "next/image";
import { Play } from "lucide-react";

export default function Showcase() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/showcase.jpg" // replace with your actual image path
        alt="Interior bedroom design"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="flex items-center justify-center w-20 h-20 rounded-full bg-white/70 hover:bg-white transition-all duration-300 backdrop-blur-sm">
          <Play className="w-8 h-8 text-black translate-x-0.5" />
        </button>
      </div>

      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-8 text-sm text-white opacity-80">
        Background
      </div>
    </section>
  );
}
