import React, { createContext, useState, useContext } from "react";
import AuthContext from "../Context"
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = (token) => setAuthData({ token });
  const logout = () => setAuthData(null);

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext
