"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { useTranslation } from "@/i18n/useTranslation";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Header() {
  const { t, lang, setLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  const navItems = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.carta, href: "#carta" },
    { label: t.nav.cocteles, href: "#cocteles" },
    { label: t.nav.nosotros, href: "#nosotros" },
    { label: t.nav.galeria, href: "#galeria" },
    { label: t.nav.contacto, href: "#contacto" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF5DD]/95 backdrop-blur-md border-b border-[#151418]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center group py-2">
            <Logo variant="dark" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-medium transition-colors py-1 ${
                    isActive
                      ? "text-[#99120f]"
                      : "text-[#151418]/70 hover:text-[#99120f]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#99120f] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle
              lang={lang}
              onChange={setLanguage}
              className="hidden lg:flex"
              ariaLabel={t.languageToggle || "Change language"}
            />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#151418]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FBF5DD] border-t border-[#151418]/10">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "text-[#99120f] bg-[#99120f]/10"
                        : "text-[#151418] hover:text-[#99120f]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#99120f]/10">
                <span className="font-medium text-[#99120f]">
                  {t.languageToggle || "Language"}
                </span>
                <LanguageToggle
                  lang={lang}
                  onChange={(newLang) => {
                    setLanguage(newLang);
                    setIsMenuOpen(false);
                  }}
                  ariaLabel={t.languageToggle || "Change language"}
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
