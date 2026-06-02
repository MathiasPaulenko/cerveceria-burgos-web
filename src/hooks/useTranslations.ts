import { useState, useCallback } from 'react';
import { translations, type Lang, type Translations } from '@/i18n/ui';

export function useTranslations() {
  const [lang, setLang] = useState<Lang>('es');
  
  const t = useCallback(<K extends keyof Translations>(
    key: K
  ): Translations[K] => {
    return translations[lang][key];
  }, [lang]);
  
  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  }, []);
  
  return { lang, t, toggleLang, translations: translations[lang] };
}
