import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import {
  LuUsers,
  LuChartPie,
  LuCircleCheckBig,
  LuCalendarDays,
  LuArrowRight,
} from "react-icons/lu";
import { GiSportMedal, GiTrophy } from "react-icons/gi";

function SchoolManageStudents() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [level, setLevel] = useState("senior-3"); // Default to Senior 3
  const [gradesData, setGradesData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [marks, setMarks] = useState(87);
  const [logoutWarn, setLogoutWarn] = useState(false);
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

  const stats = [
    {
      title: "Total Candidates",
      value: 1200,
      icon: <LuUsers className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-blue-500" />,
    },
    {
      title: "Passed Candidates",
      value: 900,
      icon: (
        <LuCircleCheckBig className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-green-500" />
      ),
    },
    {
      title: "Average Score",
      value: "78%",
      icon: (
        <LuChartPie className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-yellow-500" />
      ),
    },
    {
      title: "Promotion",
      value: "2024-2025",
      icon: (
        <LuCalendarDays className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-purple-500" />
      ),
    },
  ];

  const students = [
    {
      id: 942534084,
      name: "Mukamana Diane",
      status: "Passed",
      progress: "95%",
      promotion: "2024-2025",
      combination: "MCB",
    },
    {
      id: 120534084,
      name: "Kwizera Jean",
      status: "Passed",
      progress: "85%",
      promotion: "2024-2025",
      combination: "SOD",
    },
    {
      id: 220534084,
      name: "Iradukunda Aline",
      status: "Passed",
      progress: "78%",
      promotion: "2023-2024",
      combination: "MCE",
    },
    {
      id: 320534084,
      name: "Nshimiyimana Eric",
      status: "Passed",
      progress: "72%",
      promotion: "2025-2026",
      combination: "MPC",
    },
    {
      id: 420534084,
      name: "Umutoni Sandrine",
      status: "Passed",
      progress: "70%",
      promotion: "2024-2025",
      combination: "MCB",
    },
  ];
  const oLevelStudents = [
    {
      id: 510534084,
      name: "Ingabire Florence",
      status: "Passed",
      progress: "90%",
      promotion: "2024-2025",
    },
    {
      id: 110534084,
      name: "Hakizimana Yves",
      status: "Passed",
      progress: "88%",
      promotion: "2024-2025",
    },
    {
      id: 210534084,
      name: "Uwase Claudine",
      status: "Passed",
      progress: "79%",
      promotion: "2023-2024",
    },
    {
      id: 310534084,
      name: "Mugisha Patrick",
      status: "Passed",
      progress: "78%",
      promotion: "2025-2026",
    },
    {
      id: 410534084,
      name: "Niyonsaba Kevin",
      status: "Passed",
      progress: "75.93%",
      promotion: "2024-2025",
    },
  ];

  const topStudentsOlevel = [
    {
      rank: "1st",
      name: "Mugisha Kenny",
      school: "Groupe Scolaire APRED Ndera",
      score: "99.02%",
      icon: <GiTrophy className="text-3xl mx-[2px] text-[#e5a953]" />,
    },
    {
      rank: "2nd",
      name: "Ineza Raissa",
      school: "College Saint Andre",
      score: "95.39%",
      icon: <GiSportMedal className="text-4xl text-stone-400" />,
    },
    {
      rank: "3rd",
      name: "Uwase Abatoni Stecy",
      school: "Groupe Scolaire Sainte Bernadette Save",
      score: "93.20%",
      icon: <GiSportMedal className="text-4xl text-[#e3a782]" />,
    },
  ];

  const topStudents = [
    {
      rank: "1st",
      name: "Mugisha Kenny",
      school: "Groupe Scolaire Officiel de Butare",
      combination: "MPC",
      score: "97.28%",
      icon: <GiTrophy className="text-3xl mx-[2px] text-[#e5a953]" />,
    },
    {
      rank: "2nd",
      name: "Ineza Raissa",
      school: "Ecole des Sciences Byimana",
      combination: "MCE",
      score: "94.92%",
      icon: <GiSportMedal className="text-4xl text-stone-400" />,
    },
    {
      rank: "3rd",
      name: "Uwase Abatoni Stecy",
      school: "Lycee de Kigali",
      combination: "HEG",
      score: "91.28%",
      icon: <GiSportMedal className="text-4xl text-[#e3a782]" />,
    },
  ];
  return (
    <div className="w-full h-fit flex-1 flex relative">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <SchoolSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 bg-white overflow-y-auto relative`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <SchoolNavbar setLogoutWarn={setLogoutWarn} openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 mb-10 mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Manage Students
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SchoolManageStudents;
