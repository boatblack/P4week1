// src/components/ItemCard.jsx
import React, { useState } from "react";
import "../Styles/ItemCard.css";

const ItemCard = ({ item }) => {
  const [size, setSize] = useState("small");
  const [color, setColor] = useState(item.colors[0]);

  return (
    <div className="item-card">
      <img src={`./assets/${item.name}.jpg`} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <div className="options">
        <select onChange={e => setSize(e.target.value)} value={size}>
          <option value="small">Small</option>
          <option value="large">Large</option>
          <option value="xlarge">Extra Large</option>
        </select>
        <select onChange={e => setColor(e.target.value)} value={color}>
          {item.colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ItemCard;
