
import React from 'react';
import { Link } from 'react-router-dom';
import { VirajAgroIcon } from './icons/VirajAgroIcon';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <VirajAgroIcon className="h-10 w-10" />
              <span className="text-xl font-bold">{t('company_name')}</span>
            </Link>
            <p className="text-gray-400">{t('footer_tagline')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">{t('footer_products')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('footer_all_products')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('footer_seeds')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('footer_fertilizers')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">{t('footer_pesticides')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">{t('footer_company')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('footer_about_us')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">{t('footer_blog')}</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">{t('footer_careers')}</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">{t('footer_terms')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">{t('footer_contact')}</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
                <li><p>123 Farm Road, Greenfield</p></li>
                <li><p>contact@virajagroservices.com</p></li>
                <li><p>(123) 456-7890</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>{t('footer_copyright', { year: new Date().getFullYear().toString() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
