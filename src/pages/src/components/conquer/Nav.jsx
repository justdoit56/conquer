import React from "react";
import { Divide } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#0F172A] flex items-center justify-center">
            <Divide className="w-5 h-5 text-[#00D1FF]" />
          </div>
          <span className="font-[Fraunces] text-lg font-semibold text-[#0F172A]">
            Conquer Maths
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm text-[#64748B]">
          <a href="#features" className="hover:text-[#0F172A] transition-colors">Method</a>
          <a href="#curriculum" className="hover:text-[#0F172A] transition-colors">Curriculum</a>
          <a href="#register" className="hover:text-[#0F172A] transition-colors">Enrol</a>
        </div>
        <a
          href="#register"
          className="px-5 py-2 rounded-full bg-[#0F172A] text-[#F8FAFC] text-sm font-medium hover:bg-[#1E293B] transition-colors"
        >
          Register
        </a>
      </div>
    </nav>
  );
}
