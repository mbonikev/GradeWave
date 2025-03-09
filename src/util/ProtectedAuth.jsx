import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedAuth({ children }) {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get login status only once on initial render
    const loggedIn = sessionStorage.getItem("loggedInStudent");
    const loggedInSchool = sessionStorage.getItem("loggedInSchool");
    const loggedInAdmin = sessionStorage.getItem("loggedInAdmin");

    // Handle redirects based on login status
    if (loggedIn === "true") {
      navigate("/student_dashboard");
    } else if (loggedInSchool === "true") {
      navigate("/school_dashboard");
    } else if (loggedInAdmin === "true") {
      navigate("/admin_dashboard");
    } else {
      setShowContent(true); // Show content if not logged in
    }
  }, [navigate]); // Dependency array to ensure the effect runs only once

  // Render children only if showContent is true
  return <>{showContent ? children : null}</>;
}

export default ProtectedAuth;
