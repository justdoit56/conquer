import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -14, y: x * 14 });
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-screen blueprint-grid bg-[#F8FAFC] flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center w-full py-12 sm:py-20">
        {/* Left: 3D glass shape */}
        <div className="order-2 lg:order-1 relative flex justify-center lg:border-r border-[#0F172A]/10 lg:pr-16">
          <motion.img
            src="https://media.base44.com/images/public/6a4cbb4cc2b424ad07835c1d/542b37788_generated_image.png"
            alt="Nigerian student attending an online maths class from home"
            className="w-[75%] sm:w-[85%] max-w-md rounded-3xl border border-[#0F172A]/10 shadow-2xl"
            animate={{ rotateX: tilt.x, rotateY: tilt.y, y: [0, -16, 0] }}
            transition={{
              rotateX: { type: "spring", stiffness: 60 },
              rotateY: { type: "spring", stiffness: 60 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>

        {/* Right: value proposition */}
        <div className="order-1 lg:order-2">
          <span className="font-[JetBrains_Mono] text-xs tracking-widest text-[#00D1FF] uppercase">
            a + b → Mastery
          </span>
          <h1 className="font-[Fraunces] text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#0F172A] leading-[1.05] mt-4">
            Conquer<br />Maths.
          </h1>
          <p className="mt-6 text-lg leading-[1.618] text-[#1E293B] max-w-md">
            Helping students in <strong className="text-[#0F172A]">Basic 6, JSS1, JSS2 and JSS3</strong> build
            confidence, improve grades and excel in Mathematics through clear lessons and expert tutoring.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#register"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0F172A] text-[#F8FAFC] font-medium hover:bg-[#1E293B] transition-colors"
            >
              Register Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#register"
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00D1FF] text-[#0F172A] font-medium hover:bg-[#00b8e0] transition-colors"
            >
              Free Class
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#0F172A]/20 text-[#0F172A] font-medium hover:border-[#00D1FF] transition-colors"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
