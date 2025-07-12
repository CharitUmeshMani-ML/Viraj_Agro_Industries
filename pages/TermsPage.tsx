
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsPage = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">{t('terms_title')}</h1>
        <div className="prose lg:prose-lg mx-auto text-gray-700 space-y-6">
          <p>
            {t('terms_intro')}
          </p>
          
          <h2 className="text-2xl font-semibold">{t('terms_section_1_title')}</h2>
          <p>
            {t('terms_section_1_text')}
          </p>
          
          <h2 className="text-2xl font-semibold">{t('terms_section_2_title')}</h2>
          <p>
           {t('terms_section_2_text')}
          </p>

          <h2 className="text-2xl font-semibold">{t('terms_section_3_title')}</h2>
          <p>
            {t('terms_section_3_text')}
          </p>

          <h2 className="text-2xl font-semibold">{t('terms_section_4_title')}</h2>
          <p>
            {t('terms_section_4_text')}
          </p>

          <h2 className="text-2xl font-semibold">{t('terms_section_5_title')}</h2>
          <p>
            {t('terms_section_5_text')}
          </p>

          <h2 className="text-2xl font-semibold">{t('terms_section_6_title')}</h2>
          <p>
            {t('terms_section_6_text')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
