import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BikeDetailPage from './pages/BikeDetailPage';
import CartPage from './pages/CartPage';
import NavigationBar from './components/layout/NavigationBar';
import Footer from './components/layout/Footer';
import { CartProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bike/:id" element={<BikeDetailPage />} />
            <Route path="/cart" element={<CartPage />} /> 
            {/* Puedes agregar más rutas aquí, como una página de "Checkout" */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
