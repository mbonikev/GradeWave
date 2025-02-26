import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouteStudent({ children }) {
  const loggedIn =
    sessionStorage.getItem("loggedInStudent") === "false" || null;

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default ProtectedRouteStudent;
