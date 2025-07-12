import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { Product } from '../types';
import Card from '../components/common/Card';
import { useLanguage } from '../contexts/LanguageContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { language, t } = useLanguage();
  const hasVariants = product.variants && product.variants.length > 1;

  return (
    <Link to={`/products/${product.id}`} className="block h-full no-underline text-current">
      <Card className="flex flex-col h-full">
        <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name[language]} />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{product.name[language]}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description[language]}</p>
          <div className="flex justify-between items-center mt-auto">
             <span className="text-primary font-bold text-xl">
              {hasVariants && <span className="text-sm font-normal text-gray-600 mr-1">{t('price_from')}</span>}
              ₹{product.price.toFixed(0)}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{product.category}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};


const HomePage = () => {
  const { t } = useLanguage();
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/202409/66f2b7a235857-indian-farmer-monsoon-kharif-055933789-16x9.jpg?size=948:533')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">{t('hero_title')}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{t('hero_subtitle')}</p>
            <Link to="/products" className="bg-secondary text-white py-3 px-8 rounded-md font-bold text-lg hover:bg-secondary-dark transition-transform duration-300 transform hover:scale-105">
              {t('hero_cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('featured_products')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/products" className="bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
              {t('view_all_products')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <img src="https://picsum.photos/seed/mission/600/400" alt="Farmer in a field" className="rounded-lg shadow-xl"/>
           </div>
           <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{t('mission_vision_title')}</h2>
              <p className="text-gray-600 mb-4 text-lg">
                {t('mission_vision_text')}
              </p>
              <Link to="/about" className="text-primary font-semibold hover:underline">{t('learn_more')}</Link>
           </div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
