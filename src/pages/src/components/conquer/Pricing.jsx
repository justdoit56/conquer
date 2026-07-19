import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    code: "D.01",
    name: "Foundation",
    price: "₦20,000",
    period: "/month",
    description: "Group classes for steady progress.",
    features: [
      "First class is free",
      "8 classes / month",
      "Maximum of 8 students",
      "Recorded classes for revision",
    ],
    popular: false,
  },
  {
    code: "D.02",
    name: "Scholar",
    price: "₦30,000",
    period: "/month",
    description: "Small-group learning with exam focus.",
    features: [
      "Small-group sessions (max 6)",
      "Personalized practice sets",
      "BECE & exam preparation",
      "Monthly parent feedback",
    ],
    popular: true,
  },
  {
    code: "D.03",
    name: "Mastery",
    price: "₦60,000",
    period: "/month",
    description: "1-on-1 tutoring for maximum results.",
    features: [
      "One-on-one tutoring",
      "Custom learning plan",
      "Full BECE & exam preparation",
      "Weekly progress tracking",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0F172A] blueprint-grid py-16 sm:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-[JetBrains_Mono] text-xs tracking-widest text-[#00D1FF] uppercase">
            Tuition Tiers
          </span>
          <h2 className="font-[Fraunces] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F8FAFC] mt-3">
            Choose your path.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                t.popular
                  ? "bg-[#F8FAFC] text-[#0F172A] border-2 border-[#00D1FF]"
                  : "glass-card text-[#F8FAFC] border border-white/10"
              }`}
            >
              {t.popular && (
                <span className="absolute top-6 right-6 font-[JetBrains_Mono] text-xs uppercase tracking-wide text-[#0F172A] bg-[#00D1FF] px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <span className={`font-[JetBrains_Mono] text-xs ${t.popular ? "text-[#64748B]" : "text-[#94A3B8]"}`}>
                {t.code}
              </span>
              <h3 className="font-[Fraunces] text-2xl font-semibold mt-2">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-[Fraunces] text-3xl sm:text-4xl font-semibold">{t.price}</span>
                <span className={`font-[JetBrains_Mono] text-sm ${t.popular ? "text-[#64748B]" : "text-[#94A3B8]"}`}>
                  {t.period}
                </span>
              </div>
              <p className={`mt-3 leading-[1.618] ${t.popular ? "text-[#1E293B]" : "text-[#94A3B8]"}`}>
                {t.description}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00D1FF]" />
                    <span className={`text-sm leading-[1.5] ${t.popular ? "text-[#1E293B]" : "text-[#CBD5E1]"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`mt-8 text-center px-6 py-3.5 rounded-full font-medium transition-colors ${
                  t.popular
                    ? "bg-[#0F172A] text-[#F8FAFC] hover:bg-[#1E293B]"
                    : "border border-white/20 text-[#F8FAFC] hover:border-[#00D1FF]"
                }`}
              >
                Enrol
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
