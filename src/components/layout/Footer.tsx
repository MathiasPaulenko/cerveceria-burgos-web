"use client";

import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { Logo } from "@/components/icons/Logo";
import { useTranslation } from "@/i18n/useTranslation";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = String(new Date().getFullYear());

  const legalLinks = [
    { label: t.footer.legal, href: "/aviso-legal" },
    { label: t.footer.cookies, href: "/cookies" },
    { label: t.footer.privacy, href: "/privacidad" },
  ];

  return (
    <footer className="bg-[#040000] text-[#FBF5DD] border-t border-[#FBF5DD]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-5">
            <a href="#inicio" className="inline-flex items-center">
              <Logo className="h-10 w-auto" variant="light" />
            </a>
            <p className="text-[#FBF5DD]/60 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-2">
              <a href="https://instagram.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-[#FBF5DD]/5 rounded-lg hover:bg-[#99120f] transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-[#FBF5DD]/5 rounded-lg hover:bg-[#99120f] transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/34625047070" target="_blank" rel="noopener noreferrer"
                className="p-2.5 bg-[#FBF5DD]/5 rounded-lg hover:bg-[#99120f] transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1.001-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FACB6E]">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-[#FBF5DD]/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#99120f]" />
                <span>Calle Eugenia de Montijo, 80<br />28025 Madrid</span>
              </li>
              <li>
                <a href="tel:+34625047070" className="flex items-center gap-2.5 text-sm text-[#FBF5DD]/70 hover:text-[#FBF5DD] transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-[#99120f]" />
                  <span>+34 625 047 070</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#FBF5DD]/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#99120f]" />
                <span>Lunes – Sábado<br />06:00 – 00:00</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FACB6E]">
              {t.footer.legalTitle}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#FBF5DD]/70 hover:text-[#FBF5DD] transition-colors text-sm">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#FBF5DD]/40">
            {t.footer.copyright.replace("{year}", year)}
          </p>
          <p className="text-xs text-[#FBF5DD]/30">
            <span dangerouslySetInnerHTML={{
              __html: t.footer.developer.replace("Mathias Paulenko", '<a href="mailto:mathias.paulenko@outlook.com" class="hover:text-[#FBF5DD]/60 transition-colors">Mathias Paulenko</a>')
            }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
