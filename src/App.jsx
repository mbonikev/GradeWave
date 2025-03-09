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
import SchoolManageStudents from "./pages/school/SchoolManageStudents";
import SchoolPromotionDetails from "./pages/school/SchoolPromotionDetails";
import SchoolCombinations from "./pages/school/SchoolCombinations";
import SchoolPapers from "./pages/school/SchoolPapers";
import SchoolNotifications from "./pages/school/SchoolNotifications";
import SchoolSettings from "./pages/school/SchoolSettings";
import SchoolStudentResults from "./pages/school/SchoolStudentResults";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRouteAdmin from "./util/ProtectedRouteAdmin";
import AdminExams from "./pages/admin/AdminExams";

function App() {
  const [fetching, setFetching] = useState(true);
  const [animateFetching, setAnimateFetching] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loggedInSchool") === "true") {
      document.documentElement.style.setProperty("--main-color", "#00bc7d");
      document.documentElement.style.setProperty(
        "--main-color-weak",
        "#00bc7d27"
      );
      const favicon = document.getElementById("favicon");
      if (favicon) {
        favicon.href = "/favicon_green.svg";
      }
    } else if (sessionStorage.getItem("loggedInAdmin") === "true") {
      document.documentElement.style.setProperty("--main-color", "#fb923c");
      document.documentElement.style.setProperty(
        "--main-color-weak",
        "#fb923c27"
      );
      const favicon = document.getElementById("favicon");
      if (favicon) {
        favicon.href = "/logo_orange.svg";
      }
    }
  }, []);

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
    { path: "/school_manage_students", element: <SchoolManageStudents /> },
    {
      path: "/school_promotion_details/:year/:level",
      element: <SchoolPromotionDetails />,
    },
    { path: "/school_combinations", element: <SchoolCombinations /> },
    { path: "/school_past_papers", element: <SchoolPapers /> },
    { path: "/school_notifications", element: <SchoolNotifications /> },
    { path: "/school_settings", element: <SchoolSettings /> },
    {
      path: "/school_student_results/:name",
      element: <SchoolStudentResults />,
    },
  ];

  const AdminRoutes = [
    { path: "/admin_dashboard", element: <AdminDashboard /> },
    { path: "/admin_exams", element: <AdminExams /> },
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

          {/* Protect Admin routes */}
          {AdminRoutes.map((route, index) => (
            <Route
              key={`admin-${index}`}
              path={route.path}
              element={
                <ProtectedRouteAdmin>{route.element}</ProtectedRouteAdmin>
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
