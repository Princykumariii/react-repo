import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("name_asc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("/books", {
        params: { sort, category, page, limit: 5 },
      });
      setBooks(response.data);
    };
    fetchBooks();
  }, [sort, category, page]);

  return (
    <div>
      <h2>Book List</h2>
      <div>
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="name_asc">Alphabetically (A-Z)</option>
          <option value="price_asc">Price (Low to High)</option>
          <option value="price_desc">Price (High to Low)</option>
        </select>
        
      </div>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default BooksPage;
