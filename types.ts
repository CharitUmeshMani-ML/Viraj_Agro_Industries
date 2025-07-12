export type Language = 'en' | 'hi' | 'te';

export interface LocalizedString {
  en: string;
  hi: string;
  te: string;
}

export enum ProductCategory {
  Seeds = 'Seeds',
  Fertilizers = 'Fertilizers',
  Pesticides = 'Pesticides',
  Organic = 'Organic Products',
  Implements = 'Farm Implements',
  Sprays = 'Sprays',
}

export interface ProductDetail {
  label: LocalizedString;
  value: LocalizedString;
}

export interface ProductVariant {
  sku: string;
  label: LocalizedString;
  price: number;
}

export interface Product {
  id: number;
  name: LocalizedString;
  category: ProductCategory;
  price: number; // Base price, usually for the default/smallest variant
  description: LocalizedString;
  imageUrl: string;
  details?: ProductDetail[];
  variants?: ProductVariant[];
}

export interface BlogPost {
  id: number;
  title: LocalizedString;
  author: string;
  date: string;
  excerpt: LocalizedString;
  content: string; // Full content can also be localized if needed
  imageUrl: string;
}

export interface JobOpening {
  id: number;
  title: LocalizedString;
  location: string;
  type: string; 
  description: LocalizedString;
}

export interface Address {
  id: number;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
}

export interface User {
  id: number;
  email: string;
  name: string;
  addresses: Address[];
}

export interface CartItem {
  productId: number;
  variantSku: string | null;
  quantity: number;
  price: number;
  name: LocalizedString;
  imageUrl: string;
  variantLabel: LocalizedString | null;
}

export interface Order {
  id: string;
  userId: number;
  items: CartItem[];
  shippingAddress: Address;
  paymentMethod: string;
  orderDate: string;
  status: 'Processing' | 'Shipped' | 'Delivered';
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
}