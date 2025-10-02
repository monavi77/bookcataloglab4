import React, { useEffect, useState } from "react";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    language: "",
    pages: "",
  });

  useEffect(() => {
    fetch("/data/books.json")
      .then((res) => res.json())
      .then((json) => setBooks(json));
  }, []);

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.isbn13 !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="app">
      <header className="header">
        <img src="logo.svg" alt="Brand Logo" className="logo" />
        <h1>Elf Book Catalog</h1>
      </header>

      <main className="content">
        <div className="button-column">
          <button className="add-btn" onClick={() => setShowModal(true)}>
            + Add
          </button>
        </div>

        <div className="grid">
          {books.map((book) => (
            <Book
              key={book.isbn13}
              id={book.isbn13}
              title={book.title}
              price={book.price}
              image={book.image}
              url={book.url}
              onRemove={removeBook}
            />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Elf Book Catalog. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Author:
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Publisher:
                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                />
              </label>
              <label>
                Year:
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </label>
              <label>
                Language:
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pages:
                <input
                  type="number"
                  name="pages"
                  value={formData.pages}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
