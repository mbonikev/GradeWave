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

const App = () => (
  <Router>
    <LoadingWrapper />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/student_dashboard" element={<StudentDashboard />} />
      <Route path="/student_schools" element={<StudentSchools />} />
      <Route path="/student_register_for_exams" element={<StudentRegisterForExams />} />
      <Route path="/student_check_results" element={<StudentCheckResults />} />
      <Route path="/student_notifications" element={<StudentNotifications />} />
      <Route path="/student_profile" element={<StudentProfile />} />
      <Route path="/student_settings" element={<StudentSettings />} />
      <Route path="/school_dashboard" element={<SchoolDashboard />} />
    </Routes>
  </Router>
);

const LoadingWrapper = () => {
  const [fetching, setFetching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFetching(true);
    const timer = setTimeout(() => setFetching(false), 2000); // Simulate loading for 2s
    return () => clearTimeout(timer); // Cleanup on route change
  }, [location]);

  return fetching && <LoadingScreen animateFetching={true} />;
};

export default App;
