
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { VirajAgroIcon } from './icons/VirajAgroIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import LanguageSwitcher from './LanguageSwitcher';
import { BasketIcon } from './icons/BasketIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { isAuthenticated, logout, currentUser } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary-dark text-white'
        : 'text-dark-text hover:bg-green-100'
    }`;
    
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary text-white'
        : 'text-dark-text hover:bg-green-100'
    }`;
  
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const CartIconWithBadge = () => (
    <NavLink to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
      <BasketIcon className="h-7 w-7" />
      {totalItemsInCart > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
          {totalItemsInCart}
        </span>
      )}
    </NavLink>
  );

  const AuthNav = () => (
    <div className="flex items-center space-x-2">
      {isAuthenticated && currentUser ? (
        <>
           <NavLink to="/dashboard" className={navLinkClass}>{t('dashboard')}</NavLink>
           <span className="text-gray-600 hidden lg:block">{t('welcome_message_short', { name: currentUser.name.split(' ')[0] })}</span>
           <button onClick={handleLogout} className="bg-secondary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-secondary-dark transition-colors duration-300">
            {t('logout')}
           </button>
        </>
      ) : (
        <NavLink to="/login" className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
          {t('login')}
        </NavLink>
      )}
    </div>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <VirajAgroIcon className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">{t('company_name')}</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClass}>{t('nav_home')}</NavLink>
            <NavLink to="/products" className={navLinkClass}>{t('nav_products')}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t('nav_about')}</NavLink>
            <NavLink to="/blog" className={navLinkClass}>{t('nav_blog')}</NavLink>
            <NavLink to="/careers" className={navLinkClass}>{t('nav_careers')}</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <LanguageSwitcher />
             <CartIconWithBadge />
             <div className="border-l border-gray-200 h-8 mx-2"></div>
             <AuthNav />
          </div>

          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <CartIconWithBadge />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ml-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</NavLink>
            <NavLink to="/products" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('nav_products')}</NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</NavLink>
            <NavLink to="/blog" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('nav_blog')}</NavLink>
            <NavLink to="/careers" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('nav_careers')}</NavLink>
            <div className="border-t border-gray-200 my-2"></div>
             {isAuthenticated ? (
                <>
                  <NavLink to="/dashboard" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>{t('dashboard')}</NavLink>
                  <button onClick={handleLogout} className="block w-full text-left mt-2 bg-secondary text-white py-2 px-4 rounded-md font-medium hover:bg-secondary-dark transition-colors duration-300">
                    {t('logout')}
                  </button>
                </>
             ) : (
                <NavLink to="/login" className="block w-full text-left mt-2 bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {t('login')}
                </NavLink>
             )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
