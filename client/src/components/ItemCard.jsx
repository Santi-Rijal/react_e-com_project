import React from "react";

// A component representing the "itemObj" clothing/jewelry.
const ItemCard = ({ itemObj }) => {
  return (
    <div className="item-container">
      <div className="img-container">
        <img src={itemObj.DefaultProductImage} alt={itemObj.DisplayName} />
      </div>
      <div className="info">
        <hr />
        <h3>{itemObj.DisplayName}</h3>
        <p>${itemObj.OriginalPrice}</p>
      </div>
    </div>
  );
};

export default ItemCard;
