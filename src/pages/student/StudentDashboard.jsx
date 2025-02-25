import React from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";

function StudentDashboard() {
  return (
    <div className="w-full min-h-svh overflow-y-auto flex-1">
      <StudentSidebar />
    </div>
  );
}

export default StudentDashboard;
