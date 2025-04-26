import React, { useContext } from 'react';
import { CartContext } from "../../contexts/CartContext";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div className="shopping-cart">
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-summary">
        <button onClick={clearCart} className="clear-cart-button">
          Vaciar Carrito
        </button>
        <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
        <Link to="/checkout" className="checkout-button">
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;