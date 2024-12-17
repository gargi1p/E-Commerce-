import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div id="cart" className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li className="cart-item" key={index}>
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price} rs</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
