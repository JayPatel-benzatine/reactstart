import React from "react";
import { Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

// this is not used a cookie private routing is being used  right now in app.js

const PrivateRoute = ({ children }) => {
  const { user } = useAuthentication();
  console.log(user)
  if (user?.token) {
    return children;
  } else {
    return (
      <Navigate to={"/signin"}/>
    );
  }
};

export default PrivateRoute;
