import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuPlus } from "react-icons/lu";
import { Combinations } from "../../content/Combinations";
import AddEditCombination from "../../components/school/AddEditCombination";

function SchoolCombinations() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

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

  const handleEdit = () => {
    setEditMode(true);
    setShowEditModal(true);
  };

  useEffect(() => {
    if (!showEditModal) {
      setEditMode(false);
    }
  }, [showEditModal]);

  return (
    <div className="w-full h-fit flex-1 flex relative">
      {/* comb */}
      {showEditModal && (
        <AddEditCombination
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          editMode={editMode}
        />
      )}
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
          <div className="w-full flex items-center gap-2 justify-between mt-3">
            <h1 className="text-[28px] max-sm:text-lg font-bold tracking-tight text-text-color/80 flex items-center gap-2">
              Combinations
            </h1>
            <button
                onClick={() => setShowEditModal(true)}
              className="py-2 px-4 max-sm:px-2.5 w-fit rounded-xl flex items-center justify-center gap-1 bg-main-color hover:bg-main-color-dark-school active:scale-[.98] text-white text-sm font-medium"
            >
              <LuPlus className="text-xl" />
              <span className="max-sm:hidden">Add Combination</span>
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm mt-5">
            <table className="w-full text-left">
              <thead className="bg-card-bg-weak">
                <tr>
                  <th className="px-4 py-2 w-[40px] text-center">
                    <span className="flex gap-0.5 justify-center pl-2 w-full ">
                      N <sub className="pt-1">o</sub>
                    </span>
                  </th>
                  <th className="px-4 py-2 ">Title</th>
                  <th className="px-4 py-2">Total Enrolled Students</th>
                  <th className="px-4 py-2">Enrolled Students Now</th>
                  <th className="px-4 py-2 w-[90px]"></th>
                </tr>
              </thead>
              <tbody>
                {Combinations.map((comb, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 w-[40px] text-center text-text-color-weak/70">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 w-[130px]">{comb}</td>
                    <td className="px-4 py-2 w-[280px]">8,422</td>
                    <td className={`px-4 py-2`}>124</td>
                    <td className="px-4 py-2 flex items-center justify-center gap-1 w-[90px]">
                      <button
                        onClick={handleEdit}
                        className="text-main-color-school"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
                {Combinations.length === 0 && (
                  <tr>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2"> no Combination!</td>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolCombinations;
