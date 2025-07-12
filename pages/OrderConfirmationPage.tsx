import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/common/Card';

const OrderConfirmationPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <Card className="max-w-2xl mx-auto p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <svg className="h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">{t('order_confirmation')}</h1>
        <p className="mt-3 text-lg text-gray-700">{t('order_thank_you')}</p>
        <div className="mt-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4">
          <p className="text-md text-gray-600">{t('order_id_is')}</p>
          <p className="text-2xl font-mono font-bold text-dark-text tracking-wider mt-1">{orderId}</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/orders" className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
            {t('view_my_orders')}
          </Link>
          <Link to="/products" className="bg-gray-200 text-dark-text py-3 px-8 rounded-md font-medium hover:bg-gray-300 transition-colors duration-300">
            {t('cart_empty_cta')}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default OrderConfirmationPage;