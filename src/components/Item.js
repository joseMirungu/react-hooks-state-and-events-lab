import React, { useState } from "react";

function Item({ name, category }) {
  // Add state to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle the state when the button is clicked
  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
