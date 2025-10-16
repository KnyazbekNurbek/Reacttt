import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/books">Books</Link>
        <Link to="/add-book">Add Book</Link>
      </header>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}