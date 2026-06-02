"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Pre-generated static values to avoid hydration mismatch
const bubbles = Array.from({ length: 25 }, (_, i) => {
  const seed = i * 37;
  const pseudoRandom = (n: number) => ((seed + n * 17) % 100) / 100;
  return {
    id: `bubble-${i}`,
    size: pseudoRandom(1) * 16 + 8,
    left: pseudoRandom(2) * 100,
    duration: pseudoRandom(3) * 8 + 6,
    delay: pseudoRandom(4) * 10,
    isGold: pseudoRandom(5) > 0.5,
    xOffset: (pseudoRandom(6) - 0.5) * 40,
  };
});

const stars = Array.from({ length: 12 }, (_, i) => {
  const seed = i * 53;
  const pseudoRandom = (n: number) => ((seed + n * 23) % 100) / 100;
  return {
    id: `star-${i}`,
    left: pseudoRandom(1) * 100,
    bottom: pseudoRandom(2) * 90,
    size: pseudoRandom(3) * 4 + 3,
    duration: pseudoRandom(4) * 2 + 1,
    delay: pseudoRandom(5) * 4,
  };
});

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated rich dark background */}
      <div className="absolute inset-0 bg-[#040000] overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040000] via-[#0f0808] to-[#1a1515]" />

        {/* Rising beer bubbles - big and visible */}
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className={`absolute rounded-full ${b.isGold ? 'bg-[#FACB6E]' : 'bg-[#FBF5DD]'}`}
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: -30,
              filter: `blur(${b.size * 0.2}px)`,
              boxShadow: b.isGold ? `0 0 ${b.size * 2}px ${b.size * 0.5}px rgba(250,203,110,0.4)` : `0 0 ${b.size}px ${b.size * 0.5}px rgba(251,245,221,0.3)`,
            }}
            animate={{
              y: [0, -1100],
              x: [0, b.xOffset, 0],
              opacity: [0, b.isGold ? 0.9 : 0.6, 0.3, 0]
            }}
            transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: "easeOut" }}
          />
        ))}

        {/* Golden stars */}
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-[#FACB6E]"
            style={{
              width: s.size,
              height: s.size,
              left: `${s.left}%`,
              bottom: `${s.bottom}%`,
              boxShadow: `0 0 ${s.size * 4}px ${s.size}px rgba(250,203,110,0.6)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut"
            }}
          />
        ))}

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
            Carabanchel, Madrid · Desde 2015
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
          Buena cerveza, buena gente, buen momento
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
            { icon: "🍺", label: "Cañas bien frías" },
            { icon: "🍤", label: "Tapas generosas" },
            { icon: "👋", label: "Buen Servicio" },
            { icon: "🌿", label: "Terraza" },
          ].map((item, i) => (
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
              <motion.span whileHover={{ scale: 1.3, rotate: 10 }} transition={{ duration: 0.2 }}>{item.icon}</motion.span>
              <span>{item.label}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.a href="#carta" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-[#FBF5DD]/50 hover:text-[#99120f] transition-colors">
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
