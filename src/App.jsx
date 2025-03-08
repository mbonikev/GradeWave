import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import SchoolDashboard from "./pages/schools/SchoolDashboard";
import StudentPapers from "./pages/student/StudentPapers";
import StudentRegisterForExams from "./pages/student/StudentRegisterForExams";
import StudentCheckResults from "./pages/student/StudentCheckResults";
import StudentNotifications from "./pages/student/StudentNotifications";
import StudentSettings from "./pages/student/StudentSettings";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRouteStudent from "./assets/util/ProtectedRouteStudent";
import ProtectedAuth from "./assets/util/ProtectedAuth";

function App() {
  const [fetching, setFetching] = useState(true);
  const [animateFetching, setAnimateFetching] = useState(true);

  useEffect(() => {
    setAnimateFetching(true);
    setTimeout(() => {
      setAnimateFetching(false);
    }, 1500);
    setTimeout(() => {
      setFetching(false);
    }, 2000);
  }, []);

  
  const protectedRoutes = [
    { path: "/student_dashboard", element: <StudentDashboard /> },
    { path: "/student_past_papers", element: <StudentPapers /> },
    {
      path: "/student_register_for_exams",
      element: <StudentRegisterForExams />,
    },
    { path: "/student_check_results", element: <StudentCheckResults /> },
    { path: "/student_notifications", element: <StudentNotifications /> },
    { path: "/student_settings", element: <StudentSettings /> },
    { path: "/school_dashboard", element: <SchoolDashboard /> },
  ];

  const protectedRoutesSchool = [
    { path: "/school_dashboard", element: <SchoolDashboard /> },
  ];

  return (
    <div>
      {/* loading */}
      {fetching && <LoadingScreen animateFetching={animateFetching} />}

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedAuth>
                <Login />
              </ProtectedAuth>
            }
          />

          {/* Protect all routes for student */}
          {protectedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRouteStudent>{route.element}</ProtectedRouteStudent>
              }
            />
          ))}

          {/* Protect all routes for student */}
          {protectedRoutesSchool.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRouteStudent>{route.element}</ProtectedRouteStudent>
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
