"use client";

import { useTranslation } from "@/i18n/useTranslation";

export function LegalSection() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen py-24 px-4" style={{ backgroundColor: "#FBF5DD" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[#99120f] font-medium mb-8 hover:underline">
          ← {t.legal.back}
        </a>
        <h1 className="text-4xl font-bold text-[#151418] mb-8">{t.legal.title}</h1>
        <div className="space-y-6 text-[#151418]/80 leading-relaxed">
          <p>{t.legal.intro}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.legal.ownerTitle}</h2>
          <p>{t.legal.ownerText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.legal.hostingTitle}</h2>
          <p>{t.legal.hostingText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.legal.intellectualTitle}</h2>
          <p>{t.legal.intellectualText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.legal.liabilityTitle}</h2>
          <p>{t.legal.liabilityText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.legal.lawTitle}</h2>
          <p>{t.legal.lawText}</p>

          <p className="text-sm text-[#151418]/50 mt-12">{t.legal.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
