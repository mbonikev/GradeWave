import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import SchoolDashboard from "./pages/school/SchoolDashboard";
import StudentPapers from "./pages/student/StudentPapers";
import StudentRegisterForExams from "./pages/student/StudentRegisterForExams";
import StudentCheckResults from "./pages/student/StudentCheckResults";
import StudentNotifications from "./pages/student/StudentNotifications";
import StudentSettings from "./pages/student/StudentSettings";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRouteStudent from "./util/ProtectedRouteStudent";
import ProtectedRouteSchool from "./util/ProtectedRouteSchool"; // Use a separate route protection for schools
import ProtectedAuth from "./util/ProtectedAuth";

function App() {
  const [fetching, setFetching] = useState(true);
  const [animateFetching, setAnimateFetching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateFetching(false);
      setTimeout(() => {
        setFetching(false);
      }, 500); // Reduced inner timeout for smoother transition
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const studentRoutes = [
    { path: "/student_dashboard", element: <StudentDashboard /> },
    { path: "/student_past_papers", element: <StudentPapers /> },
    {
      path: "/student_register_for_exams",
      element: <StudentRegisterForExams />,
    },
    { path: "/student_check_results", element: <StudentCheckResults /> },
    { path: "/student_notifications", element: <StudentNotifications /> },
    { path: "/student_settings", element: <StudentSettings /> },
  ];

  const schoolRoutes = [
    { path: "/school_dashboard", element: <SchoolDashboard /> },
  ];

  return (
    <div>
      {fetching && <LoadingScreen animateFetching={animateFetching} />}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedAuth>
                <Login />
              </ProtectedAuth>
            }
          />

          {/* Protect student routes */}
          {studentRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRouteStudent>{route.element}</ProtectedRouteStudent>
              }
            />
          ))}

          {/* Protect school routes */}
          {schoolRoutes.map((route, index) => (
            <Route
              key={`school-${index}`}
              path={route.path}
              element={
                <ProtectedRouteSchool>{route.element}</ProtectedRouteSchool>
              }
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
