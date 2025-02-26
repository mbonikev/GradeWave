import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import SchoolDashboard from "./pages/schools/SchoolDashboard";
import StudentSchools from "./pages/student/StudentSchools";
import StudentRegisterForExams from "./pages/student/StudentRegisterForExams";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Student */}
        <Route path="/student_dashboard" element={<StudentDashboard />} />
        <Route path="/student_schools" element={<StudentSchools />} />
        <Route path="/student_register_for_exams" element={<StudentRegisterForExams />} />
        <Route path="/student_check_results" element={<StudentCheckResults />} />
        <Route path="/student_notifications" element={<StudentDashboard />} />
        <Route path="/student_profile" element={<StudentDashboard />} />
        <Route path="/student_settings" element={<StudentDashboard />} />

        {/* School */}
        <Route path="/school_dashboard" element={<SchoolDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
