import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div>
      {/* Login Form Here */}
      <button onClick={() => handleLogin("test@example.com", "password123")}>Login</button>
    </div>
  );
};

export default Login;
