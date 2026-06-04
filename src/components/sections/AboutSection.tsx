"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Star, Wheat, Heart, Users } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function AboutSection() {
  const { t } = useTranslation();

  const featureCards = t.about.featureCards || [];
  const features = [
    { icon: Star, title: featureCards[0]?.title || "Desde 2015", description: featureCards[0]?.description || "", subtext: featureCards[0]?.subtext || "" },
    { icon: Wheat, title: featureCards[1]?.title || "Ingredientes frescos", description: featureCards[1]?.description || "", subtext: featureCards[1]?.subtext || "" },
    { icon: Heart, title: featureCards[2]?.title || "Buen ambiente", description: featureCards[2]?.description || "", subtext: featureCards[2]?.subtext || "" },
    { icon: Users, title: featureCards[3]?.title || "Terraza popular", description: featureCards[3]?.description || "", subtext: featureCards[3]?.subtext || "" },
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#FBF5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <FadeIn direction="left" className="flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center">
              <motion.span
                className="text-[#99120f] font-medium tracking-wide uppercase text-sm inline-block"
                whileHover={{ scale: 1.05 }}
              >{t.about.label}</motion.span>
              <motion.h2
                className="mt-4 text-4xl lg:text-5xl font-bold text-[#151418] leading-tight"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t.about.title} <span className="text-[#99120f]">{t.about.highlight}</span>
              </motion.h2>
              <div className="mt-6 space-y-4 text-[#A06029] text-lg leading-relaxed">
                {t.about.paragraphs?.map((text: string, i: number) => (
                  <motion.p
                    key={i}
                    className={i === 2 ? "font-medium text-[#151418]" : ""}
                    whileHover={{ x: 6, color: "#151418" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {text}
                  </motion.p>
                )) || (
                  <>
                    <motion.p whileHover={{ x: 6, color: "#151418" }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                      En Cervecería Burgos encontrarás buena cerveza servida en vaso grande y con tapa generosa.
                    </motion.p>
                    <motion.p whileHover={{ x: 6, color: "#151418" }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                      Cervezas bien frías, tapas para compartir y una terraza que invita a quedarse.
                    </motion.p>
                    <motion.p className="font-medium text-[#151418]" whileHover={{ x: 6, color: "#151418" }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                      Ven con hambre y gana de disfrutar: aquí se come bien, se paga bien y se vuelve con frecuencia.
                    </motion.p>
                  </>
                )}
              </div>

              {/* Extra content to balance height with right cards */}
              <motion.div
                className="mt-8 p-6 bg-white/60 rounded-xl border border-[#151418]/5"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-[#151418] font-semibold mb-2">{t.about.whyReturn?.title || "¿Por qué volver?"}</p>
                <ul className="space-y-2 text-[#A06029]">
                  {(t.about.whyReturn?.bullets || []).map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#99120f] mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="flex flex-col h-full">
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#151418]/5 cursor-default"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                    borderColor: "rgba(153, 18, 15, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="p-3 bg-[#99120f]/10 rounded-lg shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <feature.icon className="w-6 h-6 text-[#99120f]" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#151418]">{feature.title}</h3>
                    <p className="text-[#A06029] font-medium">{feature.description}</p>
                    <p className="text-sm text-[#A06029]/70">{feature.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
