import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { FaUserGraduate, FaClipboardList, FaSchool } from "react-icons/fa";
import {
  LuArrowRight,
  LuCalendarDays,
  LuChartPie,
  LuCircleCheckBig,
  LuSchool,
  LuUsers,
} from "react-icons/lu";
import { HiMiniUsers } from "react-icons/hi2";

function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
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
      title: "Total Schools",
      value: "1,200",
      icon: (
        <LuSchool className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-cyan-500" />
      ),
    },
    {
      title: "Candidates",
      value: "92,423",
      icon: (
        <HiMiniUsers className="w-7 h-7 max-sm:w-8 max-sm:h-8 text-green-500" />
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

  return (
    <div className="w-full h-fit flex-1 flex relative">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <AdminSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <AdminNavbar setLogoutWarn={setLogoutWarn} openSidebar={openSidebar} />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 mb-10 mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Dashboard
          </h1>
          <div className="w-fit ml-auto max-sm:w-full flex items-center justify-start gap-3">
            <label
              for="level"
              class="block text-sm font-medium pt-1 text-text-color/80 whitespace-nowrap"
            >
              Select Promotion:
            </label>
            <select
              id="level"
              name="level"
              className="mt-1 block w-[200px] max-sm:flex-1 px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
              // value={level}
              defaultChecked2024-2025
              // onChange={(e) => setLevel(e.target.value)}
            >
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2022-2023</option>
              <option value="2024-2025">2021-2022</option>
              <option value="2024-2025">2020-2021</option>
            </select>
          </div>
          <div className="py-6 space-y-6">
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
                    <p className="text-2xl font-bold text-text-color/80">
                      {stat.value}
                    </p>
                  </div>
                  {stat.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-6 mb-3">
            <h1 class="block text-sm font-medium text-text-color whitespace-nowrap">
              O-level Glrobal Ranking 2024-2025
            </h1>
            <Link
              to="/school_promotion_details/2024-2025/O-Level"
              class=" text-sm font-medium p-1 flex items-center gap-1 text-main-color whitespace-nowrap"
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
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Progress</th>
                  <th className="px-4 py-2">Promotion/Year</th>
                  <th className="px-4 py-2">Combination</th>
                </tr>
              </thead>
              <tbody>
                {topStudentsOlevel.map((student) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2 w-[130px]">{student.}</td>
                    <td className="px-4 py-2 w-[280px]">
                      <Link
                        to={`/school_student_results/${student.name}`}
                        className="hover:text-main-color-school hover:underline"
                      >
                        {student.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2">{student.status}</td>
                    <td className="px-4 py-2">{student.progress}</td>
                    <td className="px-4 py-2">{student.promotion}</td>
                    <td className="px-4 py-2 text-text-color-weak/60">N/A</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
