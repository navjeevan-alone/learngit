import React, { useState } from "react";

function ProductCard({ product }) {
  const [isSelected, setIsSelected] = useState(product.isSelected);
  const addToCartHandler = () => {
    // console.log("item added to cart successfully");
    setIsSelected(!isSelected);
  };
  const removeFromCartHandler = () => {
    // console.log("item removed to cart successfully");
    setIsSelected(!isSelected);
  };
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.img} alt="" />
      </div>
      <div className="card-info">
        <h3>{product.name} </h3>
        <p>{product.description.substr(0, 110)} </p>
        <div className="btn-group">
          <p className="price">
            <sup>₹</sup> <span>{product.price}</span>
          </p>
          {!isSelected && (
            <button className="btn btn-primary" onClick={addToCartHandler}>
              Add To Cart
            </button>
          )}
          {isSelected && (
            <button
              className="btn btn-disabled"
              onClick={removeFromCartHandler}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
