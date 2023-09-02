import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Icons.
import { FaOpencart } from "react-icons/fa";

// Context.
import { Context } from "../context/ContextProvider";

// A page with details for selected item.
const Item = () => {
  const location = useLocation();
  const { itemObj } = location.state || {};
  const [img, setImg] = useState(itemObj.DefaultProductImage || "");
  const [colorName, setColorName] = useState(itemObj.Variants[0].ColorName || "");
  const [sizeName, setSizeName] = useState("");
  const [sizeError, setSizeError] = useState(true);

  const { cart, updateCart } = useContext(Context);

  console.log(itemObj);

  // A function that handles the change of varient for this item.
  const handleColorClick = (img, colorName) => {
    setImg(img);
    setColorName(colorName);
  };

  // A function that handles changes in selected item size.
  const handleSizeChange = (sizeName) => {
    setSizeName(sizeName);
    setSizeError(false);
  };

  // A function that handles adding item to cart.
  const handleAdd = () => {
    // Create a new item obj with following properties.
    const cartItem = {
      pid: itemObj.ProductId,
      title: itemObj.DisplayName,
      thumb_image: img,
      size: sizeName,
      quantity: 1,
      color: colorName,
      price: itemObj.OriginalPrice,
      totalPrice: itemObj.OriginalPrice,
    };

    // Create a reference of the cart.
    let cartRef = cart;

    // Find if this item already exists in cart. If yes return it else undefined.
    const existingCartItem = doesItemAlreadyExists(cartItem);

    // If this unique item exists in cart update the cart by increasing the quantity of this unique item.
    // Else add "cartItem" as a mew item in cart.
    if (existingCartItem) {
      // Use map() to get a new array where the unique item's quantity has increased.
      const updatedCart = cart.map((item) => {
        if (item === existingCartItem) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price,
          };
        }

        return item;
      });

      // Change the cart ref to the updated cart.
      cartRef = updatedCart;
    } else {
      cartRef = [...cart, cartItem];
    }

    updateCart(cartRef); // Update the cart.
  };

  // A function that returns the first instance of "cartItem" else undefined.
  const doesItemAlreadyExists = (cartItem) => {
    return cart.find(
      (item) =>
        item.pid === cartItem.pid &&
        item.thumb_image === cartItem.thumb_image &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );
  };

  // A function to get all aviable sizes of current variant.
  const sizes = () => {
    // Get the current variant.
    const variant = itemObj.Variants.find((variant) => variant.ColorName === colorName)

    // Return all sizes of that variant as buttons.
    return variant.Sizes.map((size) => (
      <button
        className={`size ${sizeName === size.SizeName ? "clicked" : ""}`}
        onClick={() => handleSizeChange(size.SizeName)}
        disabled={!size.Available}
        key={size.SizeId}
      >
        {size.SizeName}
      </button>
    ))
      
  }

  return (
    <div className="item-page-container">
      <div className="img-container">
        <img src={img} alt={itemObj.DisplayName} />
      </div>
      <div className="info-container">
        <div className="info">
          <h2>{itemObj.DisplayName}</h2>
          <p>Brand: {itemObj.Brand}</p>
          <p>Price: ${itemObj.OriginalPrice}</p>
        </div>

        <h3>Colors:</h3>
        <div className="variants">
          {itemObj.Variants.map((variant) => (
            <div
              className={`variant-container ${
                colorName === variant.ColorName ? "clicked" : ""
              }`}
              onClick={() =>
                handleColorClick(
                  variant.ProductImages[0],
                  variant.ColorName,
                )
              }
              key={itemObj.ProductId + variant.ColorName}
            >
              <p>{variant.ColorName}</p>
              <img
                src={variant.SwatchImage}
                alt={`${variant.ColorName} variant`}
              />
            </div>
          ))}
        </div>

        <h3>Sizes: {sizeError && <span id="error">Select a size!</span>}</h3>
        <div className="size-container">
          {sizes()}
        </div>

        <button id="add-btn" onClick={handleAdd} disabled={sizeError}>
          <FaOpencart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
