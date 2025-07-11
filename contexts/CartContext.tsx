import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number, variantSku: string | null) => void;
  updateQuantity: (productId: number, variantSku: string | null, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const getInitialCart = (): CartItem[] => {
  try {
    const item = window.localStorage.getItem('viraj_agro_cart');
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error("Error reading cart from localStorage", error);
    return [];
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    try {
      window.localStorage.setItem('viraj_agro_cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Error writing cart to localStorage", error);
    }
  }, [cart]);

  const addToCart = (itemToAdd: CartItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.productId === itemToAdd.productId && item.variantSku === itemToAdd.variantSku
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        updatedCart[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity + itemToAdd.quantity };
        return updatedCart;
      } else {
        return [...prevCart, itemToAdd];
      }
    });
  };

  const removeFromCart = (productId: number, variantSku: string | null) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.productId === productId && item.variantSku === variantSku))
    );
  };
  
  const updateQuantity = (productId: number, variantSku: string | null, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantSku);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item =>
        item.productId === productId && item.variantSku === variantSku
          ? { ...item, quantity }
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};