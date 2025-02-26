import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouteStudent({ children }) {
  const loggedIn =
    sessionStorage.getItem("loggedInStudent") === "false" || null;

  if (!loggedIn) {
    return navigate("/student_dashboard");
  }

  return <>{children}</>;
}

export default ProtectedRouteStudent;
