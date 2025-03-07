import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IntroGif } from "../../assets";
import StudentSidebar from "../../components/student/StudentSidebar";
import StudentNavbar from "../../components/student/StudentNavbar";
import BasicInfo from "./BasicInfo";
import Security from "./Security";

function StudentSettings() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
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
  const [activeTab, setActiveTab] = useState("Basic info");
  const tabs = [
    { title: "Basic info", element: <BasicInfo /> },
    { title: "Security", element: <Security /> },
  ];
  return (
    <div className="w-full min-h-svh overflow-y-auto flex-1 flex">
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
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto pb-10">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Settings
          </h1>

          <div className="w-full flex-1 overflow-y-auto p-0 relative">
            <div className="w-full h-full flex flex-col">
              {/* tabs */}
              <div className="h-[45px] max-md:h-[55px] hidden_scrollbar w-full overflow-x-auto border-b px-5 border-stone-100 flex flex-row gap-0">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-fit h-full whitespace-nowrap px-3 text-sm font-medium transition duration-200 ${
                      activeTab === tab.title
                        ? "border-b-2 border-mainColor text-lightBlackText/80"
                        : "border-b-0 border-transparent text-lightBlackText/50"
                    }`}
                    onClick={() => setActiveTab(tab.title)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              {/* tab contents */}
              <div className="w-full h-fit flex-1 overflow-y-auto">
                {tabs.find((tab) => tab.title === activeTab)?.element}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSettings;
