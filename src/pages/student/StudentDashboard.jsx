import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuShare,
  LuShare2,
} from "react-icons/lu";
import { Pfp } from "../../assets";
import { GiSportMedal, GiTrophy } from "react-icons/gi";
import LoadingScreen from "../../components/LoadingScreen";
import Loading from "../../components/Loading";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import ConfirmLogout from "../../components/ConfirmLogout";

function StudentDashboard() {
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

  const gradeLevels = [
    { title: "Excellent", colorCode: "#4CAF50", range: "70% - 100%" }, // Green
    { title: "Average Performance", colorCode: "#FF9800", range: "50% - 69%" }, // Orange
    { title: "Fail", colorCode: "#F44336", range: "Below 45%" }, // Red
  ];

  const getGrade = (percentage) => {
    if (percentage >= 90) return "A+";
    if (percentage >= 85) return "A";
    if (percentage >= 80) return "A-";
    if (percentage >= 75) return "B+";
    if (percentage >= 70) return "B";
    if (percentage >= 65) return "B-";
    if (percentage >= 60) return "C+";
    if (percentage >= 55) return "C";
    if (percentage >= 50) return "C-";
    if (percentage >= 45) return "D";
    return "Fail"; // Anything below 45
  };

  const getColor = (percentage) => {
    if (percentage >= 70) return "#4CAF50"; // Green (Safe Zone)
    if (percentage >= 50) return "#FF9800"; // Orange (Warning)
    return "#F44336"; // Red (Fail)
  };

  const Progress = ({ percentage }) => {
    const circumference = 251.2;
    const offset = circumference - (percentage / 100) * circumference;
    const grade = getGrade(percentage);
    const strokeColor = getColor(percentage);

    return (
      <svg width="150" height="150" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#dddddd90"
          strokeWidth="12"
          fill="none"
        />

        {/* Progress Arc (Dynamic Color) */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={strokeColor}
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />

        {/* Center Text (Grade) */}
        <text
          x="50"
          y="58"
          fontSize="22"
          fontWeight="600"
          textAnchor="middle"
          fill="#414141"
        >
          {grade}
        </text>
      </svg>
    );
  };

  const GradeTable = ({ grades }) => {
    return (
      <div className="overflow-x-auto rounded-2xl border border-card-bg">
        <table className="w-full text-left">
          <thead className="bg-card-bg-weak">
            <tr>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Percentage</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{grade.subject}</td>
                <td className="px-4 py-2">{grade.percentage}%</td>
                <td
                  className="px-4 py-2 font-semibold"
                  style={{ color: grade.color }}
                >
                  {grade.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Subjects for Primary 6 (P6)
  const p6Subjects = [
    { subject: "Mathematics", percentage: 85, grade: "A", color: "#569458" },
    { subject: "English", percentage: 78, grade: "B+", color: "#569458" },
    { subject: "Kinyarwanda", percentage: 80, grade: "A", color: "#569458" },
    { subject: "Science", percentage: 70, grade: "B", color: "#FF9800" },
    {
      subject: "Social Studies",
      percentage: 65,
      grade: "C+",
      color: "#FF9800",
    },
    { subject: "Creative Arts", percentage: 60, grade: "C", color: "#FF9800" },
  ];

  // Subjects for Senior 3 O-Level
  const senior3Subjects = [
    { subject: "Mathematics", percentage: 85, grade: "A", color: "#569458" },
    { subject: "English", percentage: 72, grade: "B", color: "#569458" },
    { subject: "Biology", percentage: 70, grade: "B", color: "#569458" },
    { subject: "Chemistry", percentage: 60, grade: "C+", color: "#FF9800" },
    { subject: "Physics", percentage: 40, grade: "Fail", color: "#F44336" },
    { subject: "Kinyarwanda", percentage: 80, grade: "A", color: "#569458" },
    { subject: "Geography", percentage: 75, grade: "B+", color: "#569458" },
    { subject: "History", percentage: 65, grade: "C", color: "#FF9800" },
    {
      subject: "Entrepreneurship",
      percentage: 88,
      grade: "A",
      color: "#569458",
    },
  ];

  // Update grades based on the selected level
  useEffect(() => {
    setFetching(true);
    setTimeout(() => {
      if (level === "p6") {
        setGradesData(p6Subjects);
        setMarks(45);
      } else if (level === "senior-3") {
        setGradesData(senior3Subjects);
        setMarks(87);
      }
    }, 100);
    setTimeout(() => {
      setFetching(false);
    }, 600);
  }, [level]);

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
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
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
        <StudentNavbar
          setLogoutWarn={setLogoutWarn}
          openSidebar={openSidebar}
        />
        {/* content */}
        <div className="w-full h-fit max-w-[1120px] px-5 mb-10 mx-auto">
          <h1 className="text-[28px] font-bold tracking-tight mt-3 text-text-color/80">
            Dashboard
          </h1>

          <div className="w-full h-fit grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 mt-3 py-1">
            {[
              { name: "Check Results", path: "/student_check_results" },
              {
                name: "Register For Exams",
                path: "/student_register_for_exams",
              },
              { name: "Resources", path: "/student_past_papers" },
              { name: "Get Help", path: "/student_help" },
            ].map((service, index) => (
              <Link
                to={service.path}
                index={index}
                className="group w-full h-full cursor-pointer text-text-color/90 ring-1 ring-card-bg-weak hover:bg-card-bg-weak rounded-2xl py-4 pl-4 pr-5 shadow-sm flex flex-col justify-between items-start gap-0"
              >
                <h1 className="capitalize text-base leading-6 font-medium tracking-tight group-hover:text-main-color ">
                  {service.name}
                </h1>
                <div className="w-full flex items-start justify-start text-main-color mt-4 text-xl">
                  <LuArrowUpRight />
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full py-1 mt-7 flex flex-col gap-5">
            {fetching ? (
              <div className="w-full h-[100px] flex items-center justify-center">
                <Loading size="medium" />
              </div>
            ) : (
              <div className="w-full h-fit relative flex flex-col gap-5">
                <Fade duration={200} triggerOnce>
                  <div className="w-full flex items-start justify-between max-sm:flex-col-reverse">
                    <div className="w-full flex items-start flex-col gap-5">
                      {level === "p6" ? "PLE Grades" : "O-level Grades"}
                      <div className="w-ful h-fit flex items-center gap-10 max-sm:gap-5 mb-6">
                        <Progress percentage={marks} />
                        <div className="flex-1 flex flex-col gap-3">
                          {gradeLevels.map((level, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <div
                                className="w-4 h-4 min-w-4 rounded-full"
                                style={{ backgroundColor: level.colorCode }}
                              ></div>
                              <span className="text-sm font-medium text-text-color-weak">
                                {level.title} ({level.range})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-[300px] max-md:w-[200px] ml-auto flex flex-col gap-2">
                      <label
                        for="level"
                        class="block text-sm font-medium text-text-color"
                      >
                        Select Level
                      </label>
                      <select
                        id="level"
                        name="level"
                        className="mt-1 block w-full px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)} // Update level on selection change
                      >
                        <option value="p6">PLE, 2021-2022</option>
                        <option value="senior-3">O-Level, 2025-2026</option>
                      </select>
                    </div>
                  </div>
                </Fade>
                <GradeTable grades={gradesData} />
              </div>
            )}
          </div>
          <div className="w-full h-fit grid grid-cols-1 max-md:grid-cols-1 gap-5 mt-3 py-1">
            <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
              <h1 className="text-base font-medium tracking-tight mt-3 mb-1 text-text-color/80 flex items-center justify-between">
                O-level Grobal Ranking 2024-2025
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
                      <span className="text-base w-[35%]">{student.name}</span>
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
                A-level Grobal Ranking 2024-2025
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
                      <span className="text-base w-[35%]">{student.name}</span>
                      <span className="text-sm flex-1 text-text-color">
                        {student.school}
                      </span>
                      <span className="text-sm text-text-color">
                        {student.combination}: <strong>{student.score}</strong>
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
  );
}

export default StudentDashboard;
