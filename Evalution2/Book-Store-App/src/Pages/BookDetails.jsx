import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await axios.get(`/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.category}</p>
      <p>{book.price}</p>
    </div>
  );
};

export default BookDetailsPage;
