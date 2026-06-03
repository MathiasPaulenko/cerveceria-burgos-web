"use client";

import { useTranslation } from "@/i18n/useTranslation";

export function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FBF5DD" }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#99120f] mb-4">404</h1>
        <p className="text-xl text-[#151418] mb-8">{t.notFound.title}</p>
        <p className="text-[#A06029] mb-8">{t.notFound.subtitle}</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#99120f] text-[#FBF5DD] font-medium rounded-xl hover:bg-[#99120f]/90 transition-colors"
        >
          {t.notFound.back}
        </a>
      </div>
    </section>
  );
}
