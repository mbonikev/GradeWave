import React, { useState } from "react";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Compose from "./Compose";
import Announcements from "./Announcements";

function AdminAnnounce() {
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
  const [activeTab, setActiveTab] = useState("Compose");
  const tabs = [
    { title: "Compose", element: <Compose /> },
    { title: "Announcements", element: <Announcements /> },
  ];
  return (
    <div className="w-full min-h-svh flex-1 flex">
      {/* confirm */}
      {logoutWarn && (
        <ConfirmLogout logoutWarn={logoutWarn} setLogoutWarn={setLogoutWarn} />
      )}
      <AdminSidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <div
        className={`${
          showSidebar && ""
        } max-lg:transition-all max-lg:duration-200 max-lg:ease-in-out w-fit max-lg:w-full flex-1 h-svh flex flex-col z-10 bg-body-bg overflow-y-auto relative`}
      >
        {showSidebar && (
          <div
            onClick={closeSidebar}
            className={`w-full h-full absolute top-0 left-0 bg-black/60 z-30 transition-all duration-300 ease-in-out ${
              animateShowSidebar ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        )}
        <AdminNavbar openSidebar={openSidebar} setLogoutWarn={setLogoutWarn} />
        <div className="w-full flex-1 max-w-[1120px] px-5 mx-auto pb-10">
          <h1 className="text-[28px] font-bold text-left tracking-tight mt-3 text-text-color/80 w-full border-b border-card-bg-weak pb-2">
            Announce
          </h1>

          <div className="w-full flex-1 overflow-y-auto p-0 relative">
            <div className="w-full h-full flex flex-col">
              {/* tabs */}
              <div className="h-[45px] max-md:h-[55px] hidden_scrollbar w-full overflow-x-auto border-b border-stone-100 flex flex-row gap-0">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`w-fit h-full whitespace-nowrap px-3 text-sm font-medium transition duration-200 ${
                      activeTab === tab.title
                        ? "border-b-2 border-main-color text-text-color"
                        : "border-b-0 border-transparent text-text-color-weak"
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

export default AdminAnnounce;
