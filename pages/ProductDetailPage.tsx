import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { ProductCategory, ProductVariant } from '../types';

const categoryTranslationKeys: Record<ProductCategory, string> = {
    [ProductCategory.Seeds]: 'category_seeds',
    [ProductCategory.Fertilizers]: 'category_fertilizers',
    [ProductCategory.Pesticides]: 'category_pesticides',
    [ProductCategory.Organic]: 'category_organic',
    [ProductCategory.Implements]: 'category_implements',
    [ProductCategory.Sprays]: 'category_sprays',
};

const QuantitySelector: React.FC<{ quantity: number, setQuantity: React.Dispatch<React.SetStateAction<number>> }> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button 
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
        className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="w-12 text-center text-dark-text font-medium" aria-live="polite">{quantity}</span>
      <button 
        onClick={() => setQuantity(q => q + 1)}
        className="px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  
  const product = mockProducts.find(p => p.id === Number(id));
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSku, setSelectedSku] = useState<string | null>(product?.variants?.[0]?.sku ?? null);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">{t('product_not_found')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('product_not_found_text')}</p>
        <Link to="/products" className="mt-8 inline-block bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
          {t('back_to_products')}
        </Link>
      </div>
    );
  }

  const { name, imageUrl, description, category, details, variants } = product;

  const selectedVariant = variants?.find(v => v.sku === selectedSku);
  const displayPrice = selectedVariant?.price ?? product.price;
  
  const handleAddToCart = () => {
    const itemToAdd = {
      productId: product.id,
      variantSku: selectedSku,
      quantity,
      price: displayPrice,
      name: product.name,
      imageUrl: product.imageUrl,
      variantLabel: selectedVariant?.label ?? null
    };
    addToCart(itemToAdd);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };


  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center space-x-2 flex-wrap">
            <li className="flex items-center">
              <Link to="/products" className="text-primary hover:underline">{t('nav_products')}</Link>
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mx-2">/</span>
               <Link to="/products" className="text-primary hover:underline">{t(categoryTranslationKeys[category])}</Link>
            </li>
            <li className="flex items-center">
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-600" aria-current="page">
                {name[language]}
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="flex justify-center items-start">
            <img 
              src={imageUrl} 
              alt={name[language]} 
              className="rounded-lg shadow-xl max-w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="bg-primary-dark text-white text-xs font-bold uppercase px-3 py-1 rounded-full self-start">
              {t(categoryTranslationKeys[category])}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-text mt-4">{name[language]}</h1>
            <p className="text-3xl text-secondary font-bold my-4">₹{displayPrice.toFixed(0)}</p>
            <p className="text-gray-700 leading-relaxed text-base">{description[language]}</p>
            
            {/* Product Variants */}
            {variants && variants.length > 0 && (
              <div className="mt-8">
                <h3 className="text-md font-semibold text-dark-text mb-3">{t('select_option')}</h3>
                <div className="flex flex-wrap gap-3">
                  {variants.map((variant) => {
                    const isSelected = selectedSku === variant.sku;
                    return (
                      <button
                        key={variant.sku}
                        onClick={() => { setSelectedSku(variant.sku); setQuantity(1); }}
                        className={`py-2 px-4 border rounded-md transition-all duration-200 text-sm ${
                          isSelected 
                            ? 'border-primary bg-primary/10 text-primary-dark font-bold shadow-md' 
                            : 'border-gray-300 bg-white hover:border-primary'
                        }`}
                      >
                        <span className="block">{variant.label[language]}</span>
                        <span className="block font-semibold">₹{variant.price.toFixed(0)}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <label htmlFor="quantity" className="font-bold text-dark-text mb-2 block text-sm">{t('quantity')}</label>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className="flex-grow">
                 <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`w-full text-white py-3 px-6 rounded-md font-bold text-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ${
                    isAdded 
                      ? 'bg-green-500'
                      : 'bg-secondary hover:bg-secondary-dark hover:scale-105'
                  }`}
                >
                  {isAdded ? t('cart_added') : `${t('add_to_cart')} - ₹${(displayPrice * quantity).toFixed(0)}`}
                </button>
              </div>
            </div>

            {/* Product Specifications */}
            {details && details.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-dark-text mb-4">{t('product_specifications')}</h2>
                <dl className="space-y-4">
                  {details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 bg-gray-50 p-3 rounded-md">
                      <dt className="text-sm font-medium text-gray-600 col-span-1">{detail.label[language]}</dt>
                      <dd className="text-sm text-gray-900 col-span-2">{detail.value[language]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;