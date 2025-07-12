import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getOrdersByUserId } from '../data/orderData';
import Card from '../components/common/Card';

const OrdersPage = () => {
  const { currentUser } = useAuth();
  const { t, language } = useLanguage();
  
  const userOrders = currentUser ? getOrdersByUserId(currentUser.id) : [];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">{t('my_orders')}</h1>
      
      {userOrders.length > 0 ? (
        <div className="space-y-6 max-w-4xl mx-auto">
          {userOrders.map(order => (
            <Card key={order.id} className="p-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">{t('order_id')}</p>
                  <p className="font-mono font-semibold text-primary">{order.id}</p>
                </div>
                <div className="text-left sm:text-right mt-4 sm:mt-0">
                  <p className="text-sm text-gray-500">{t('order_date')}</p>
                  <p className="font-medium text-dark-text">{new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map(item => (
                  <div key={`${item.productId}-${item.variantSku}`} className="flex items-center gap-4">
                    <img src={item.imageUrl} alt={item.name[language]} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold">{item.name[language]}</p>
                      <p className="text-sm text-gray-600">{`Qty: ${item.quantity} - ₹${item.price.toFixed(2)}`}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-t pt-4 mt-4">
                 <div>
                    <p className="text-sm text-gray-500">{t('order_status')}</p>
                    <p className="font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block">{order.status}</p>
                 </div>
                 <div className="text-left sm:text-right mt-4 sm:mt-0">
                    <p className="text-sm text-gray-500">{t('order_total_amount')}</p>
                    <p className="text-xl font-bold text-dark-text">₹{order.totalAmount.toFixed(2)}</p>
                 </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700">{t('no_orders_yet')}</h2>
          <p className="mt-2 text-gray-500">{t('products_subtitle')}</p>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
