import React from "react";

// A component representing the "itemObj" clothing/jewelry.
const ItemCard = ({ itemObj }) => {
  return (
    <div className="item-container">
      <div className="img-container">
        <img src={itemObj.thumb_image} alt={itemObj.title} />
      </div>
      <div className="info">
        <hr />
        <h3>{itemObj.title}</h3>
        <p>${itemObj.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
