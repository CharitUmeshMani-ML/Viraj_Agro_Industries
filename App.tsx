import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import LoginPage from './pages/LoginPage';
import TermsPage from './pages/TermsPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen bg-light-bg font-sans text-dark-text">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cart" element={<CartPage />} />

                  <Route 
                    path="/dashboard" 
                    element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
                  />
                  <Route 
                    path="/checkout" 
                    element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} 
                  />
                  <Route 
                    path="/order-confirmation/:orderId" 
                    element={<ProtectedRoute><OrderConfirmationPage /></ProtectedRoute>} 
                  />
                   <Route 
                    path="/orders" 
                    element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} 
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;