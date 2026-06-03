"use client";

import { motion } from "framer-motion";
import { ChevronDown, Beer, UtensilsCrossed, HeartHandshake, TreePine } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated rich dark background */}
      <div className="absolute inset-0 bg-[#040000] overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040000] via-[#0f0808] to-[#1a1515]" />

        {/* Rising beer bubbles - big and visible */}
        {Array.from({ length: 25 }).map((_, i) => {
          const size = Math.random() * 16 + 8;
          const left = Math.random() * 100;
          const duration = Math.random() * 8 + 6;
          const delay = Math.random() * 10;
          const isGold = Math.random() > 0.5;
          return (
            <motion.div
              key={`bubble-${i}`}
              className={`absolute rounded-full ${isGold ? 'bg-[#FACB6E]' : 'bg-[#FBF5DD]'}`}
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: -30,
                filter: `blur(${size * 0.2}px)`,
                boxShadow: isGold ? `0 0 ${size * 2}px ${size * 0.5}px rgba(250,203,110,0.4)` : `0 0 ${size}px ${size * 0.5}px rgba(251,245,221,0.3)`,
              }}
              animate={{ 
                y: [0, -1100], 
                x: [0, (Math.random() - 0.5) * 40, 0],
                opacity: [0, isGold ? 0.9 : 0.6, 0.3, 0] 
              }}
              transition={{ duration, repeat: Infinity, delay, ease: "easeOut" }}
            />
          );
        })}

        {/* Golden stars */}
        {Array.from({ length: 12 }).map((_, i) => {
          const left = Math.random() * 100;
          const bottom = Math.random() * 90;
          const size = Math.random() * 4 + 3;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-[#FACB6E]"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: `${bottom}%`,
                boxShadow: `0 0 ${size * 4}px ${size}px rgba(250,203,110,0.6)`,
              }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: Math.random() * 2 + 1, 
                repeat: Infinity, 
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Subtle beer foam wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-[0.08]">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#FBF5DD" d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* Floating tapas/cerveza icons (very subtle) */}
        <motion.div
          className="absolute top-[20%] left-[10%] opacity-[0.04]"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FBF5DD" strokeWidth="1">
            <path d="M9 2v6m0 0v10a2 2 0 002 2h2a2 2 0 002-2V8M9 8h6M7 8h10M5 22h14" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-[60%] right-[8%] opacity-[0.03]"
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FBF5DD" strokeWidth="0.8">
            <path d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z M10 3v4 M14 3v4 M8 10h8" />
          </svg>
        </motion.div>

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #FBF5DD 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#040000] to-transparent" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.span 
            className="inline-block px-4 py-2 mb-6 text-sm text-[#FBF5DD] bg-[#99120f]/20 rounded-full border border-[#99120f]/30 cursor-default"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(153, 18, 15, 0.35)", borderColor: "rgba(153, 18, 15, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t.hero.location}
          </motion.span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex items-center justify-center gap-3 sm:gap-4 leading-none"
        >
          <motion.span 
            className="font-serif italic tracking-wide text-[#FBF5DD]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Cervecería
          </motion.span>
          <motion.span 
            className="font-bold tracking-tight"
            style={{ color: "#99120f", fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            whileHover={{ 
              textShadow: "0 0 40px rgba(153, 18, 15, 0.6)",
              scale: 1.03
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Burgos
          </motion.span>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-[#FBF5DD]/70 max-w-xl mx-auto font-light tracking-wide cursor-default"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-24 h-px bg-[#99120f]/50 mx-auto mt-8 mb-8"
        />

        {/* Feature badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {[
            { Icon: Beer, label: t.hero.badges.beer },
            { Icon: UtensilsCrossed, label: t.hero.badges.tapas },
            { Icon: HeartHandshake, label: t.hero.badges.service },
            { Icon: TreePine, label: t.hero.badges.terrace },
          ].map((item) => (
            <motion.span
              key={item.label}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-[#FBF5DD]/80 bg-[#FBF5DD]/5 border border-[#FBF5DD]/10 rounded-full backdrop-blur-sm cursor-default"
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(251, 245, 221, 0.12)",
                borderColor: "rgba(153, 18, 15, 0.4)",
                y: -2
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <motion.span whileHover={{ scale: 1.3, rotate: 10 }} transition={{ duration: 0.2 }}>
                <item.Icon className="w-4 h-4 text-[#FACB6E]" />
              </motion.span>
              <span>{item.label}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.a href="#carta" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-[#FBF5DD]/50 hover:text-[#99120f] transition-colors">
          <span className="text-sm mb-2">{t.hero.scrollDown}</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
