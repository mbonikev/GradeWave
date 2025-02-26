import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import LoadingScreen from "../../components/LoadingScreen";

function StudentDashboard() {
  const location = useLocation();
  const state = location.state || {};
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [fetching, setFetching] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 1500);
  }, []);

  return (
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
      {/* loading */}
      {fetching && <LoadingScreen />}
      {state.pageBehavior}
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-full min-h-svh flex flex-col z-10 bg-body-bg relative`}
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
        <div className="w-full flex-1 overflow-y-auto py-1 flex flex-col gap-0 pt-5 relative"></div>
      </div>
    </div>
  );
}

export default StudentDashboard;
