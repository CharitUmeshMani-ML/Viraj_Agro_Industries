import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from '../types';

import enTranslations from '../lang/locales/en';
import hiTranslations from '../lang/locales/hi';
import teTranslations from '../lang/locales/te';

// Using a generic record type since we load JSON at runtime
type TranslationMessages = Record<string, string>;

const translations: Record<Language, TranslationMessages> = {
  en: enTranslations,
  hi: hiTranslations,
  te: teTranslations,
};


interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
