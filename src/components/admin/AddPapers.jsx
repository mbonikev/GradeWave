import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
import { Combinations } from "../../content/Combinations";
function AddPapers({ showEditModal, setShowEditModal, level, editMode }) {
  const [adding, setAdding] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };
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
              Add Past Paper
            </h1>

            {/* content */}
            <div className="w-full h-fit min-h-[300px] max-md:min-h-fit mt-4 mb-20 max-md:mb-10">
              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Exam Year
                  </h1>
                  <select
                    required
                    defaultValue={"Select Year"}
                    className="border-2 bg-transparent border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  >
                    <option value={"Select Year"} disabled hidden selected>
                      Select Year
                    </option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Level
                  </h1>
                  <select
                    required
                    defaultValue={"Select Level"}
                    className="border-2 bg-transparent border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  >
                    <option value={"Select Level"} disabled hidden selected>
                      Select Level
                    </option>
                    <option value="P6">P6</option>
                    <option value="S6 General Education">
                      S6 General Education
                    </option>
                    <option value="S3">S3</option>
                    <option value="TTC">TTC</option>
                    <option value="TVET">TVET</option>
                  </select>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 mt-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Upload PDF
                  </h1>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="pdf-upload"
                  />
                  <label
                    htmlFor="pdf-upload"
                    className="border-2 bg-transparent border-card-bg focus:border-main-color focus:border-main outline-none font-medium rounded-2xl px-3 py-2 w-full flex items-center justify-center cursor-pointer transition"
                  >
                    {selectedFile ? selectedFile.name : "Choose a PDF file"}
                  </label>
                </div>
              </div>
            </div>

            {/* save button */}
            <div className="w-full max-w-[300px] max-sm:max-w-full ml-auto max-sm:ml-0 flex items-center max-sm:flex-col gap-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="border border-card-bg  rounded-2xl transition active:scale-95 text-text-color w-full flex items-center justify-center h-[40px]"
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

export default AddPapers;
