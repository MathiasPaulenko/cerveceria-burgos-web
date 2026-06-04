"use client";

import { motion } from "framer-motion";
import { ChevronDown, Beer, UtensilsCrossed, HeartHandshake, TreePine } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { useTranslation } from "@/i18n/useTranslation";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#040000] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040000] via-[#0f0808] to-[#1a1515]" />

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

        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-[0.08]">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#FBF5DD" d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" />
          </svg>
        </div>

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

        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #FBF5DD 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

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

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-[#FBF5DD]/70 max-w-xl mx-auto font-light tracking-wide cursor-default"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-24 h-px bg-[#99120f]/50 mx-auto mt-8 mb-8"
        />

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-3 mt-8"
        >
          <motion.a
            href="https://instagram.com/cerveceriaburgos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#FBF5DD]/5 border border-[#FBF5DD]/10 rounded-full hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4 text-[#FBF5DD]/70 group-hover:text-[#FBF5DD]" />
          </motion.a>
          <motion.a
            href="https://facebook.com/cerveceriaburgos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#FBF5DD]/5 border border-[#FBF5DD]/10 rounded-full hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4 text-[#FBF5DD]/70 group-hover:text-[#FBF5DD]" />
          </motion.a>
          <motion.a
            href="https://wa.me/34625047070"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#FBF5DD]/5 border border-[#FBF5DD]/10 rounded-full hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="WhatsApp"
          >
            <svg className="w-4 h-4 text-[#FBF5DD]/70 group-hover:text-[#FBF5DD]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1.001-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
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
