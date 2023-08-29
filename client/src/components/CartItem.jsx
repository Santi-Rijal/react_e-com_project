import React, { useContext } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

import { Context } from '../context/ContextProvider.js';

const CartItem = ({ cartItem }) => {
  const { cart, updateCart } = useContext(Context);

  const handleQuantityChange = (type) => {
    let newQuantity = cartItem.quantity;
    let newTotal = cartItem.totalPrice;

    if (type === "add") {
      newQuantity += 1;
      newTotal = newQuantity * cartItem.price;
    }
    else if (type === "sub" && newQuantity > 1) {
      newQuantity -= 1;
      newTotal = newQuantity * cartItem.price;
    }
    else {
      return;
    }

    const updatedCart = cart.map(item => {
      if (item.pid === cartItem.pid && item.color === cartItem.color && item.size === cartItem.size) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newTotal
        }
      }
      return item;
    });

    updateCart(updatedCart);
  }

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
        <input type="text" value={cartItem.quantity} readOnly/>
        <AiOutlinePlus onClick={() => handleQuantityChange("add")}/>
      </div>

      <div className="size-price-container">
        <p>Size: {cartItem.size}</p>
        <p>Price: ${cartItem.totalPrice}</p>
      </div>
      <div className="delete-container">
        <RxCross2 title="Delete" onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default CartItem