import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";

function StudentRegisterForExams() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const openSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => {
      setAnimateShowSidebar(true);
    }, 50);
  };
  const closeSidebar = () => {
    setAnimateShowSidebar(false);
    setTimeout(() => {
      setShowSidebar(false);
    }, 100);
  };
  return (
    <div className="w-full h-fit overflow-y-auto flex-1 flex">
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 overflow-y-auto relative bg-body-bg relative`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <StudentNavbar openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-2.5 max-lg:px-5 min-h-[1000px] mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Register For Exams
          </h1>
          <h1 className="text-sm font-normal my-4 text-text-color-weak">
            # Open Exams
          </h1>
          <div className="w-full grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-2">
            {/* S3 */}
            <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak/70 shadow-sm p-3 flex items-center">
              <div className="w-full flex flex-col gap-1 text-sm ">
                <h1 className="text-base font-bold text-text-color/80">
                  ORDINARY LEVEL NATIONAL EXAMINATION, 2025-2026
                </h1>
                <h1 className="text-text-color/50">
                  <strong className="font-medium">Registration Status:</strong>{" "}
                  <span className="text-green-700/80 font-medium">In Progress</span>
                </h1>

                <Link
                  to="/student_register_for_exams"
                  className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full flex items-center justify-center gap-2 mt-5 rounded-xl"
                >
                  Register
                </Link>
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Registration Due Date:</strong> <i> </i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam Start Date:</strong> <i>July 25, 2025</i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam End Date:</strong> <i>July 25, 2025</i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam Center:</strong> <i>Groupe Scolaire Ruyenzi</i> 
              </h1> */}
              </div>
            </div>
            {/* S6 */}
            <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak/70 shadow-sm p-3 flex items-center">
              <div className="w-full flex flex-col gap-1 text-sm ">
                <h1 className="text-base font-bold text-text-color/80">
                  ADVANCED LEVEL NATIONAL EXAMINATION, 2025-2026
                </h1>
                <h1 className="text-text-color/50">
                  <strong className="font-medium">Registration Status:</strong>{" "}
                  <span className="text-green-700/80 font-medium">In Progress</span>
                </h1>

                <Link
                  to="/student_register_for_exams"
                  className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full flex items-center justify-center gap-2 mt-5 rounded-xl"
                >
                  Register
                </Link>
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Registration Due Date:</strong> <i> </i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam Start Date:</strong> <i>July 25, 2025</i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam End Date:</strong> <i>July 25, 2025</i> 
              </h1> */}
                {/* <h1 className="text-text-color-weak">
                <strong className="font-medium">Exam Center:</strong> <i>Groupe Scolaire Ruyenzi</i> 
              </h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegisterForExams;
