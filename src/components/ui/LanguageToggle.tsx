"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Props {
  lang: "es" | "en";
  onChange: (lang: "es" | "en") => void;
  className?: string;
}

const options = [
  { code: "es" as const, label: "Español", flag: "🇪🇸" },
  { code: "en" as const, label: "English", flag: "🇬🇧" },
];

export function LanguageToggle({ lang, onChange, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const active = options.find((o) => o.code === lang) ?? options[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#99120f]/10 hover:bg-[#99120f]/20 transition-colors text-[#99120f] font-medium text-sm"
        aria-label="Cambiar idioma"
      >
        <span className="text-base leading-none">{active.flag}</span>
        <span className="uppercase text-xs tracking-wide">{active.code}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#FBF5DD] shadow-xl border border-[#151418]/10 overflow-hidden z-50"
          >
            {options.map((option) => {
              const selected = option.code === lang;
              return (
                <li key={option.code}>
                  <button
                    onClick={() => {
                      onChange(option.code);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      selected
                        ? "bg-[#99120f]/10 text-[#99120f]"
                        : "text-[#151418] hover:bg-[#99120f]/5"
                    }`}
                  >
                    <span className="text-lg leading-none">{option.flag}</span>
                    <span className="text-sm font-medium flex-1">{option.label}</span>
                    {selected && <Check className="w-4 h-4" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
