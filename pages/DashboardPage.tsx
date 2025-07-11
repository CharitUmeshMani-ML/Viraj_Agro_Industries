import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/common/Card';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();

  if (!currentUser) {
    return null; // Or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary">
          {t('dashboard_title')}
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          {t('welcome_message', { name: currentUser.name })}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-dark-text">{t('dashboard_my_orders')}</h2>
            <p className="text-gray-600 mt-2">{t('dashboard_my_orders_text')}</p>
            <Link 
              to="/orders"
              className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
              {t('view_orders')}
            </Link>
          </div>
        </Card>
        
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-dark-text">{t('dashboard_my_profile')}</h2>
            <p className="text-gray-600 mt-2">{t('dashboard_my_profile_text')}</p>
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
               {t('edit_profile')}
            </button>
          </div>
        </Card>
        
        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-dark-text">{t('dashboard_address_book')}</h2>
            <p className="text-gray-600 mt-2">{t('dashboard_address_book_text')}</p>
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
              {t('manage_addresses')}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;