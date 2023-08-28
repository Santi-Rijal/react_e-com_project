import React, { useState } from 'react'
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart-items")) || []);

  const onCartLengthChange = () => {
    setCart(JSON.parse(window.localStorage.getItem("cart-items")));
  }

  return (
    <div className="cart-page-container">
      <div className="cart-items-container">
        {cart.map(cartItem => (
          <CartItem key={cartItem.color + cartItem.size} cartItem={cartItem} onCartLengthChange={onCartLengthChange} />
        ))}
      </div>
    </div>
  )
}

export default Cart