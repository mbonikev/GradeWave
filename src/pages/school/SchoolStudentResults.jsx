import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowLeft, LuPlus, LuSearch } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";

function SchoolStudentResults() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const [marks, setMarks] = useState(87);
  const [gradesData, setGradesData] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

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
          {marks}%
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
        <div className="w-full h-fit max-w-[1120px] px-5 max-sm:px-2 mb-10 mx-auto">
          <div className="w-full flex items-start gap-2 justify-between">
            <h1 className="text-[28px] max-sm:text-lg font-bold tracking-tight mt-3 text-text-color/80 flex items-center gap-2">
              <button
                onClick={() => navigate(-1)}
                className="size-9 rounded-full bg-card-bg-weak hover:bg-card-bg flex items-center justify-center"
              >
                <LuArrowLeft className="text-xl max-sm:text-lg stroke-[3px]" />
              </button>
              {name}
            </h1>
          </div>
          <div className="w-full h-fit relative flex flex-col gap-5 mt-8">
            <Fade duration={200} triggerOnce>
              <div className="w-full flex items-start justify-between max-sm:flex-col-reverse">
                <div className="w-full flex items-start flex-col gap-5">
                  O-level Grades
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
                            style={{
                              backgroundColor: level.colorCode,
                            }}
                          ></div>
                          <span className="text-sm font-medium text-text-color-weak">
                            {level.title} ({level.range})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <GradeTable grades={senior3Subjects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolStudentResults;
