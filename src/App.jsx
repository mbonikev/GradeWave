import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import SchoolDashboard from "./pages/schools/SchoolDashboard";
import StudentSchools from "./pages/student/StudentSchools";
import StudentRegisterForExams from "./pages/student/StudentRegisterForExams";
import StudentCheckResults from "./pages/student/StudentCheckResults";
import StudentNotifications from "./pages/student/StudentNotifications";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSettings from "./pages/student/StudentSettings";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <Router>
      <LoadingWrapper />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Student */}
        <Route path="/student_dashboard" element={<StudentDashboard />} />
        <Route path="/student_schools" element={<StudentSchools />} />
        <Route
          path="/student_register_for_exams"
          element={<StudentRegisterForExams />}
        />
        <Route
          path="/student_check_results"
          element={<StudentCheckResults />}
        />
        <Route
          path="/student_notifications"
          element={<StudentNotifications />}
        />
        <Route path="/student_profile" element={<StudentProfile />} />
        <Route path="/student_settings" element={<StudentSettings />} />

        {/* School */}
        <Route path="/school_dashboard" element={<SchoolDashboard />} />
      </Routes>
    </Router>
  );
}

// Wrapper to show loading screen based on route change
const LoadingWrapper = () => {
  const [fetching, setFetching] = useState(false);
  const [animateFetching, setAnimateFetching] = useState(false);
  const location = useLocation(); // Now inside the Router context

  useEffect(() => {
    // Show loading screen when the route changes
    setFetching(true);
    setAnimateFetching(true);

    // Simulate loading screen animation
    const timer = setTimeout(() => {
      setAnimateFetching(false); // End animation after 1.5s
    }, 1500);

    // Simulate data fetching and hide the loading screen after 2s
    const fetchTimer = setTimeout(() => {
      setFetching(false);
    }, 2000);

    // Clean up timers on component unmount or before the next route change
    return () => {
      clearTimeout(timer);
      clearTimeout(fetchTimer);
    };
  }, [location]); // Dependency on location ensures this runs when the route changes

  return (
    <>
      {/* Show loading screen when fetching is true */}
      {fetching && <LoadingScreen animateFetching={animateFetching} />}
    </>
  );
};

export default App;
