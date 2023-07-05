import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setCart] = useState(false)

  const itemClass = isInCart ? "in-cart" : ""

  function handleClick() {
    setCart((isInCart) => !isInCart) 

  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{!isInCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
