import React, { useState } from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { TiWarning } from "react-icons/ti";
import LoadingWhite from "../LoadingWhite";
function AddEditStudent({ showEditModal, setShowEditModal }) {
  const [adding, setAdding] = useState(false);
  const handleAddStudent = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setShowEditModal(false);
    }, 1000);
  };
  const customAnimation = keyframes`
  from{
    // transform: scale(.9);
    opacity: 0;
  }
  to{
    // transform: scale(1);
    opacity: 1;
  }
  `;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
    >
      <Reveal
        duration={200}
        triggerOnce
        keyframes={customAnimation}
        className="w-full h-full"
      >
        <div className="w-full h-full relative flex items-center justify-center">
          <div
            onClick={() => setShowEditModal(false)}
            className=" w-full h-full absolute top-0 left-0 bg-black/15 z-10"
          ></div>
          <div
            className={`w-[980px] max-w-[95%] h-fit rounded-2xl bg-body-bg  shadow-lg p-5 z-20 ${
              showEditModal ? "scale-100 transition-all " : "scale-75"
            } `}
          >
            <div className="w-full max-w-[300px] ml-auto flex items-center max-sm:flex-col gap-2">
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
        </div>
      </Reveal>
    </div>
  );
}

export default AddEditStudent;
