import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuUsers, LuChartPie, LuCircleCheckBig, LuCalendarDays } from "react-icons/lu";

function SchoolDashboard() {
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
      title: "Total Students",
      value: 1200,
      icon: <LuUsers className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Passed Exams",
      value: 900,
      icon: <LuCircleCheckBig className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Average Score",
      value: "78%",
      icon: <LuChartPie className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Current Year",
      value: "2025",
      icon: <LuCalendarDays className="w-6 h-6 text-gray-500" />,
    },
  ];

  const students = [
    {
      id: 1,
      name: "John Doe",
      grade: "A",
      progress: "85%",
      promotion: "2024",
      combination: "Science",
    },
    {
      id: 2,
      name: "Jane Smith",
      grade: "B+",
      progress: "78%",
      promotion: "2023",
      combination: "Arts",
    },
    {
      id: 3,
      name: "Michael Brown",
      grade: "A-",
      progress: "82%",
      promotion: "2025",
      combination: "Commerce",
    },
    {
      id: 4,
      name: "Emily White",
      grade: "B",
      progress: "75%",
      promotion: "2024",
      combination: "Science",
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

          <div className="py-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 flex items-center justify-between bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border-b">ID</th>
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Grade</th>
                    <th className="p-3 border-b">Progress</th>
                    <th className="p-3 border-b">Promotion/Year</th>
                    <th className="p-3 border-b">Combination</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{student.id}</td>
                      <td className="p-3 border-b">{student.name}</td>
                      <td className="p-3 border-b">{student.grade}</td>
                      <td className="p-3 border-b">{student.progress}</td>
                      <td className="p-3 border-b">{student.promotion}</td>
                      <td className="p-3 border-b">{student.combination}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDashboard;
