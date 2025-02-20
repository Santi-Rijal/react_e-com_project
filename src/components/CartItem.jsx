import React, { useContext } from "react";

// Icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

// Context
import { Context } from "../context/ContextProvider.js";

// Component representing the "cartItem" in user's cart and it's functions.
const CartItem = ({ cartItem }) => {
  const { cart, updateCart } = useContext(Context);

  // A function used to increase/decrease the qunatity of "cartItem" in cart.
  const handleQuantityChange = (type) => {
    let newQuantity = cartItem.quantity;
    let newTotal = cartItem.totalPrice;

    if (type === "add") {
      newQuantity += 1;
      newTotal = newQuantity * cartItem.price;
    } else if (type === "sub" && newQuantity > 1) {
      newQuantity -= 1;
      newTotal = newQuantity * cartItem.price;
    } else {
      return;
    }

    // A map function is used to iterate over the cart and for each item, if it's the "cartItem", update it's properties.
    const updatedCart = cart.map((item) => {
      if (matchItem(item)) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newTotal,
        };
      }
      return item;
    });

    updateCart(updatedCart); // Save the updated cart as the new cart.
  };

  // A function used delete "cartItem" from cart.
  const handleDelete = () => {
    // Using map function, find the "cartItem" in cart and replace it null. Then on the new array containing null,
    // useing filter, return a new array without any null values.
    const updatedCart = cart
      .map((item) => {
        if (matchItem(item)) {
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);

    updateCart(updatedCart); // Save the updated cart as the new cart.
  };

  // A function used to determine if the passed "item" is the "cartItem".
  const matchItem = (item) => {
    return (
      item.pid === cartItem.pid &&
      item.color === cartItem.color &&
      item.size === cartItem.size
    );
  };

  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={cartItem.thumb_image} alt={cartItem.title} />
      </div>

      <div className="info-container">
        <p>{cartItem.title}</p>

        <div className="secondary-info">
          <p>Color: {cartItem.color}</p>
          <p>Size: {cartItem.size}</p>
          <p>Price: ${cartItem.totalPrice}</p>
        </div>

        <div className="quantity-container">
          <AiOutlineMinus onClick={() => handleQuantityChange("sub")} />
          <input type="text" value={cartItem.quantity} readOnly />
          <AiOutlinePlus onClick={() => handleQuantityChange("add")} />
        </div>
      </div>

      <div className="delete-container">
        <RxCross2 title="Delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default CartItem;
