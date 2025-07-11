import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon } from './icons/GlobeIcon';
import type { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; name: string; short: string }[] = [
    { code: 'en', name: 'English', short: 'EN' },
    { code: 'hi', name: 'हिंदी', short: 'HI' },
    { code: 'te', name: 'తెలుగు', short: 'TE' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };
  
  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative inline-block text-left" ref={wrapperRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <GlobeIcon className="h-5 w-5 mr-2 text-gray-500" />
          {currentLang?.short}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`${
                  language === lang.code ? 'font-bold bg-gray-100 text-gray-900' : 'text-gray-700'
                } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
