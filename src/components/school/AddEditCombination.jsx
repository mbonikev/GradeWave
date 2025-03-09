import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
import { Combinations } from "../../content/Combinations";
function AddEditCombination({ showEditModal, setShowEditModal, level, editMode }) {
  const [adding, setAdding] = useState(false);
  const [combName, setCombName] = useState("MCB");

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
            className={`w-[980px] max-w-[95%] h-fit max-h-[95%] overflow-y-auto rounded-2xl bg-body-bg  shadow-lg p-5 z-20 ${
              showEditModal ? "scale-100 transition-all " : "scale-75"
            } `}
          >
            <h1 className="text-2xl font-bold tracking-tight text-text-color/80 border-b border-card-bg pb-3">
              Add Combination
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
                    Combination Name
                  </h1>
                  <input
                    required
                    onChange={(e) => setCombName(e.target.value)}
                    placeholder="Enter combination name"
                    value={editMode ? combName : ""}
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

export default AddEditCombination;
