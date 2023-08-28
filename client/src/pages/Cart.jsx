import React from 'react'
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = JSON.parse(window.localStorage.getItem("cart-items")) || [];

  return (
    <div className="cart-page-container">
      <div className="cart-items-container">
        {cart.map(cartItem => (
          <CartItem key={cartItem.color} cartItem={cartItem}/>
        ))}
      </div>
    </div>
  )
}

export default Cart