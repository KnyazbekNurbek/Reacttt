import React from "react";

function BookCard({ id, title, author, genre, rating, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default React.memo(BookCard);