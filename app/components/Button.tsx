import { ArrowRight } from "lucide-react";

interface ButtonProps {
  label: string;
  dark?: boolean;
}

export default function Button({ label, dark = false }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 border px-5 py-2 rounded-full text-sm font-medium transition ${
        dark
          ? "bg-black text-white hover:bg-gray-800"
          : "border-white text-white hover:bg-white/20"
      }`}
    >
      {label}
      <ArrowRight size={16} />
    </button>
  );
}
