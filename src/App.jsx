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
import StudentSettings from "./pages/student/StudentSettings";
import LoadingScreen from "./components/LoadingScreen";

function AppRouter() {
  const location = useLocation();
  const [fetching, setFetching] = useState(false);
  const [animateFetching, setAnimateFetching] = useState(false);

  const loadingRoutes = [
    "/student_dashboard",
    "/student_schools",
    "/student_register_for_exams",
    "/student_check_results",
    "/student_notifications",
    "/student_profile",
    "/student_settings",
  ];

  useEffect(() => {
    if (loadingRoutes.includes(location.pathname)) {
      setFetching(true);
      setAnimateFetching(true);
      setTimeout(() => {
        setAnimateFetching(false);
      }, 1500);
      setTimeout(() => {
        setFetching(false);
      }, 2000);
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full h-full">
      {fetching && <LoadingScreen animateFetching={animateFetching} />}

      <Routes>
        <Route exact path="/" element={<Login />} />
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;