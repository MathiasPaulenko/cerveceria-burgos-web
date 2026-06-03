"use client";

import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { Logo } from "@/components/icons/Logo";
import { useTranslation } from "@/i18n/useTranslation";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = String(new Date().getFullYear());

  const legalLinks = [
    { label: t.footer.legal, href: "/aviso-legal" },
    { label: t.footer.cookies, href: "/cookies" },
    { label: t.footer.privacy, href: "/privacidad" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040000] text-[#FBF5DD]">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FACB6E]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Top row: Brand + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-16 border-b border-[#FBF5DD]/10">
          <div className="space-y-5 max-w-md">
            <a href="#inicio" className="inline-flex items-center">
              <Logo className="h-12 w-auto" variant="light" />
            </a>
            <p className="text-[#FBF5DD]/60 text-lg leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-[#FBF5DD]/60 hover:text-[#FACB6E] transition-colors">
                <span className="p-2 bg-[#FBF5DD]/5 rounded-lg group-hover:bg-[#FACB6E]/10 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </span>
                Instagram
              </a>
              <a href="https://facebook.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-[#FBF5DD]/60 hover:text-[#FACB6E] transition-colors">
                <span className="p-2 bg-[#FBF5DD]/5 rounded-lg group-hover:bg-[#FACB6E]/10 transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </span>
                Facebook
              </a>
            </div>
          </div>

          <a href="tel:+34625047070"
            className="flex items-center gap-3 px-8 py-4 bg-[#99120f] hover:bg-[#99120f]/90 rounded-2xl transition-all shadow-lg shadow-[#99120f]/20">
            <Phone className="w-5 h-5" />
            <div className="text-left">
              <span className="block text-xs text-[#FBF5DD]/70 uppercase tracking-wide">Reserva por teléfono</span>
              <span className="block text-lg font-semibold">+34 625 047 070</span>
            </div>
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="group p-6 rounded-2xl bg-[#FBF5DD]/[0.03] border border-[#FBF5DD]/10 hover:border-[#FACB6E]/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 bg-[#99120f]/20 rounded-xl text-[#99120f]">
                <MapPin className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FACB6E]">{t.footer.contactTitle}</span>
            </div>
            <p className="text-[#FBF5DD]/80 text-sm leading-relaxed">
              Calle Eugenia de Montijo, 80<br />
              28025 Madrid (Carabanchel)
            </p>
            <a href="https://maps.google.com/?q=Cervecería+Burgos" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-[#99120f] hover:text-[#FACB6E] transition-colors">
              Ver en Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="group p-6 rounded-2xl bg-[#FBF5DD]/[0.03] border border-[#FBF5DD]/10 hover:border-[#FACB6E]/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 bg-[#99120f]/20 rounded-xl text-[#99120f]">
                <Clock className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FACB6E]">{t.footer.hoursLabel}</span>
            </div>
            <p className="text-[#FBF5DD]/80 text-sm leading-relaxed">
              <span className="text-[#FBF5DD] font-medium">Lunes – Sábado</span><br />
              06:00 – 00:00
            </p>
            <p className="text-xs text-[#FBF5DD]/40 mt-2">Cenas y copas</p>
          </div>

          <div className="group p-6 rounded-2xl bg-[#FBF5DD]/[0.03] border border-[#FBF5DD]/10 hover:border-[#FACB6E]/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 bg-[#99120f]/20 rounded-xl text-[#99120f]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FACB6E]">{t.footer.legalTitle}</span>
            </div>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#FBF5DD]/70 hover:text-[#FACB6E] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FBF5DD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#FBF5DD]/30">
            {t.footer.copyright.replace("{year}", year)}
          </p>
          <p className="text-xs text-[#FBF5DD]/20">
            <span dangerouslySetInnerHTML={{
              __html: t.footer.developer.replace("Mathias Paulenko", '<a href="mailto:mathias.paulenko@outlook.com" class="hover:text-[#FBF5DD]/50 transition-colors">Mathias Paulenko</a>')
            }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
