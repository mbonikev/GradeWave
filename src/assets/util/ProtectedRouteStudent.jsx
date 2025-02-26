import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteStudent({ children }) {
  const loggedIn = sessionStorage.getItem("loggedInStudent");

  if (loggedIn === true) {
    return navigate("/");
  }

  return <>{children}</>;
}

export default ProtectedRouteStudent;
