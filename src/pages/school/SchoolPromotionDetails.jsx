import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowLeft, LuPlus, LuSearch } from "react-icons/lu";
import { Students } from "../../content/Students";
import AddEditCombination from "../../components/school/AddEditCombination";

function SchoolPromotionDetails() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const { year, level } = useParams();
  const [filter, setFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(Students);
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

  useEffect(() => {
    let filtered = Students;

    if (filter !== "All") {
      filtered = filtered.filter((student) => student.status === filter);
    }

    if (searchValue !== "") {
      filtered = filtered.filter((student) =>
        student.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredStudents(filtered);
  }, [filter, searchValue]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowEditModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      {/* add/edit Student */}
      {showEditModal && (
        <AddEditCombination
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          year={year}
          level={level}
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
        <div className="w-full h-fit max-w-[1120px] px-5 max-sm:px-2 mb-10 mx-auto">
          <div className="w-full flex items-start gap-2 justify-between">
            <h1 className="text-[28px] max-sm:text-lg font-bold tracking-tight mt-3 text-text-color/80 flex items-center gap-2">
              <Link
                to="/school_manage_students"
                className="size-9 rounded-full bg-card-bg-weak hover:bg-card-bg flex items-center justify-center"
              >
                <LuArrowLeft className="text-xl max-sm:text-lg stroke-[3px]" />
              </Link>
              {level} - {year}
            </h1>
            {year === "2025-2026" && (
              <button
                onClick={() => setShowEditModal(true)}
                className="py-2 mt-3 px-4 max-sm:px-2.5 w-fit rounded-xl flex items-center justify-center gap-1 bg-main-color hover:bg-main-color-dark-school active:scale-[.98] text-white text-sm font-medium"
              >
                <LuPlus className="text-xl" />
                <span className="max-sm:hidden">Add Student</span>
              </button>
            )}
          </div>
          <div className="w-full flex items-center justify-end gap-2 mt-5 mb-4">
            <select
              name="Type"
              className="block w-[120px] max-md:w-fit max-md:pr-4 px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option disabled={year === "2025-2026"} value="Passed">
                Passed
              </option>
              <option disabled={year === "2025-2026"} value="Failed">
                Failed
              </option>
            </select>
            <div className="flex-1 max-w-[230px] max-md:max-w-full h-fit relative">
              <LuSearch className="absolute top-0 bottom-0 my-auto left-2.5 text-text-color-weak " />
              <input
                type="text"
                className="block w-full max-sm:flex-1 pl-8 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm placeholder:text-text-color-weak"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-card-bg text-text-color text-sm">
            <table className="w-full text-left">
              <thead className="bg-card-bg-weak">
                <tr>
                  <th className="px-4 py-2 w-[40px] text-center">
                    <span className="flex gap-0.5 justify-center pl-2 w-full ">
                      N <sub className="pt-1">o</sub>
                    </span>
                  </th>
                  <th className="px-4 py-2">Student ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Grades</th>
                  <th className="px-4 py-2 w-[100px]">Combination</th>
                  <th className="px-4 py-2 w-[90px]"></th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2 w-[40px] text-center text-text-color-weak/70">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 w-[130px]">{student.id}</td>
                    <td className="px-4 py-2 w-[280px]">{student.name}</td>
                    <td
                      className={`px-4 py-2 ${
                        student.progress < 50 ? "text-red-500" : ""
                      }`}
                    >
                      {year !== "2025-2026" ? (
                        <span>{student.status}</span>
                      ) : (
                        <span className="text-text-color-weak/60">N/A</span>
                      )}
                    </td>
                    <td
                      className={`px-4 py-2 ${
                        student.progress < 50 ? "text-red-500" : ""
                      }`}
                    >
                      {year !== "2025-2026" ? (
                        <span>{student.progress}%</span>
                      ) : (
                        <span className="text-text-color-weak/60">N/A</span>
                      )}
                    </td>
                    <td className="px-4 py-2 w-[100px]">
                      {level === "A-Level" ? (
                        student.combination
                      ) : (
                        <span className="text-text-color-weak/60">N/A</span>
                      )}
                    </td>
                    <td className="px-4 py-2 flex items-center justify-center gap-1 w-[90px]">
                      {year === "2025-2026" ? (
                        <button
                          onClick={handleEdit}
                          className="text-main-color-school"
                        >
                          Edit
                        </button>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
                {filteredStudents.length === 0 && (
                  <tr>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2">Student not found!</td>
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

export default SchoolPromotionDetails;
