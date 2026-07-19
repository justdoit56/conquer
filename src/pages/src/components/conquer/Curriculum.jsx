import React, { useState } from "react";
import { motion } from "framer-motion";

const grades = [
  { code: "B.01", name: "Basic 6", formula: "Foundations of number, fractions & early geometry — the transition to secondary maths." },
  { code: "B.02", name: "JSS1", formula: "Whole numbers, sets, algebraic basics & measurement mastery." },
  { code: "B.03", name: "JSS2", formula: "Algebra, ratios, statistics & geometric reasoning deepened." },
  { code: "B.04", name: "JSS3", formula: "BECE-focused algebra, mensuration & problem-solving for exam success." },
];

export default function Curriculum() {
  const [active, setActive] = useState(0);

  return (
    <section id="curriculum" className="bg-[#0F172A] blueprint-grid py-16 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div>
          <span className="font-[JetBrains_Mono] text-xs tracking-widest text-[#00D1FF] uppercase">
            The Curriculum Matrix
          </span>
          <h2 className="font-[Fraunces] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F8FAFC] mt-3 mb-4">
            From Basic 6 to JSS3.
          </h2>
          <p className="text-[#94A3B8] leading-[1.618] mb-8 sm:mb-10 max-w-md">
            A structured journey. Select a grade to reveal its success formula.
          </p>
          <div className="space-y-3">
            {grades.map((g, i) => (
              <button
                key={g.code}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-xl border p-5 transition-all ${
                  active === i
                    ? "border-[#00D1FF] bg-[#00D1FF]/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-[Fraunces] text-xl font-semibold text-[#F8FAFC]">
                    {g.name}
                  </span>
                  <span className="font-[JetBrains_Mono] text-xs text-[#64748B]">{g.code}</span>
                </div>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-[#94A3B8] text-sm leading-[1.618] mt-3"
                  >
                    {g.formula}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://media.base44.com/images/public/6a4cbb4cc2b424ad07835c1d/d986518e9_generated_0951da0e.png"
            alt="Abstract glass geometry arranged in a Fibonacci spiral"
            className="w-full rounded-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
