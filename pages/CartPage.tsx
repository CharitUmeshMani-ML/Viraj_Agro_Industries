import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import Card from '../components/common/Card';
import { CartItem } from '../types';

const QuantitySelector: React.FC<{ item: CartItem }> = ({ item }) => {
  const { updateQuantity } = useCart();
  return (
    <div className="flex items-center border border-gray-300 rounded-md max-w-min">
      <button 
        onClick={() => updateQuantity(item.productId, item.variantSku, item.quantity - 1)}
        className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="w-10 text-center text-dark-text font-medium">{item.quantity}</span>
      <button 
        onClick={() => updateQuantity(item.productId, item.variantSku, item.quantity + 1)}
        className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const { t, language } = useLanguage();
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 50 : 0; // Example fixed shipping fee
  const grandTotal = subtotal + shippingFee;
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-dark-text">{t('shopping_cart')}</h1>
        <p className="mt-4 text-xl text-gray-600">{t('cart_empty')}</p>
        <Link to="/products" className="mt-8 inline-block bg-primary text-white py-3 px-8 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300">
          {t('cart_empty_cta')}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">{t('shopping_cart')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map(item => (
              <Card key={`${item.productId}-${item.variantSku}`} className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src={item.imageUrl} alt={item.name[language]} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-dark-text">{item.name[language]}</h2>
                  {item.variantLabel && <p className="text-sm text-gray-500">{item.variantLabel[language]}</p>}
                  <p className="text-md font-bold text-primary sm:hidden mt-2">₹{item.price.toFixed(0)}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
                    <p className="text-md font-bold text-primary hidden sm:block">₹{item.price.toFixed(0)}</p>
                    <QuantitySelector item={item} />
                    <p className="text-lg font-bold text-dark-text">₹{(item.price * item.quantity).toFixed(0)}</p>
                    <button onClick={() => removeFromCart(item.productId, item.variantSku)} className="text-red-500 hover:text-red-700 font-semibold text-sm self-start sm:self-center">
                    {t('cart_remove')}
                    </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-28">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">{t('order_summary')}</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span>{t('subtotal')}</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>{t('shipping')}</span>
                  <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between text-xl font-bold">
                <span>{t('grand_total')}</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button className="w-full mt-6 bg-secondary text-white py-3 px-6 rounded-md font-bold text-lg hover:bg-secondary-dark transition-transform duration-300 transform hover:scale-105">
                  {t('checkout_cta')}
                </button>
              </Link>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;