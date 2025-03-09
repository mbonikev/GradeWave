import React from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LogoWhite } from "../../assets";
import { PiPaperPlaneRightFill } from "react-icons/pi";

function Compose() {
  return (
    <div className="py-5 px-3 w-full h-fit flex flex-col gap-5">
      {/* section title */}
      <form className="w-full flex flex-col gap-4 mt-2 max-w-[500px] max-md:max-w-full">
        <div className="w-full h-fit flex flex-col gap-1">
          <h1 className="text-sm font-normal">Announce to</h1>
          <select
            required
            defaultValue={"Select Reciever"}
            className="ring-1 bg-transparent ring-stone-200 focus:border-main-color outline-none font-medium rounded-xl px-4 h-[35px] text-sm w-full placeholder:text-text-color-weak/60"
          >
            <option value={"Select Reciever"} disabled hidden selected>
              Select Reciever
            </option>
            <option value="Students Only">Students Only</option>
          </select>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Message</h1>
          <textarea
            type="email"
            name="email"
            placeholder="write message"
            className="ring-1 ring-stone-200 rounded-xl h-[135px] py-2.5 px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <button className="py-2 mt-3 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-main-color text-white text-sm font-medium">
          Announce
          <PiPaperPlaneRightFill className="text-lg" />
        </button>
      </form>
    </div>
  );
}

export default Compose;
