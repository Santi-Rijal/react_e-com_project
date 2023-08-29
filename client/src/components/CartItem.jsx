import React, { useContext, useEffect, useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import { Context } from '../context/ContextProvider.js';

const CartItem = ({ cartItem, onQuantityChange }) => {
  const [q, setQ] = useState(cartItem.quantity);
  const [totalPrice, setTotalPrice] = useState(cartItem.totalPrice);

  const { cart, updateCart } = useContext(Context);

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

    updateCart(updatedCart);
    onQuantityChange();
  }, [q, cartItem, totalPrice, onQuantityChange, cart, updateCart]);

  const handleDelete = () => {
    const updatedCart = cart.map(item => {
      if (item.pid === cartItem.pid && item.color === cartItem.color && item.size === cartItem.size) {
        return null;
      }
      return item;
    }).filter(item => item !== null);

    updateCart(updatedCart);
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