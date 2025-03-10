import React from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LogoWhite } from "../../assets";

function BasicInfo() {
  return (
    <div className="py-5 px-3 w-full h-fit flex flex-col gap-5">
      {/* section title */}
      <h1 className="text-lg ">Account</h1>
      {/* profile */}
      <div className="w-fit flex items-center gap-3 text-text-color/80">
        <div className="h-[55px] aspect-square rounded-full overflow-hidden bg-main-color p-3">
          <img src={LogoWhite} className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg leading-6 font-medium">School</h1>
          <div
            className="text-sm font-medium cursor-pointer select-none text-main-color hover:underline"
          >
            Change photo
          </div>
        </div>
      </div>
      <form className="w-full flex flex-col gap-4 mt-2 max-w-[500px] max-md:max-w-full">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">School Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter school name"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Email</h1>
          <input
            type="email"
            name="email"
            placeholder="someone@example.com"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">District</h1>
          <input
            type="text"
            name="district"
            placeholder="School District"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Sector</h1>
          <input
            type="text"
            name="sector"
            placeholder="School District"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Village</h1>
          <input
            type="text"
            name="village"
            placeholder="School Village"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">School Contact</h1>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-text-color-weak/70"
          />
        </div>
        <button className="py-2 mt-3 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-main-color text-white text-sm font-medium">
          <LuCheck className="text-lg" />
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BasicInfo;
