import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmLogout from "../../components/ConfirmLogout";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Schools } from "../../content/Schools";
import EditExam from "../../components/admin/EditExam";
import { LuArrowLeft, LuPlus, LuSearch } from "react-icons/lu";
import AddSchool from "../../components/admin/AddSchool";

function AdminSchools() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const { year, level } = ["2024-2025", "A-Level"];
  const [filter, setFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [filteredSchools, setFilteredSchools] = useState(Schools);
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
    let filtered = Schools;

    if (filter !== "All") {
      filtered = filtered.filter((school) => school.schoolType === filter);
    }

    if (searchValue !== "") {
      filtered = filtered.filter((school) =>
        school.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredSchools(filtered);
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
        <AddSchool
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
        <div className="w-full h-fit max-w-[1120px] px-5 max-sm:px-2 mb-10 mx-auto">
          <div className="w-full flex items-start gap-2 justify-between">
            <h1 className="text-[28px] max-sm:text-lg font-bold tracking-tight mt-3 text-text-color/80 flex items-center gap-2">
              Schools
            </h1>
            <button
              onClick={() => setShowEditModal(true)}
              className="py-2 mt-3 px-4 max-sm:px-2.5 w-fit rounded-xl flex items-center justify-center gap-1 bg-main-color hover:bg-main-color active:scale-[.98] text-white text-sm font-medium"
            >
              <LuPlus className="text-xl" />
              <span className="max-sm:hidden">Add School</span>
            </button>
          </div>
          <div className="w-full flex items-center justify-end gap-2 mt-5 mb-4">
            <select
              name="Type"
              className="block w-[190px] max-md:w-fit max-md:pr-4 px-4 py-2 bg-white border border-card-bg rounded-xl shadow-sm sm:text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Primary & Secondary">Primary & Secondary</option>
            </select>
            <div className="flex-1 max-w-[230px] max-md:max-w-full h-fit relative">
              <LuSearch className="absolute top-0 bottom-0 my-auto left-2.5 text-text-color-weak " />
              <input
                type="text"
                className="block w-full max-sm:flex-1 pl-8 py-2 bg-white border border-card-bg outline-none rounded-xl shadow-sm sm:text-sm placeholder:text-text-color-weak"
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
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">N. of Candidates</th>
                  <th className="px-4 py-2">School Type</th>
                  <th className="px-4 py-2">District</th>
                  <th className="px-4 py-2">Sector</th>
                  <th className="px-4 py-2">Village</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchools.map((school, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 w-[40px] text-center text-text-color-weak/70">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {school.name}
                    </td>
                    <td className="px-4 py-2 w-[60px]">
                      {school.numberOfCandidates}
                    </td>
                    <td className={`px-4 py-2 whitespace-nowrap`}>
                      {school.schoolType}
                    </td>
                    <td className={`px-4 py-2 `}>{school.district}</td>
                    <td className="px-4 py-2">{school.sector}</td>
                    <td className="px-4 py-2">
                      {school.sector}
                    </td>
                  </tr>
                ))}
                {filteredSchools.length === 0 && (
                  <tr>
                    <td className="px-4 py-2 text-text-color-weak/70">-</td>
                    <td className="px-4 py-2">School not found!</td>
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

export default AdminSchools;
