"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Martini } from "lucide-react";
import coctelesDataEs from "@/data/cocteles_es.json";
import coctelesDataEn from "@/data/cocteles_en.json";
import { useTranslation } from "@/i18n/useTranslation";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Martini,
};

export function CocktailSection() {
  const { t, lang } = useTranslation();
  const [activeTab, setActiveTab] = useState("mojitos");

  const coctelesData = lang === "en" ? coctelesDataEn : coctelesDataEs;

  const tabs = [
    { id: "mojitos", label: t.cocktails.tabs?.mojitos || "Mojitos" },
    { id: "daiquiri", label: t.cocktails.tabs?.daiquiri || "Daiquiri" },
    { id: "margaritas", label: t.cocktails.tabs?.margaritas || "Margaritas" },
    { id: "caipirina", label: t.cocktails.tabs?.caipirina || "Caipiriña" },
    { id: "spritz", label: t.cocktails.tabs?.spritz || "Spritz" },
    { id: "especiales", label: t.cocktails.tabs?.especiales || "Especiales" },
    { id: "caipiroska", label: t.cocktails.tabs?.caipiroska || "Caipiroska" },
    { id: "sin_alcohol", label: t.cocktails.tabs?.sin_alcohol || "Sin Alcohol" },
  ];

  const activeCategory = coctelesData.categorias.find(cat => cat.id === activeTab);
  const IconComponent = activeCategory ? (iconMap[activeCategory.icono] || Martini) : Martini;

  return (
    <section id="cocteles" className="py-24 bg-[#040000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="text-[#FACB6E] font-medium tracking-wide uppercase text-sm">{t.cocktails.title}</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#FBF5DD]">
            {t.cocktails.highlight}
          </h2>
          <p className="mt-4 text-lg text-[#A06029] max-w-2xl mx-auto">
            {t.cocktails.subtitle}
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:border-b sm:border-[#FBF5DD]/10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm sm:text-base font-medium transition-all relative ${
                  activeTab === tab.id
                    ? "text-[#FACB6E]"
                    : "text-[#FBF5DD]/60 hover:text-[#FBF5DD]"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="cocktail-active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FACB6E]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#FACB6E]/10 rounded-lg">
                  <IconComponent className="w-6 h-6 text-[#FACB6E]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#FBF5DD]">{activeCategory.nombre}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#151418]/60 rounded-xl p-4 border border-[#FBF5DD]/5 hover:border-[#FACB6E]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-[#99120f]/30 to-[#FACB6E]/20 flex items-center justify-center">
                        <img
                          src={`/images/cocktails/${item.id}.webp`}
                          alt={item.nombre}
                          className="absolute inset-0 w-full h-full object-cover z-10"
                          loading="lazy"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        />
                        <Martini className="w-7 h-7 text-[#FACB6E]/60 z-0" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#FBF5DD] group-hover:text-[#FACB6E] transition-colors truncate">
                          {item.nombre}
                        </h4>
                        {item.descripcion && (
                          <p className="text-sm text-[#A06029] mt-0.5 line-clamp-2">{item.descripcion}</p>
                        )}
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0 self-center">
                        <span className="text-lg font-bold text-[#FACB6E]">
                          {item.precio.toFixed(2).replace('.', ',')} €
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notes */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <motion.div
            className="bg-[#F9E3A7]/10 rounded-xl p-6 max-w-3xl mx-auto border-l-4 border-[#FACB6E]"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#FACB6E]/10 rounded-lg shrink-0">
                <svg className="w-5 h-5 text-[#FACB6E]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#FBF5DD]">{t.cocktails.notesTitle || "Notas Importantes"}</h4>
                <p className="text-xs text-[#A06029]">{t.cocktails.notesSubtitle || "Antes de pedir, échale un vistazo"}</p>
              </div>
            </div>
            <ul className="text-sm text-[#FBF5DD]/80 space-y-2 ml-1 text-left">
              {coctelesData.notas.map((nota) => (
                <li key={nota} className="flex items-start gap-2">
                  <span className="text-[#FACB6E] font-bold mt-0.5">›</span>
                  <span>{nota}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#FACB6E]/15 flex items-center gap-2">
              <svg className="w-3 h-3 text-[#FACB6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-xs text-[#A06029] font-medium">
                {t.cocktails.updated || "Actualizado el"} {coctelesData.ultima_actualizacion}
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
