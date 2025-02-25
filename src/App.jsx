import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import SchoolDashboard from "./pages/schools/SchoolDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Student */}
        <Route path="/student_dashboard" element={<StudentDashboard />} />

        {/* School */}
        <Route path="/school_dashboard" element={<SchoolDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
