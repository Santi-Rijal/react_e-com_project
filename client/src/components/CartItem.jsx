import React, { useEffect, useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartItem = ({ cartItem }) => {
  const [q, setQ] = useState(cartItem.quantity);

  const handleQuantityChange = (type) => {
    setQ(prevQ => (type === "add" ? prevQ + 1 : prevQ - 1));
  }

  useEffect(() => {
    let cart = JSON.parse(window.localStorage.getItem("cart-items")) || [];

    const updatedCart = cart.map(item => {
      if (item.pid === cartItem.pid && item.color === cartItem.color) {
        return {
          ...item,
          quantity: q
        }
      }
      return item;
    });

    window.localStorage.setItem("cart-items", JSON.stringify(updatedCart));
  }, [q, cartItem]);

  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={cartItem.thumb_image} alt={cartItem.title} />
      </div>

      <div className="name-color-container">
        <p>{cartItem.title}</p>
        <p>Color: {cartItem.color}</p>
      </div>

      <div className="quantity-container">
        <AiOutlineMinus onClick={() => handleQuantityChange("sub")}/>
        <input type="text" value={q} readOnly/>
        <AiOutlinePlus onClick={() => handleQuantityChange("add")}/>
      </div>

      <div className="size-container">
        <p>Size: {cartItem.size}</p>
      </div>
    </div>
  )
}

export default CartItem