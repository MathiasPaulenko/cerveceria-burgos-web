"use client";

import { useTranslation } from "@/i18n/useTranslation";

export function PrivacySection() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen py-24 px-4" style={{ backgroundColor: "#FBF5DD" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-[#99120f] font-medium mb-8 hover:underline">
          ← {t.privacy.back}
        </a>
        <h1 className="text-4xl font-bold text-[#151418] mb-8">{t.privacy.title}</h1>
        <div className="space-y-6 text-[#151418]/80 leading-relaxed">
          <p>{t.privacy.intro}</p>
          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.privacy.infoTitle}</h2>
          <p>{t.privacy.infoText}</p>
          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.privacy.contactTitle}</h2>
          <p>{t.privacy.contactText}</p>
          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.privacy.thirdPartyTitle}</h2>
          <p>{t.privacy.thirdPartyText}</p>
          <h2 className="text-xl font-semibold text-[#151418] mt-8">{t.privacy.changesTitle}</h2>
          <p>{t.privacy.changesText}</p>
          <p className="text-sm text-[#151418]/50 mt-12">{t.privacy.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
