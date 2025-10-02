import React, { useEffect, useState } from "react";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img src="logo.svg" alt="Brand Logo" className="logo" />
        <h1> Elf Book Catalog</h1>
      </header>

      <main className="content">
        <div className="button-column">
          <button className="add-btn">+ Add</button>
        </div>
        <div className="grid">
          {books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              price={book.price}
              image={book.image}
              url={book.url}
            />
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 Elf Book Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
