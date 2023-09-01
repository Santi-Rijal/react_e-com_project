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
  const [img, setImg] = useState(itemObj.thumb_image || "");
  const [color, setColor] = useState(itemObj.variants[0].sku_color_group || "");
  const [size, setSize] = useState("");
  const [sizeError, setSizeError] = useState(true);

  const { cart, updateCart } = useContext(Context);

  // A function that handles the change of varient for this item.
  const handleColorClick = (img, color) => {
    setImg(img);
    setColor(color);
  };

  // A function that handles changes in selected item size.
  const handleSizeChange = (size) => {
    setSize(size);
    setSizeError(false);
  };

  // A function that handles adding item to cart.
  const handleAdd = () => {
    // Create a new item obj with following properties.
    const cartItem = {
      title: itemObj.title,
      thumb_image: img,
      size: size,
      quantity: 1,
      color: color,
      price: itemObj.price,
      totalPrice: itemObj.price,
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
        item.size === cartItem.size
    );
  };

  return (
    <div className="item-page-container">
      <div className="img-container">
        <img src={img} alt={itemObj.title} />
      </div>
      <div className="info-container">
        <div className="info">
          <h2>{itemObj.title}</h2>
          <p>Brand: {itemObj.brand}</p>
          <p>Price: ${itemObj.price}</p>
        </div>

        <h3>Colors:</h3>
        <div className="variants">
          {itemObj.variants.map((variant) => (
            <div
              className={`variant-container ${
                img === variant.sku_thumb_images[0] ? "clicked" : ""
              }`}
              onClick={() =>
                handleColorClick(
                  variant.sku_thumb_images[0],
                  variant.sku_color_group
                )
              }
              key={variant.sku_color_group}
            >
              <p>{variant.sku_color_group}</p>
              <img
                src={variant.sku_thumb_images[0]}
                alt={`${variant.sku_color_group} variant`}
              />
            </div>
          ))}
        </div>

        <h3>Sizes: {sizeError && <span id="error">Select a size!</span>}</h3>
        <div className="size-container">
          <span
            className={`size ${size === "XS" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("XS")}
          >
            XS
          </span>
          <span
            className={`size ${size === "S" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("S")}
          >
            S
          </span>
          <span
            className={`size ${size === "M" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("M")}
          >
            M
          </span>
          <span
            className={`size ${size === "L" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("L")}
          >
            L
          </span>
          <span
            className={`size ${size === "XL" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("XL")}
          >
            XL
          </span>
          <span
            className={`size ${size === "XXL" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("XXL")}
          >
            XXL
          </span>
          <span
            className={`size ${size === "3XL" ? "clicked" : ""}`}
            onClick={() => handleSizeChange("3XL")}
          >
            3XL
          </span>
        </div>

        <button id="add-btn" onClick={handleAdd} disabled={sizeError}>
          <FaOpencart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
