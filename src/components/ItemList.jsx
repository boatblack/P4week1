// src/components/ItemList.jsx
import React from "react";
import ItemCard from "./ItemCard";
import "../Styles/ItemList.css";

const ItemList = () => {
  const items = [
    { id: 1, name: "Shirt", price: "$25", colors: ["black", "white", "blue"] },
    { id: 2, name: "Pants", price: "$30", colors: ["red", "pink", "blue"] },
    { id: 3, name: "Jacket", price: "$40", colors: ["black", "red", "blue"] },
  ];

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
