"use client";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-md">
      <button className="border border-gray-400 rounded-full px-5 py-1 text-sm font-medium hover:bg-gray-100 transition">
        Our Projects
      </button>
      <div className="flex items-center space-x-2">
        <div className="text-center">
          <p className="font-semibold text-sm tracking-wide">DESIGN</p>
          <p className="text-xs tracking-wider text-gray-600">HIVE</p>
        </div>
      </div>
      <button className="p-2 rounded-md hover:bg-gray-100">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
