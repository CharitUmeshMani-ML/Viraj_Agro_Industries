import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language } from '../types';

// Using a generic record type since we load JSON at runtime
type TranslationMessages = Record<string, string>;

const defaultTranslations: Record<Language, TranslationMessages> = {
  en: {},
  hi: {},
  te: {},
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState(defaultTranslations);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        // Fetch JSON files using a compatible, standard browser API.
        // Corrected paths from `i18n` to `lang`.
        const [enRes, hiRes, teRes] = await Promise.all([
          fetch('./lang/locales/en.json'),
          fetch('./lang/locales/hi.json'),
          fetch('./lang/locales/te.json'),
        ]);

        if (!enRes.ok || !hiRes.ok || !teRes.ok) {
            throw new Error('Failed to fetch translation files');
        }

        const en = await enRes.json();
        const hi = await hiRes.json();
        const te = await teRes.json();

        setTranslations({ en, hi, te });
      } catch (error) {
        console.error("Failed to load translations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  const t = (key: string, replacements?: Record<string, string>): string => {
    // During load, or if a key is missing, return the key itself.
    // This provides a graceful fallback and avoids errors.
    let translation: string = translations[language]?.[key] || translations['en']?.[key] || key;
    
    if (replacements && typeof translation === 'string') {
        Object.keys(replacements).forEach(placeholder => {
            translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
        });
    }

    return translation;
  };

  // Do not render children until translations are loaded to prevent FOUC
  if (isLoading) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
