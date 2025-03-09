import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAuth({ children }) {
  const loggedIn = sessionStorage.getItem("loggedInStudent") === "true";
  const loggedInSchool = sessionStorage.getItem("loggedInSchool") === "true";
  const loggedInAdmin = sessionStorage.getItem("loggedInAdmin") === "true";

  if (loggedIn) return <Navigate to="/student_dashboard" replace />;
  if (loggedInSchool) return <Navigate to="/school_dashboard" replace />;
  if (loggedInAdmin) return <Navigate to="/admin_dashboard" replace />;

  return children;
}

export default ProtectedAuth;
