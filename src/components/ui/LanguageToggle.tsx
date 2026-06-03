"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Props {
  lang: "es" | "en";
  onChange: (lang: "es" | "en") => void;
  className?: string;
}

function SpainFlag({ className = "" }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} aria-hidden="true">
      <rect width="24" height="18" fill="#AA151B" />
      <rect y="4.5" width="24" height="9" fill="#F1BF00" />
    </svg>
  );
}

function UkFlag({ className = "" }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} aria-hidden="true">
      <rect width="24" height="18" fill="#012169" />
      <path d="M0 0 L24 18 M24 0 L0 18" stroke="#fff" strokeWidth="2" />
      <path d="M12 0 V18 M0 9 H24" stroke="#fff" strokeWidth="3" />
      <path d="M12 0 V18 M0 9 H24" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M0 0 L24 18 M24 0 L0 18" stroke="#C8102E" strokeWidth="1.2" />
    </svg>
  );
}

const options = [
  { code: "es" as const, label: "Español", Flag: SpainFlag },
  { code: "en" as const, label: "English", Flag: UkFlag },
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
        <active.Flag className="w-5 h-4 rounded-sm shadow-sm" />
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
                    <option.Flag className="w-5 h-4 rounded-sm shadow-sm" />
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
