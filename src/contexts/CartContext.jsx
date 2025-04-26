import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (bike) => {
    const existingItem = cart.find(item => item.id === bike.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === bike.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...bike, quantity: 1 }]);
    }
  };

  const removeFromCart = (bikeId) => {
    setCart(cart.filter(item => item.id !== bikeId));
  };

  const updateQuantity = (bikeId, quantity) => {
    setCart(cart.map(item =>
      item.id === bikeId ? { ...item, quantity: parseInt(quantity, 10) } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};