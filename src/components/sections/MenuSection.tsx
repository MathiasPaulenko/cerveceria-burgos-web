"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Beer, Wine, GlassWater, Utensils, Beef } from "lucide-react";
import cartaData from "@/data/carta.json";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Beer, Wine, GlassWater, Utensils, Beef,
};

const tabs = [
  { id: "cervezas", label: "Cervezas" },
  { id: "mojitos", label: "Mojitos" },
  { id: "margaritas", label: "Margaritas" },
  { id: "tapas", label: "Tapas" },
  { id: "raciones", label: "Raciones" },
];

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("cervezas");

  const activeCategory = cartaData.categorias.find(cat => cat.id === activeTab);
  const IconComponent = activeCategory ? (iconMap[activeCategory.icono] || Wine) : Wine;

  return (
    <section id="carta" className="py-24 bg-[#FBF5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="text-[#99120f] font-medium tracking-wide uppercase text-sm">Nuestra Carta</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#151418]">
            Cervezas, Tapas y <span className="text-[#99120f]">Cócteles</span>
          </h2>
          <p className="mt-4 text-lg text-[#A06029] max-w-2xl mx-auto">
            Cervezas bien frías, tapas generosas y cócteles con personalidad
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:border-b sm:border-[#151418]/10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm sm:text-base font-medium transition-all relative ${
                  activeTab === tab.id
                    ? "text-[#99120f]"
                    : "text-[#151418]/60 hover:text-[#151418]"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#99120f]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Tab Content - Full Width */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#151418]/5">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#151418]/5">
                  <div className="p-4 bg-[#99120f]/10 rounded-xl">
                    <IconComponent className="w-8 h-8 text-[#99120f]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#151418]">{activeCategory.nombre}</h3>
                    {activeCategory.descripcion && (
                      <p className="text-sm text-[#A06029] mt-1">{activeCategory.descripcion}</p>
                    )}
                  </div>
                </div>

                {/* Items - Full Width List */}
                <div className="space-y-3">
                  {activeCategory.items.filter(item => item.disponible).map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="flex justify-between items-start gap-4 group p-3 -mx-3 rounded-xl cursor-default transition-colors hover:bg-[#99120f]/5"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-semibold text-lg ${item.destacado ? "text-[#99120f]" : "text-[#151418]"}`}>
                            {item.nombre}
                          </h4>
                          {item.destacado && (
                            <span className="px-2 py-0.5 bg-[#99120f]/10 text-[#99120f] text-xs rounded-full">Recomendado</span>
                          )}
                        </div>
                        <p className="text-sm text-[#A06029] mt-1">{item.descripcion}</p>
                        {(item as {nota?: string}).nota && (
                          <p className="text-xs text-[#99120f] mt-1 font-medium">{(item as {nota?: string}).nota}</p>
                        )}
                        {item.alergenos && item.alergenos.length > 0 && (
                          <p className="text-xs text-[#A06029]/50 mt-1">Alérgenos: {item.alergenos.join(", ")}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        {item.precio > 0 ? (
                          <>
                            <span className="font-bold text-[#99120f] text-lg">{item.precio.toFixed(2)}€</span>
                            {(item as {precio_terraza?: number}).precio_terraza && (
                              <p className="text-xs text-[#A06029]/60">Tza: {(item as {precio_terraza?: number}).precio_terraza?.toFixed(2)}€</p>
                            )}
                          </>
                        ) : (
                          <span className="text-sm text-[#99120f] font-medium">{(item as {nota?: string}).nota || "Incluido"}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <motion.div 
            className="bg-[#F9E3A7]/40 rounded-xl p-6 max-w-3xl mx-auto border-l-4 border-[#99120f]"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-[#99120f]/10 rounded-lg shrink-0">
                <svg className="w-5 h-5 text-[#99120f]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-[#151418]">Notas Importantes</h4>
                <p className="text-xs text-[#A06029]">Antes de pedir, échale un vistazo</p>
              </div>
            </div>
            <ul className="text-sm text-[#151418]/80 space-y-2 ml-1">
              {cartaData.notas.map((nota) => (
                <li key={nota} className="flex items-start gap-2">
                  <span className="text-[#99120f] font-bold mt-0.5">›</span>
                  <span>{nota}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-[#99120f]/15 flex items-center gap-2">
              <svg className="w-3 h-3 text-[#99120f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-xs text-[#A06029] font-medium">
                Actualizado el {cartaData.ultima_actualizacion}
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
