import React from "react";
import "./Book.css";

export default function Book({ title, price, image, url }) {
  return (
    <div className="book-card">
      <img src={image} alt="Book cover" className="book-image" />
      <p className="title">{title}</p>
      <p className="price">{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View More
      </a>
    </div>
  );
}
