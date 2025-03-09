import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SchoolNavbar from "../../components/school/SchoolNavbar";
import SchoolSidebar from "../../components/school/SchoolSidebar";
import ConfirmLogout from "../../components/ConfirmLogout";
import { LuArrowLeft, LuPlus, LuSearch } from "react-icons/lu";
import { Students } from "../../content/Students";
import AddEditStudent from "../../components/school/AddEditStudent";

function SchoolStudentResults() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateShowSidebar, setAnimateShowSidebar] = useState(false);
  const [logoutWarn, setLogoutWarn] = useState(false);
  const { name } = useParams();
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
        <AddEditStudent
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
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolStudentResults;
