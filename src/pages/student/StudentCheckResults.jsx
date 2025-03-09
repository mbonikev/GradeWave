import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { LuArrowLeft, LuArrowRight, LuSchool } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";
import Loading from "../../components/Loading";
import ConfirmLogout from "../../components/ConfirmLogout";

function StudentCheckResults() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [role, setRole] = useState(1);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(null);
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
  return (
    <div className="w-full h-fit overflow-y-auto flex-1 flex">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <StudentSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 overflow-y-auto relative bg-body-bg`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <StudentNavbar openSidebar={openSidebar} setLogoutWarn={setLogoutWarn} />
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            National Examination Results
          </h1>
          <div className="w-full mt-10 max-lg:mt-5 mx-auto h-fit pb-10 flex items-center justify-start flex-col">
            {/* <div className="w-full lg:max-w-[550px] h-fit flex flex-col items-start justify-start">
              <h1 className="text-base font-normal opacity-80 mt-6">
                Choose your Level <span className="text-red-500">*</span>
              </h1>
              <div className="w-full h-fit  bg-stone-200/60 p-1 rounded-2xl mt-3">
                <div className="w-full flex select-none items-center justify-start gap-1 relative">
                  <div
                    className={`w-1/2 h-full bg-white absolute top-0 left-0 transition-all duration-200 rounded-xl ease-in-out ${
                      role === 1 ? "translate-x-0 " : "translate-x-full"
                    }`}
                  ></div>
                  <div
                    onClick={() => setRole(1)}
                    className={`w-full h-fit px-2.5 py-3 z-10 rounded-xl cursor-pointer flex gap-1.5 items-center justify-center transition-all ${
                      role === 1 ? "" : "border-white/40 text-text-color-weak"
                    }`}
                  >
                    <p className="text-sm font-medium text-center">
                      Primary and O Level
                    </p>
                  </div>
                  <div
                    onClick={() => setRole(2)}
                    className={`w-full h-fit px-2.5 py-3 z-10 rounded-xl cursor-pointer flex gap-1.5 items-center justify-center transition-all ${
                      role === 2 ? "" : "border-white/40 text-text-color-weak"
                    }`}
                  >
                    <p className="text-sm font-medium text-center">
                      Advanced Level/TTC/TVET-TSS
                    </p>
                  </div>
                </div>
              </div>

              {role === 1 ? (
                <>
                  <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                    Enter the Index Number{" "}
                    <span className="text-red-500">*</span>
                  </h1>
                  <input
                    // disabled={!isAgree}
                    // onClick={() => login()}
                    required
                    placeholder="0000PR000000"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
                  />

                  <button className="bg-main-color hover:bg-main-color-dark text-white select-none text-base font-semibold px-3 py-2.5 w-full flex items-center justify-center gap-2 mt-5 rounded-2xl">
                    Get Results
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                    Enter the Index Number{" "}
                    <span className="text-red-500">*</span>
                  </h1>
                  <input
                    // disabled={!isAgree}
                    // onClick={() => login()}
                    required
                    placeholder="XXXXXCODEXXXXX"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
                  />
                  <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                    National Identity <span className="text-red-500">*</span>
                  </h1>
                  <input
                    // disabled={!isAgree}
                    // onClick={() => login()}
                    required
                    placeholder="11980XXXXXXXXXXX"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
                  />
                  <button className="bg-main-color hover:bg-main-color-dark text-white select-none text-base font-semibold px-3 py-2.5 w-full flex items-center justify-center gap-2 mt-5 rounded-2xl">
                    Get Results
                  </button>
                </>
              )}
            </div> */}
            {level === null ? (
              <>
                <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-center max-md:flex-col mb-4">
                  <div className="w-full flex flex-col gap-1 text-sm ">
                    <h1 className="text-base font-bold text-text-color/80">
                      Primary Leaving Examination (PLE), 2021-2022
                    </h1>
                    <h1 className="text-text-color/50">
                      <strong className="font-medium">Status:</strong>{" "}
                      <span className="text-green-700/80 font-medium">
                        Gradded
                      </span>
                    </h1>
                  </div>
                  <button
                    onClick={() => setLevel("p6")}
                    className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
                  >
                    Open Result
                  </button>
                </div>
                <div className="w-full rounded-2xl ring-1 ring-card-bg-weak bg-card-bg-weak shadow-sm p-5 flex items-center max-md:flex-col mb-4">
                  <div className="w-full flex flex-col gap-1 text-sm ">
                    <h1 className="text-base font-bold text-text-color/80">
                      ORDINARY LEVEL NATIONAL EXAMINATION (O-Level Exam),
                      2025-2026
                    </h1>
                    <h1 className="text-text-color/50">
                      <strong className="font-medium">Status:</strong>{" "}
                      <span className="text-green-700/80 font-medium">
                        Gradded
                      </span>
                    </h1>
                  </div>
                  <button
                    onClick={() => setLevel("senior-3")}
                    className="bg-main-color hover:brightness-125 text-white select-none text-sm font-medium px-3 py-2 w-full max-w-[120px] max-md:max-w-full flex items-center justify-center gap-2 max-md:mt-5 rounded-xl"
                  >
                    Open Result
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-fit">
                  <button
                    onClick={() => setLevel(null)}
                    className="text-text-color ring-1 hover:ring-stone-300 ring-card-bg select-none text-sm font-medium px-4 py-2.5 max-md:max-w-full flex items-center justify-center gap-2 rounded-xl"
                  >
                    <LuArrowLeft className="text-base" />
                    Back
                  </button>
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
                            {level === "p6" ? "Primary Leaving Examination (PLE), 2021-2022" : "Ordinary Level Examination (PLE), 2024-2025"}
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
                      <GradeTable grades={gradesData} />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCheckResults;
