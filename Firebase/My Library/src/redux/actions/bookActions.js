import { database } from "../../utils/firebaseConfig";
import { ref, get, set, update } from "firebase/database";

export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: "FETCH_BOOKS_REQUEST" });

  try {
    const snapshot = await get(ref(database, "books"));
    if (snapshot.exists()) {
      dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) });
    }
  } catch (error) {
    dispatch({ type: "FETCH_BOOKS_FAILURE", payload: error.message });
  }
};
