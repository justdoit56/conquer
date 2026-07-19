import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardCheck, Lightbulb } from "lucide-react";

const features = [
  {
    code: "A.01",
    icon: GraduationCap,
    title: "Experienced Tutors",
    text: "Qualified Mathematics teachers dedicated to helping every student succeed.",
    proof: "∀ student ∃ path → success",
  },
  {
    code: "A.02",
    icon: ClipboardCheck,
    title: "Exam Preparation",
    text: "Prepare confidently for school examinations, BECE and other assessments.",
    proof: "P(pass) → maximised",
  },
  {
    code: "A.03",
    icon: Lightbulb,
    title: "Interactive Lessons",
    text: "Simple explanations, practice questions and personalized learning support.",
    proof: "understanding = f(practice)",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F8FAFC] py-16 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-[JetBrains_Mono] text-xs tracking-widest text-[#00D1FF] uppercase">
            The Method
          </span>
          <h2 className="font-[Fraunces] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] mt-3">
            An engineered path to understanding.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass-card rounded-2xl p-6 sm:p-8 overflow-hidden"
            >
              <span className="font-[JetBrains_Mono] text-xs text-[#64748B]">{f.code}</span>
              <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center mt-4 mb-6">
                <f.icon className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <h3 className="font-[Fraunces] text-2xl font-semibold text-[#0F172A] mb-3">
                {f.title}
              </h3>
              <p className="text-[#1E293B] leading-[1.618]">{f.text}</p>
              <div className="mt-6 font-[JetBrains_Mono] text-xs text-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity">
                {"// "}{f.proof}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
