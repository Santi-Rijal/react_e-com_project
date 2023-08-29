import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';
import { Context } from '../context/ContextProvider';

const Item = () => {
  const location = useLocation();
  const { itemObj } = location.state || {};
  const [img, setImg] = useState(itemObj.thumb_image || "");
  const [color, setColor] = useState(itemObj.variants[0].sku_color_group || "");
  const [size, setSize] = useState("");

  const { cart, updateCart } = useContext(Context);

  const handleColorClick = (img, color) => {
    setImg(img);
    setColor(color);
  }

  const handleSizeChange = (size) => {
    setSize(size);
  }

  const handleAdd = () => {
    const cartItem = {
      ...itemObj,
      thumb_image: img,
      size: size,
      quantity: 1,
      color: color,
      totalPrice: itemObj.price
    }

    let cartRef = cart;

    const existingCartItem = cart.find(item => (
      item.pid === cartItem.pid &&
      item.thumb_image === cartItem.thumb_image &&
      item.size === cartItem.size
    ));

    if (existingCartItem) {
      const updatedCart = cart.map(item => {
        if (item === existingCartItem) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * item.price
          }
        }

        return item;
      });

      cartRef = updatedCart;
    }
    else {
      cartRef = [...cart, cartItem];
    }
    
    updateCart(cartRef);
  }

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
          {itemObj.variants.map(variant => (
            <div className={`variant-container ${img === variant.sku_thumb_images[0] ? "clicked" : ""}`} onClick={() => handleColorClick(variant.sku_thumb_images[0], variant.sku_color_group)} key={variant.sku_color_group}>
              <p>{variant.sku_color_group}</p>
              <img src={variant.sku_thumb_images[0]} alt={`${variant.sku_color_group} variant`} />
            </div>
          ))}
        </div>

        <h3>Sizes:</h3>
        <div className="size-container">
          <span className={`size ${size === "XS" ? "clicked" : ""}`} onClick={() => handleSizeChange("XS")}>XS</span>
          <span className={`size ${size === "S" ? "clicked" : ""}`} onClick={() => handleSizeChange("S")}>S</span>
          <span className={`size ${size === "M" ? "clicked" : ""}`} onClick={() => handleSizeChange("M")}>M</span>
          <span className={`size ${size === "L" ? "clicked" : ""}`} onClick={() => handleSizeChange("L")}>L</span>
          <span className={`size ${size === "XL" ? "clicked" : ""}`} onClick={() => handleSizeChange("XL")}>XL</span>
          <span className={`size ${size === "XXL" ? "clicked" : ""}`} onClick={() => handleSizeChange("XXL")}>XXL</span>
          <span className={`size ${size === "3XL" ? "clicked" : ""}`} onClick={() => handleSizeChange("3XL")}>3XL</span>
        </div>

        <button id="add-btn" onClick={handleAdd}><FaOpencart /> Add to cart</button>
      </div>
    </div>
  )
}

export default Item