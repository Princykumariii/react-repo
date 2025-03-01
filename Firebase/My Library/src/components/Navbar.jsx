import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">My Library</Link>
      {user ? (
        <>
          <Link to="/my-books">My Books</Link>
          <span>{user.email}</span>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

