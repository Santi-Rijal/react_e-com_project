import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa';

const Item = () => {
  const location = useLocation();
  const { itemObj } = location.state || {};

  return (
    <div className="item-page-container">
      <div className="img-container">
        <img src={itemObj.thumb_image} alt={itemObj.title} />
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
            <div className="variant-container">
              <p>{variant.sku_color_group}</p>
              <img src={variant.sku_thumb_images[0]} alt={`${variant.sku_color_group} variant`} />
            </div>
          ))}
        </div>

        <h3>Sizes:</h3>
        <div className="size-container">
          <span className="size">XS</span>
          <span className="size">S</span>
          <span className="size">M</span>
          <span className="size">L</span>
          <span className="size">XL</span>
          <span className="size">XXL</span>
          <span className="size">3XL</span>
        </div>

        <button id="add-btn"><FaOpencart /> Add to cart</button>
      </div>
    </div>
  )
}

export default Item