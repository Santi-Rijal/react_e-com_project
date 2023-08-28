import React, { useEffect, useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const CartItem = ({ cartItem, onCartLengthChange }) => {
  const [q, setQ] = useState(cartItem.quantity);
  const [totalPrice, setTotalPrice] = useState(cartItem.totalPrice);

  const handleQuantityChange = (type) => {
    if (type === "add") {
      const newQuantity = q + 1;
      setTotalPrice(newQuantity * cartItem.price);
      setQ(newQuantity);
    }
    else if (type === "sub" && q > 1) {
      const newQuantity = q - 1;
      setTotalPrice(newQuantity * cartItem.price);
      setQ(newQuantity);
    }
  }

  useEffect(() => {
    const cart = JSON.parse(window.localStorage.getItem("cart-items")) || [];

    const updatedCart = cart.map(item => {
      if (item.pid === cartItem.pid && item.color === cartItem.color) {
        return {
          ...item,
          quantity: q,
          totalPrice: totalPrice
        }
      }
      return item;
    });

    window.localStorage.setItem("cart-items", JSON.stringify(updatedCart));
  }, [q, cartItem, totalPrice]);

  const handleDelete = () => {
    const cart = JSON.parse(window.localStorage.getItem("cart-items")) || [];

    const updatedCart = cart.map(item => {
      if (item.pid === cartItem.pid && item.color === cartItem.color && item.size === cartItem.size) {
        return null;
      }
      return item;
    }).filter(item => item !== null);

    window.localStorage.setItem("cart-items", JSON.stringify(updatedCart));
    onCartLengthChange();
  }

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

      <div className="size-price-container">
        <p>Size: {cartItem.size}</p>
        <p>Price: ${totalPrice}</p>
      </div>
      <div className="delete-container">
        <RxCross2 title="Delete" onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default CartItem