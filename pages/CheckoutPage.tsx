import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { addOrder } from '../data/orderData';
import { Address } from '../types';
import Card from '../components/common/Card';

const CheckoutPage = () => {
  const { currentUser } = useAuth();
  const { cart, clearCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const [selectedAddress, setSelectedAddress] = useState<Address | null>(
    currentUser?.addresses.find(a => a.isDefault) || currentUser?.addresses[0] || null
  );
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 50;
  const totalAmount = subtotal + shippingFee;

  const handlePlaceOrder = () => {
    if (!currentUser || !selectedAddress) return;

    const newOrder = {
      userId: currentUser.id,
      items: cart,
      shippingAddress: selectedAddress,
      paymentMethod,
      subtotal,
      shippingFee,
      totalAmount,
    };
    
    const createdOrder = addOrder(newOrder);
    
    clearCart();
    navigate(`/order-confirmation/${createdOrder.id}`);
  };

  if (cart.length === 0) {
    navigate('/products');
    return null;
  }

  return (
    <div className="bg-light-bg py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">{t('checkout')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-3 space-y-8">
            {/* Shipping Address */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">{t('shipping_address')}</h2>
              <div className="space-y-4">
                {currentUser?.addresses.map(address => (
                  <div 
                    key={address.id}
                    onClick={() => setSelectedAddress(address)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedAddress?.id === address.id ? 'border-primary ring-2 ring-primary' : 'border-gray-300'}`}
                  >
                    <p className="font-semibold">{`${address.line1}${address.line2 ? `, ${address.line2}` : ''}`}</p>
                    <p className="text-gray-600">{`${address.city}, ${address.state} - ${address.pincode}`}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">{t('payment_method')}</h2>
              <div className="space-y-4">
                <div onClick={() => setPaymentMethod('cod')} className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === 'cod' ? 'border-primary ring-2 ring-primary' : 'border-gray-300'}`}>
                  <p className="font-semibold">{t('cod')}</p>
                </div>
                 <div onClick={() => setPaymentMethod('card')} className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'border-primary ring-2 ring-primary' : 'border-gray-300'}`}>
                  <p className="font-semibold">{t('credit_card')}</p>
                </div>
                 <div onClick={() => setPaymentMethod('upi')} className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === 'upi' ? 'border-primary ring-2 ring-primary' : 'border-gray-300'}`}>
                  <p className="font-semibold">{t('upi')}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <Card className="p-6 sticky top-28">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">{t('order_summary')}</h2>
              <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                {cart.map(item => (
                  <div key={`${item.productId}-${item.variantSku}`} className="flex justify-between items-center text-sm">
                    <div>
                      <p className="font-semibold">{item.name[language]}</p>
                      <p className="text-gray-500">{`Qty: ${item.quantity}`}</p>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-md">
                  <span>{t('subtotal')}</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-md">
                  <span>{t('shipping')}</span>
                  <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between text-xl font-bold">
                <span>{t('grand_total')}</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <button 
                onClick={handlePlaceOrder}
                disabled={!selectedAddress}
                className="w-full mt-6 bg-secondary text-white py-3 px-6 rounded-md font-bold text-lg hover:bg-secondary-dark transition-transform duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {t('place_order')}
              </button>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
