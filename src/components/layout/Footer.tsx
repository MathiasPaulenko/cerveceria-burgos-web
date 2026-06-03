"use client";

import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { Logo } from "@/components/icons/Logo";
import { useTranslation } from "@/i18n/useTranslation";
import { Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = String(new Date().getFullYear());

  return (
    <footer className="bg-[#151418] text-[#FBF5DD] border-t border-[#FBF5DD]/10">
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        {/* Logo */}
        <a href="#inicio" className="inline-block mb-4">
          <Logo className="h-8 w-auto mx-auto" variant="light" />
        </a>

        {/* Tagline */}
        <p className="text-sm text-[#FBF5DD]/50 mb-6">
          {t.footer.tagline}
        </p>

        {/* Phone CTA */}
        <a href="tel:+34625047070"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#99120f] hover:bg-[#99120f]/90 rounded-full text-sm font-medium transition-colors mb-8">
          <Phone className="w-4 h-4" />
          +34 625 047 070
        </a>

        {/* 3 columns centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FACB6E] mb-3">
              {t.footer.contactTitle}
            </h4>
            <p className="text-[#FBF5DD]/60 leading-relaxed mb-4">
              Calle Eugenia de Montijo, 80<br />
              28025 Madrid
            </p>
            <div className="flex items-center justify-center gap-2">
              <a href="https://instagram.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="p-1.5 bg-[#FBF5DD]/5 rounded-md hover:bg-[#99120f] transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com/cerveceriaburgos" target="_blank" rel="noopener noreferrer"
                className="p-1.5 bg-[#FBF5DD]/5 rounded-md hover:bg-[#99120f] transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://wa.me/34625047070" target="_blank" rel="noopener noreferrer"
                className="p-1.5 bg-[#FBF5DD]/5 rounded-md hover:bg-[#99120f] transition-colors" aria-label="WhatsApp">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1.001-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FACB6E] mb-3">
              {t.footer.hoursLabel}
            </h4>
            <p className="text-[#FBF5DD]/60 leading-relaxed">
              <span className="text-[#FBF5DD]">Lun – Sáb</span><br />
              06:00 – 00:00
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FACB6E] mb-3">
              {t.footer.legalTitle}
            </h4>
            <div className="flex flex-col gap-1.5">
              <a href="/aviso-legal" className="text-[#FBF5DD]/60 hover:text-[#FBF5DD] transition-colors">
                {t.footer.legal}
              </a>
              <a href="/cookies" className="text-[#FBF5DD]/60 hover:text-[#FBF5DD] transition-colors">
                {t.footer.cookies}
              </a>
              <a href="/privacidad" className="text-[#FBF5DD]/60 hover:text-[#FBF5DD] transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-[#FBF5DD]/25">
          {t.footer.copyright.replace("{year}", year)}
          <span className="mx-2">·</span>
          <span dangerouslySetInnerHTML={{
            __html: t.footer.developer.replace("Mathias Paulenko", '<a href="mailto:mathias.paulenko@outlook.com" class="hover:text-[#FBF5DD]/40 transition-colors">Mathias Paulenko</a>')
          }} />
        </p>
      </div>
    </footer>
  );
}
