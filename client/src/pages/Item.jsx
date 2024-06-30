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
  const img = itemObj?.images[0]?.baseUrl || itemObj?.images[0]?.url || "";
  const [colorName, setColorName] = useState(
    itemObj?.articleColorNames[0] || ""
  );
  const [sizeName, setSizeName] = useState("");
  const [sizeError, setSizeError] = useState(true);

  const { cart, updateCart } = useContext(Context);

  // A function that handles the change of varient for this item.
  const handleColorClick = (colorName) => {
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
      pid: itemObj?.pk,
      title: itemObj?.name,
      thumb_image: img,
      size: sizeName,
      quantity: 1,
      color: colorName,
      price: itemObj?.price?.value,
      totalPrice: itemObj?.price?.value,
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
    return itemObj?.variantSizes.map((size) => (
      <button
        className={`size ${sizeName === size?.filterCode ? "clicked" : ""}`}
        onClick={() => handleSizeChange(size?.filterCode)}
        key={size?.orderFilter}
      >
        {size?.filterCode}
      </button>
    ));
  };

  return (
    <div className="item-page-container">
      <div className="img-container">
        <img src={img} alt={itemObj?.name} />
      </div>
      <div className="info-container">
        <div className="info">
          <h2>{itemObj?.name}</h2>
          <p>Brand: {itemObj?.brandName}</p>
          <p>Price: {itemObj?.price?.formattedValue}</p>
        </div>

        <h3>Colors:</h3>
        <div className="variants">
          {itemObj?.articleColorNames.map((variant) => {
            if (variant !== "dc") {
              return (
                <div
                  className={`variant-container ${
                    colorName === variant ? "clicked" : ""
                  }`}
                  onClick={() => handleColorClick(variant)}
                  key={itemObj?.pk + variant}
                >
                  <p>{variant}</p>
                </div>
              );
            }
            return null;
          })}
        </div>

        <h3>Sizes: {sizeError && <span id="error">Select a size!</span>}</h3>
        <div className="size-container">{sizes()}</div>

        <button id="add-btn" onClick={handleAdd} disabled={sizeError}>
          <FaOpencart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
