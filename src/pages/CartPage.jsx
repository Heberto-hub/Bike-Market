import React, { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
import ShoppingCart from '../components/cart/ShoppingCart';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const { cart, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-page">
      <h2>Tu Carrito de Compras</h2>
      <ShoppingCart />
      {cart.length > 0 && (
        <div className="cart-checkout">
          <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
          <Link to="/checkout" className="checkout-button">Finalizar Compra</Link>
        </div>
      )}
      {cart.length === 0 && (
        <p>Tu carrito está vacío. <Link to="/">Volver a la tienda</Link>.</p>
      )}
    </div>
  );
}

export default CartPage;