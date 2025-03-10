import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
import { Combinations } from "../../content/Combinations";
function AddEditStudent({ showEditModal, setShowEditModal, level, editMode }) {
  const [adding, setAdding] = useState(false);
  const [studentName, setStudentName] = useState(
    editMode ? "Ingabire Florence" : ""
  );
  const [studentAge, setStudentAge] = useState(editMode ? 17 : "");
  const [combination, setCombination] = useState(editMode ? "MCB" : "");
  const [guardianName, setGuardianName] = useState(
    editMode ? "Jeanne Muhoza" : ""
  );
  const [guardianContact, setGuardianContact] = useState(
    editMode ? "+250788123456" : ""
  );
  const [guardianRelationship, setGuardianRelationship] = useState(
    editMode ? "Mother" : ""
  );
  const [district, setDistrict] = useState(editMode ? "Kigali" : "");
  const [sector, setSector] = useState(editMode ? "Nyarugenge" : "");
  const [village, setVillage] = useState(editMode ? "Nyamirambo" : "");

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
          className="z-10"
        >
          <div
            className={`w-full max-lg:max-w-[95%] h-fit max-h-[95vh] overflow-y-auto rounded-2xl bg-body-bg  shadow-lg p-5 z-20`}
          >
            <h1 className="text-2xl font-bold tracking-tight text-text-color/80 border-b border-card-bg pb-3">
              Add Student ({level})
            </h1>

            {/* content */}
            <div className="w-full h-fit min-h-[300px] max-md:min-h-fit mt-4 mb-20 max-md:mb-10">
              {/* Basic Info */}
              <h1 className="text-sm font-normal opacity-80 text-text-color-weak/60 italic mb-2">
                Basic Info <span className="text-red-500">*</span>
              </h1>

              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Student Names
                  </h1>
                  <input
                    required
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Full Names"
                    value={studentName}
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Student Age
                  </h1>
                  <input
                    required
                    type="number"
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    placeholder="Age"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                {level !== "O-Level" && (
                  <div className="w-full h-fit">
                    <h1 className="text-base font-normal opacity-80 mb-2">
                      Combination
                    </h1>
                    <select
                      required
                      value={combination}
                      defaultValue={"Select Combination"}
                      onChange={(e) => setCombination(e.target.value)}
                      className="border-2 bg-transparent border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                    >
                      <option value={"Select Combination"} disabled hidden selected>
                        Select Combination
                      </option>
                      {Combinations.map((comb, index) => (
                        <option key={index} value={comb}>
                          {comb}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Parent/Guardian Info */}
              <h1 className="text-sm font-normal opacity-80 text-text-color-weak/60 italic mt-3 mb-2">
                Parent/Guardian Info <span className="text-red-500">*</span>
              </h1>
              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Guardian Name
                  </h1>
                  <input
                    required
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    placeholder="Guardian's Full Name"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Guardian Contact
                  </h1>
                  <input
                    required
                    type="tel"
                    value={guardianContact}
                    onChange={(e) => setGuardianContact(e.target.value)}
                    placeholder="Phone Number"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Guardian Relationship
                  </h1>
                  <select
                    required
                    value={
                      editMode ? guardianRelationship : "Select Relationship"
                    }
                    onChange={(e) => setGuardianRelationship(e.target.value)}
                    className="border-2 bg-transparent border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  >
                    <option disabled hidden selected>
                      Select Relationship
                    </option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Residence Info */}
              <h1 className="text-sm font-normal opacity-80 text-text-color-weak/60 italic mt-3 mb-2">
                Residence Info <span className="text-red-500">*</span>
              </h1>
              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    District
                  </h1>
                  <input
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Enter District"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Sector
                  </h1>
                  <input
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    placeholder="Enter Sector"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Village
                  </h1>
                  <input
                    required
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    placeholder="Enter Village"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
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

export default AddEditStudent;
