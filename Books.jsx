import React, { useState, useEffect, useCallback } from "react";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback(
    (id) => {
      setBooks((prev) => prev.filter((b) => b.id !== id));
    },
    [setBooks]
  );

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "all" || b.genre === genre)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book List</h2>
      <input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Nonfiction</option>
        <option value="tech">Tech</option>
      </select>
      <div>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}