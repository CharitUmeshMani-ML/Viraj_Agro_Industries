import { Order, CartItem, Address } from '../types';

// In-memory array to store orders for the session.
// In a real app, this would be a database.
let mockOrders: Order[] = [];

// Helper function to generate a unique Order ID
const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomPart = Math.random().toString(36).substr(2, 5).toUpperCase();
  return `VAS-${timestamp}-${randomPart}`;
};

interface NewOrderData {
    userId: number;
    items: CartItem[];
    shippingAddress: Address;
    paymentMethod: string;
    subtotal: number;
    shippingFee: number;
    totalAmount: number;
}

export const addOrder = (orderData: NewOrderData): Order => {
  const newOrder: Order = {
    ...orderData,
    id: generateOrderId(),
    orderDate: new Date().toISOString(),
    status: 'Processing',
  };
  mockOrders.push(newOrder);
  // Sort by date descending
  mockOrders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
  return newOrder;
};

export const getOrdersByUserId = (userId: number): Order[] => {
  return mockOrders.filter(order => order.userId === userId);
};

export const getOrderById = (orderId: string): Order | undefined => {
    return mockOrders.find(order => order.id === orderId);
};
