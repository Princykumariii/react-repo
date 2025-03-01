import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlice";
import BookCard from "../components/BookCard";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading books...</p> : books.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default Home;
