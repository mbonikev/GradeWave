import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedAuthStudent({ children }) {
  const loggedIn = sessionStorage.getItem("loggedInStudent");
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loggedIn === "true") {
      navigate("/student_dashboard");
    } else {
      setShowContent(true);
    }
  }, [loggedIn]);

  return <>{showContent ? children : null}</>;
}

export default ProtectedAuthStudent;
