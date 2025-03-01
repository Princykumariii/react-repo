import { useSelector } from "react-redux";
import MyBookCard from "../components/MyBookCard";

const MyBooks = () => {
  const { myBooks } = useSelector((state) => state.books);

  return (
    <div>
      <h2>My Books</h2>
      {myBooks.length === 0 ? <p>No books added yet.</p> : myBooks.map((book) => <MyBookCard key={book.id} book={book} />)}
    </div>
  );
};

export default MyBooks;
