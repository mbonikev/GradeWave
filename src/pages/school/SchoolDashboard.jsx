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

function SchoolDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [level, setLevel] = useState("2024-2025"); // Default to Senior 3
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
      icon: <LuCircleCheckBig className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-green-500" />,
    },
    {
      title: "Average Score",
      value: "78%",
      icon: <LuChartPie className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-yellow-500" />,
    },
    {
      title: "Promotion",
      value: "2024-2025",
      icon: <LuCalendarDays className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-purple-500" />,
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
            Dashboard
          </h1>
          <div className="w-fit ml-auto max-sm:w-full flex items-center justify-start gap-3">
            <label
              for="level"
              class="block text-sm font-medium pt-1 text-text-color whitespace-nowrap"
            >
              Select Promotion:
            </label>
            <select
              id="level"
              name="level"
              className="mt-1 block w-[200px] max-sm:flex-1 px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
              value={level}
              defaultChecked2024-2025
              onChange={(e) => setLevel(e.target.value)} // Update level on selection change
            >
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2022-2023</option>
              <option value="2024-2025">2021-2022</option>
              <option value="2024-2025">2020-2021</option>
            </select>
          </div>
          <div className="py-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 max-md:p-5 flex items-center justify-between bg-white shadow-sm rounded-2xl border border-card-bg-weak"
                >
                  <div>
                    <h3 className="text-sm font-medium mb-1 text-text-color-weak">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-text-color">
                      {stat.value}
                    </p>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>
            {/* o-level */}
            <div className="w-full flex items-center justify-between mt-6 mb-3">
              <h1 class="block text-sm font-medium text-text-color whitespace-nowrap">
                Top 5 O-level Candidates
              </h1>
              <Link
                to="/school_promotion_details/2024-2025/O-Level"
                class=" text-sm font-medium p-1 flex items-center gap-1 text-main-color-school hover:text-main-color-dark-school whitespace-nowrap"
              >
                View all
                <LuArrowRight />
              </Link>
            </div>
            {/* Students Table */}
            <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm">
              <table className="w-full text-left">
                <thead className="bg-card-bg-weak">
                  <tr>
                    <th className="px-4 py-2">Student ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Progress</th>
                    <th className="px-4 py-2">Promotion/Year</th>
                    <th className="px-4 py-2">Combination</th>
                  </tr>
                </thead>
                <tbody>
                  {oLevelStudents.map((student) => (
                    <tr key={student.id} className="border-t">
                      <td className="px-4 py-2 w-[130px]">{student.id}</td>
                      <td className="px-4 py-2 w-[280px]">{student.name}</td>
                      <td className="px-4 py-2">{student.status}</td>
                      <td className="px-4 py-2">{student.progress}</td>
                      <td className="px-4 py-2">{student.promotion}</td>
                      <td className="px-4 py-2 text-text-color-weak/60">N/A</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* a-level */}
            <div className="w-full flex items-center justify-between mt-6 mb-3">
              <h1 class="block text-sm font-medium text-text-color whitespace-nowrap">
                Top 5 A-level Candidates
              </h1>
              <Link
                to="/school_promotion_details/2024-2025/A-Level"
                class=" text-sm font-medium p-1 flex items-center gap-1 text-main-color-school hover:text-main-color-dark-school whitespace-nowrap"
              >
                View all
                <LuArrowRight />
              </Link>
            </div>
            {/* Students Table */}
            <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm">
              <table className="w-full text-left">
                <thead className="bg-card-bg-weak">
                  <tr>
                    <th className="px-4 py-2">Student ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Progress</th>
                    <th className="px-4 py-2">Promotion/Year</th>
                    <th className="px-4 py-2">Combination</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-t">
                      <td className="px-4 py-2 w-[130px]">{student.id}</td>
                      <td className="px-4 py-2 w-[280px]">{student.name}</td>
                      <td className="px-4 py-2">{student.status}</td>
                      <td className="px-4 py-2">{student.progress}</td>
                      <td className="px-4 py-2">{student.promotion}</td>
                      <td className="px-4 py-2">{student.combination}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full h-fit grid grid-cols-1 max-md:grid-cols-1 gap-5 mt-3 py-1">
              <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
                <h1 className="text-base font-medium tracking-tight mt-3 mb-1 text-text-color/80 flex items-center justify-between">
                  O-level Glrobal Ranking 2024-2025
                </h1>
                <h1 className="text-base font-medium tracking-tight mb-3 text-text-color-weak/70 flex items-center justify-between">
                  #3 of 9,438 Students
                </h1>
                {topStudentsOlevel.map((student, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center max-md:items-start justify-normal"
                  >
                    <h1 className="text-text-color-weak text-sm font-bold w-[40px]">
                      {student.rank}
                    </h1>
                    <div className="w-full flex items-center max-md:flex-col max-md:items-start gap-3 bg-card-bg-weak rounded-2xl px-3 py-3 mb-1">
                      {student.icon}
                      <h1 className="flex-1 text-left flex items-center justify-between max-md:flex-col max-md:items-start max-md:w-full max-md:gap-1 gap-0">
                        <span className="text-base w-[35%]">
                          {student.name}
                        </span>
                        <span className="text-sm flex-1 text-text-color">
                          {student.school}
                        </span>
                        <span className="text-sm text-text-color">
                          Score: <strong>{student.score}</strong>
                        </span>
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-fit flex flex-col gap-1 py-1">
                <h1 className="text-base font-medium tracking-tight mt-3 mb-1 text-text-color/80 flex items-center justify-between">
                  A-level Glrobal Ranking 2024-2025
                </h1>
                <h1 className="text-base font-medium tracking-tight mb-3 text-text-color-weak/70 flex items-center justify-between">
                  #3 of 7,543 Students
                </h1>
                {topStudents.map((student, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center max-md:items-start justify-normal"
                  >
                    <h1 className="text-text-color-weak text-sm font-bold w-[40px]">
                      {student.rank}
                    </h1>
                    <div className="w-full flex items-center max-md:flex-col max-md:items-start gap-3 bg-card-bg-weak rounded-2xl px-3 py-3 mb-1">
                      {student.icon}
                      <h1 className="flex-1 text-left flex items-center justify-between max-md:flex-col max-md:items-start max-md:w-full max-md:gap-1 gap-0">
                        <span className="text-base w-[35%]">
                          {student.name}
                        </span>
                        <span className="text-sm flex-1 text-text-color">
                          {student.school}
                        </span>
                        <span className="text-sm text-text-color">
                          {student.combination}:{" "}
                          <strong>{student.score}</strong>
                        </span>
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDashboard;
