"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
      loadGtagWithConsent(false);
    } else {
      try {
        const parsed = JSON.parse(consent);
        const hasAnalytics = parsed.analytics === true;
        setAnalytics(hasAnalytics);
        loadGtagWithConsent(hasAnalytics);
      } catch {
        setVisible(true);
        loadGtagWithConsent(false);
      }
    }
  }, []);

  const saveConsent = (analyticsChoice: boolean) => {
    localStorage.setItem("cookie_consent", JSON.stringify({ analytics: analyticsChoice, date: new Date().toISOString() }));
    setAnalytics(analyticsChoice);
    setVisible(false);
    updateConsent(analyticsChoice);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-[70] bg-[#151418] text-[#FBF5DD] border-t border-[#FBF5DD]/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {!showPrefs ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-[#FBF5DD]/80 max-w-2xl">
                  {t.cookieBanner.text}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => saveConsent(false)}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-[#FBF5DD]/20 hover:bg-[#FBF5DD]/10 transition-colors"
                  >
                    {t.cookieBanner.reject}
                  </button>
                  <button
                    onClick={() => setShowPrefs(true)}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-[#FBF5DD]/20 hover:bg-[#FBF5DD]/10 transition-colors"
                  >
                    {t.cookieBanner.configure}
                  </button>
                  <button
                    onClick={() => saveConsent(true)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#99120f] hover:bg-[#99120f]/90 transition-colors"
                  >
                    {t.cookieBanner.accept}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{t.cookieBanner.preferences.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#FBF5DD]/5">
                    <span className="text-sm">{t.cookieBanner.preferences.necessary}</span>
                    <span className="text-xs px-2 py-1 bg-[#FACB6E]/20 text-[#FACB6E] rounded-full">{t.cookieBanner.preferences.on || "On"}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#FBF5DD]/5">
                    <span className="text-sm">{t.cookieBanner.preferences.analytics}</span>
                    <button
                      onClick={() => setAnalytics(!analytics)}
                      className={`relative w-11 h-6 rounded-full transition-colors ${analytics ? "bg-[#99120f]" : "bg-[#FBF5DD]/20"}`}
                      aria-label="Toggle analytics"
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${analytics ? "translate-x-5" : ""}`} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => setShowPrefs(false)}
                    className="px-4 py-2 text-sm font-medium rounded-lg border border-[#FBF5DD]/20 hover:bg-[#FBF5DD]/10 transition-colors"
                  >
                    {t.cookieBanner.back || "Back"}
                  </button>
                  <button
                    onClick={() => saveConsent(analytics)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#99120f] hover:bg-[#99120f]/90 transition-colors"
                  >
                    {t.cookieBanner.preferences.save}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function loadGtagWithConsent(analyticsGranted: boolean) {
  if (typeof window === "undefined") return;
  const id = (window as unknown as Record<string, string>).__GA_ID__ || "G-44E9DNWD8P";

  if (!(window as unknown as { gtag?: unknown }).gtag) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500
      });
      gtag('js', new Date());
      gtag('config', '${id}', { anonymize_ip: true });
    `;
    document.head.appendChild(inline);
  }

  if (analyticsGranted) {
    updateConsent(true);
  }
}

function updateConsent(analyticsGranted: boolean) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  gtag('consent', 'update', {
    'analytics_storage': analyticsGranted ? 'granted' : 'denied',
  });
}
