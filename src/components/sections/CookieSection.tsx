"use client";

import { useTranslation } from "@/i18n/useTranslation";

export function CookieSection() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen py-24 px-4" style={{ backgroundColor: "#FBF5DD" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[#99120f] font-medium mb-8 hover:underline">
          ← {t.cookies.back}
        </a>
        <h1 className="text-4xl font-bold text-[#151418] mb-8">{t.cookies.title}</h1>
        <div className="space-y-6 text-[#151418]/80 leading-relaxed">
          <p>{t.cookies.intro}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.cookies.whatTitle}</h2>
          <p>{t.cookies.whatText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.cookies.typesTitle}</h2>
          <p>{t.cookies.typesText}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t.cookies.typeNecessary}</li>
            <li>{t.cookies.typeAnalytics}</li>
            <li>{t.cookies.typeMarketing}</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.cookies.usedTitle}</h2>
          <p>{t.cookies.usedText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.cookies.controlTitle}</h2>
          <p>{t.cookies.controlText}</p>

          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.cookies.changesTitle}</h2>
          <p>{t.cookies.changesText}</p>

          <p className="text-sm text-[#151418]/50 mt-12">{t.cookies.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
