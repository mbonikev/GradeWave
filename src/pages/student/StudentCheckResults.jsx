import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";

function StudentCheckResults() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [role, setRole] = useState(1);
  const [loading, setLoading] = useState(true);
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
        <StudentNavbar openSidebar={openSidebar} />
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            National Examination Results
          </h1>
          <div className="w-full mt-10 max-lg:mt-5 mx-auto h-fit pb-10 flex items-center justify-start flex-col">
            <div className="w-full lg:max-w-[550px] h-fit flex flex-col items-start justify-start">
              <h1 className="text-base font-normal opacity-80 mt-6">
                Choose your Level <span className="text-red-500">*</span>
              </h1>
              <div className="w-full h-fit  bg-stone-200/60 p-1 rounded-2xl mt-3">
                <div className="w-full flex select-none items-center justify-start gap-1 relative">
                  {/* indicator */}
                  <div
                    className={`w-1/2 h-full bg-white absolute top-0 left-0 transition-all duration-200 rounded-xl ease-in-out ${
                      role === 1 ? "translate-x-0 " : "translate-x-full"
                    }`}
                  ></div>
                  {/* student */}
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
                  {/* school */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCheckResults;
