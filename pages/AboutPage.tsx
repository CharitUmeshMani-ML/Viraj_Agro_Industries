
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary tracking-tight">{t('about_title')}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">{t('about_subtitle')}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark-text">{t('mission_vision_title')}</h2>
            <p className="text-lg text-gray-700">
              <strong>{t('about_mission')}</strong> {t('about_mission_text')}
            </p>
            <p className="text-lg text-gray-700">
              <strong>{t('about_vision')}</strong> {t('about_vision_text')}
            </p>
          </div>
          <div>
            <img className="rounded-lg shadow-2xl" src="https://picsum.photos/seed/about1/600/500" alt="Lush green field" />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-dark-text">{t('about_facilities_title')}</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-600">
            {t('about_facilities_subtitle')}
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{t('about_facility_1_title')}</h3>
              <p className="mt-2 text-gray-600">{t('about_facility_1_text')}</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{t('about_facility_2_title')}</h3>
              <p className="mt-2 text-gray-600">{t('about_facility_2_text')}</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary">{t('about_facility_3_title')}</h3>
              <p className="mt-2 text-gray-600">{t('about_facility_3_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
