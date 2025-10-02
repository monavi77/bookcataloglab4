import React, { useState } from "react";
import "./Book.css";

export default function Book({ id, title, price, image, url, onRemove }) {
  const [selected, setSelected] = useState(false);

  const toggleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`book-card ${selected ? "selected" : ""}`}
      onClick={toggleSelect}
    >
      <img src={image} alt="Book cover" className="book-image" />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View More
      </a>
      <button
        className="remove-btn"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}
