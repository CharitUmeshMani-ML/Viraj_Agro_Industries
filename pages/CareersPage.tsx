
import React from 'react';
import { mockJobOpenings } from '../data/mockData';
import Card from '../components/common/Card';
import { useLanguage } from '../contexts/LanguageContext';

const CareersPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">{t('careers_title')}</h1>
        <p className="text-lg text-gray-600 mt-2">{t('careers_subtitle')}</p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {mockJobOpenings.map(job => (
          <Card key={job.id} className="p-0">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <div>
                      <h2 className="text-2xl font-semibold text-primary">{job.title[language]}</h2>
                      <p className="text-md text-gray-600 mt-1">
                          {job.location} &bull; <span className="font-medium">{job.type}</span>
                      </p>
                  </div>
                  <button className="mt-4 sm:mt-0 bg-secondary text-white py-2 px-6 rounded-md font-medium hover:bg-secondary-dark transition-colors duration-300 self-start sm:self-center">
                    {t('apply_now')}
                  </button>
              </div>
              <p className="text-gray-700 mt-4">{job.description[language]}</p>
            </div>
          </Card>
        ))}
        {mockJobOpenings.length === 0 && (
            <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-700">{t('careers_no_openings')}</h2>
                <p className="mt-2 text-gray-500">{t('careers_check_back')}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
