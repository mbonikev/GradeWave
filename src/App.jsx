import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* student */}
        <Route path="/student_dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
