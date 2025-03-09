import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import { Exams, Levels } from "../../content/Exams";
import { BsFolderFill } from "react-icons/bs";
import { LuArrowLeft } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import ConfirmLogout from "../../components/ConfirmLogout";

function StudentPapers() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [year, setYear] = useState(null);
  const [level, setLevel] = useState(null);
  const [results, setResults] = useState([]);
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

  const updateLevel = (e) => {
    setLevel(e);
  };

  useEffect(() => {
    const getExmas = () => {
      if (level !== null) {
        const res = Exams.find((x) => x.title === year);
        if (res) {
          const filteredRes = res.exams.filter((ex) => ex.levelId === level);
          setResults(filteredRes);
        }
      }
    };

    getExmas();
  }, [level]);

  return (
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
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
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto pb-10">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Past Papers
          </h1>

          <div className="mt-10 w-full text-text-color text-sm ">
            <div className="flex items-center justify-start gap-2 px-0 mb-4 bg-transparent">
              <div
                onClick={() => {
                  setYear(null);
                  setLevel(null);
                }}
                className="w-fit py-3 hover:text-main-color cursor-pointer"
              >
                Documents{" "}
              </div>
              /
              <div
                onClick={() => setLevel(null)}
                className="w-fit py-3 hover:text-main-color cursor-pointer"
              >
                {year}
              </div>
              {level !== null && (
                <>
                  /
                  <div className="w-fit py-3 hover:text-main-color cursor-pointer">
                    {Levels.find((lvl) => lvl.id === level).name}
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center justify-start gap-2 px-4">
              <div className="w-[60px] min-w-fit"></div>
              <div className="flex-1 py-3 font-normal ">Title</div>
              <div className="w-[140px] py-3 font-normal max-sm:hidden">
                Info
              </div>
              <div className="w-[140px] py-3 font-normal max-sm:hidden">
                Modified
              </div>
            </div>
            {year === null
              ? Exams.map((year, index) => (
                  <div
                    key={index}
                    onClick={() => setYear(year.title)}
                    className="flex items-center justify-start gap-2 hover:bg-card-bg/60 cursor-pointer px-4 border-t border-card-bg"
                  >
                    <div className="w-[60px] min-w-fit">
                      <BsFolderFill className="text-2xl text-main-color" />
                    </div>
                    <div className="py-3 flex-1">{year.title}</div>
                  </div>
                ))
              : level === null
              ? Levels.map((level, index) => (
                  <div
                    key={index}
                    onClick={() => updateLevel(level.id)}
                    className="flex items-center justify-start gap-2 hover:bg-card-bg/60 cursor-pointer px-4 border-t border-card-bg"
                  >
                    <div className="w-[60px] min-w-fit">
                      <BsFolderFill className="text-2xl text-main-color" />
                    </div>
                    <div className="py-3 flex-1">{level.name}</div>
                  </div>
                ))
              : results.map((exam, index) => (
                  <Link
                    to={exam.url}
                    target="_blank"
                    key={index}
                    className="flex items-center justify-start gap-2 hover:bg-card-bg/60 cursor-pointer px-4 border-t border-card-bg"
                  >
                    <div className="w-[60px] min-w-fit">
                      <FaFilePdf className="text-2xl text-red-600/70" />
                    </div>
                    <div className="py-3 flex-1">{exam.name}</div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPapers;
