import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartItem.css';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    updateQuantity(item.id, parseInt(event.target.value, 10));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="remove-item-button">
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;