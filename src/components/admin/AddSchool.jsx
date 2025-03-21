import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
import { Combinations } from "../../content/Combinations";
function AddSchool({ showEditModal, setShowEditModal, level, editMode }) {
  const [adding, setAdding] = useState(false);
  const [studentName, setStudentName] = useState(
    editMode
      ? "ORDINARY LEVEL NATIONAL EXAMINATION (O-Level Exam), 2025-2026"
      : ""
  );
  const [due, setDue] = useState(editMode ? "2025-07-03" : "");

  const handleAddStudent = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setShowEditModal(false);
    }, 1000);
  };
  const customAnimation = keyframes`
  from{
    transform: scale(.9);
    opacity: 0;
  }
  to{
    transform: scale(1);
    opacity: 1;
  }
  `;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        <Fade duration={200} triggerOnce>
          <div
            onClick={() => setShowEditModal(false)}
            className=" w-full h-full absolute top-0 left-0 bg-black/15 z-10"
          ></div>
        </Fade>
        <Reveal
          duration={200}
          triggerOnce
          keyframes={customAnimation}
          className="z-10 w-full"
        >
          <div
            className={`w-full max-w-[900px] mx-auto max-lg:max-w-[95%] h-fit max-h-[95vh] overflow-y-auto rounded-2xl bg-body-bg  shadow-lg p-5 z-20`}
          >
            <h1 className="text-2xl font-bold tracking-tight text-text-color/80 border-b border-card-bg pb-3">
              Add School
            </h1>

            {/* content */}
            <div className="w-full h-fit min-h-[300px] max-md:min-h-fit mt-4 mb-20 max-md:mb-10">
              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    School Name
                  </h1>
                  <input
                    type="text"
                    required
                    placeholder="Enter school name"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    School Email
                  </h1>
                  <input
                    type="email"
                    required
                    placeholder="Enter village"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    School Type
                  </h1>
                  <select
                    required
                    defaultValue={"Select Level"}
                    className="border-2 bg-transparent border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  >
                    <option value={"Select Level"} disabled hidden selected>
                      Select Level
                    </option>
                    <option value="Secondary">Secondary</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                  </select>
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    District
                  </h1>
                  <input
                    type="text"
                    required
                    placeholder="enter disctrict"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Sector
                  </h1>
                  <input
                    type="text"
                    required
                    placeholder="Enter sector"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Village
                  </h1>
                  <input
                    type="text"
                    required
                    placeholder="Enter village"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
              </div>
            </div>

            {/* save button */}
            <div className="w-full max-w-[300px] max-sm:max-w-full ml-auto max-sm:ml-0 flex items-center max-sm:flex-col gap-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="border border-card-bg rounded-2xl transition active:scale-95 text-text-color w-full flex items-center justify-center h-[40px]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddStudent}
                className="bg-main-color rounded-2xl border-none transition active:scale-95 text-white w-full flex items-center justify-center h-[42px]"
              >
                {!adding ? "Save" : <LoadingWhite size="small" />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default AddSchool;
