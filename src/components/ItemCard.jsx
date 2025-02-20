import React from "react";

// A component representing the "itemObj" clothing/jewelry.
const ItemCard = ({ itemObj }) => {
  return (
    <div className="item-container">
      <div className="img-container">
        <img
          src={itemObj?.images[0]?.baseUrl || itemObj?.images[0]?.url}
          alt={itemObj?.name}
        />
      </div>
      <div className="info">
        <hr />
        <h3>{itemObj?.name}</h3>
        <p>{itemObj?.price?.formattedValue}</p>
      </div>
    </div>
  );
};

export default ItemCard;
