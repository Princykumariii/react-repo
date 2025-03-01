import { useDispatch, useSelector } from "react-redux";
import { addToMyBooks } from "../redux/slices/booksSlice";
import { db } from "../firebase/firebaseConfig";
import { ref, set } from "firebase/database";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleAddBook = () => {
    if (!user) {
      alert("Please login to add books!");
      return;
    }

    const userBookRef = ref(db, `users/${user.uid}/myBooks/${book.id}`);
    set(userBookRef, { ...book, status: "Want to Read" });

    dispatch(addToMyBooks({ ...book, status: "Want to Read" }));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={handleAddBook}>Want to Read</button>
    </div>
  );
};

export default BookCard;
