import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { Product, ProductCategory } from '../types';
import Card from '../components/common/Card';
import { useLanguage } from '../contexts/LanguageContext';

const categoryTranslationKeys: Record<ProductCategory, string> = {
  [ProductCategory.Seeds]: 'category_seeds',
  [ProductCategory.Fertilizers]: 'category_fertilizers',
  [ProductCategory.Pesticides]: 'category_pesticides',
  [ProductCategory.Organic]: 'category_organic',
  [ProductCategory.Implements]: 'category_implements',
  [ProductCategory.Sprays]: 'category_sprays',
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { language, t } = useLanguage();
  const hasVariants = product.variants && product.variants.length > 1;

  return (
    <Link to={`/products/${product.id}`} className="block h-full no-underline text-current">
      <Card className="flex flex-col h-full group">
        <div className="overflow-hidden">
          <img className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" src={product.imageUrl} alt={product.name[language]} />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{t(categoryTranslationKeys[product.category])}</span>
          <h3 className="text-xl font-semibold mb-2 text-dark-text group-hover:text-primary transition-colors">{product.name[language]}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description[language]}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-primary font-bold text-2xl">
              {hasVariants && <span className="text-sm font-normal text-gray-600 mr-1">{t('price_from')}</span>}
              ₹{product.price.toFixed(0)}
            </span>
            <div className="bg-primary text-white py-2 px-4 rounded-md font-medium group-hover:bg-primary-dark transition-colors duration-300">
              {t('view_details')}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};


interface CategoryTheme {
  bg: string;
  headerText: string;
  subHeaderText: string;
  buttonActiveBg: string;
  buttonInactiveBg: string;
  buttonText: string;
  buttonInactiveHoverBg: string;
}

const themeConfig: Record<ProductCategory | 'all', CategoryTheme> = {
  all: {
    bg: 'bg-light-bg',
    headerText: 'text-dark-text',
    subHeaderText: 'text-gray-600',
    buttonActiveBg: 'bg-primary',
    buttonInactiveBg: 'bg-white',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-gray-200',
  },
  [ProductCategory.Seeds]: {
    bg: 'bg-amber-50',
    headerText: 'text-amber-900',
    subHeaderText: 'text-amber-700',
    buttonActiveBg: 'bg-amber-600',
    buttonInactiveBg: 'bg-amber-100',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-amber-200',
  },
  [ProductCategory.Fertilizers]: {
    bg: 'bg-blue-50',
    headerText: 'text-blue-900',
    subHeaderText: 'text-blue-700',
    buttonActiveBg: 'bg-blue-600',
    buttonInactiveBg: 'bg-blue-100',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-blue-200',
  },
  [ProductCategory.Pesticides]: {
    bg: 'bg-red-50',
    headerText: 'text-red-900',
    subHeaderText: 'text-red-700',
    buttonActiveBg: 'bg-red-600',
    buttonInactiveBg: 'bg-red-100',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-red-200',
  },
  [ProductCategory.Organic]: {
    bg: 'bg-green-50',
    headerText: 'text-green-900',
    subHeaderText: 'text-green-700',
    buttonActiveBg: 'bg-green-600',
    buttonInactiveBg: 'bg-green-100',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-green-200',
  },
  [ProductCategory.Implements]: {
    bg: 'bg-slate-100',
    headerText: 'text-slate-800',
    subHeaderText: 'text-slate-600',
    buttonActiveBg: 'bg-slate-600',
    buttonInactiveBg: 'bg-slate-200',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-slate-300',
  },
  [ProductCategory.Sprays]: {
    bg: 'bg-cyan-50',
    headerText: 'text-cyan-900',
    subHeaderText: 'text-cyan-700',
    buttonActiveBg: 'bg-cyan-500',
    buttonInactiveBg: 'bg-cyan-100',
    buttonText: 'text-white',
    buttonInactiveHoverBg: 'hover:bg-cyan-200',
  },
};


const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const { t } = useLanguage();

  const categories = ['all', ...Object.values(ProductCategory)];
  const currentTheme = themeConfig[selectedCategory];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return mockProducts;
    }
    return mockProducts.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={`py-12 transition-colors duration-500 ${currentTheme.bg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold transition-colors duration-500 ${currentTheme.headerText}`}>{t('products_title')}</h1>
          <p className={`text-lg mt-2 transition-colors duration-500 ${currentTheme.subHeaderText}`}>{t('products_subtitle')}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map(category => {
              const isActive = selectedCategory === category;
              const themeForButton = themeConfig[category] || themeConfig.all;
              const buttonClasses = isActive
                ? `${currentTheme.buttonActiveBg} ${currentTheme.buttonText} shadow-lg scale-105`
                : `${themeForButton.buttonInactiveBg} ${themeForButton.headerText} ${themeForButton.buttonInactiveHoverBg} border border-transparent`;

              const categoryName = category === 'all'
                ? t('all_products')
                : t(categoryTranslationKeys[category as ProductCategory]);

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as ProductCategory | 'all')}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 transform ${buttonClasses}`}
                >
                  {categoryName}
                </button>
              );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
