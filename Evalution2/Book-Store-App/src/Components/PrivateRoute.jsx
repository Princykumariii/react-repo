import React from "react";
import { Route, Navigate } from "react-router-dom";
//import { useAuth } from "../Component/AuthContext";
import PrivateRoute from "../Components"
const PrivateRoute = ({ element, ...rest }) => {
  const { authData } = useAuth();

  return (
    <Route
      {...rest}
      element={authData ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
