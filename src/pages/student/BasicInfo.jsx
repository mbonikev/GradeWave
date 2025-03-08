import React from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function BasicInfo() {
  return (
    <div className="py-5 px-3 w-full h-fit flex flex-col gap-5">
      {/* section title */}
      <h1 className="text-lg ">Account</h1>
      {/* profile */}
      <div className="w-fit flex items-center gap-3 text-lightBlackText/80">
        <div className="h-[55px] aspect-square rounded-full overflow-hidden">
          <img
            src="https://images.generated.photos/8XNA1ro5eHGfTVPn4AAkftQu8vOePXx4w7ZTb9AGABc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjU0NDIzLmpwZw.jpg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg leading-6 font-medium">Guest</h1>
          <Link
            to="/"
            className="text-sm font-medium text-main-color hover:underline"
          >
            Change photo
          </Link>
        </div>
      </div>
      <form className="w-full flex flex-col gap-4 mt-2 max-w-[500px] max-md:max-w-full">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Full Names</h1>
          <input
            type="text"
            name="username"
            placeholder="create a username"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Email</h1>
          <input
            type="email"
            name="email"
            placeholder="someone@example.com"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Current School</h1>
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Phone number</h1>
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>

        {/* section title */}
        <h1 className="text-lg mt-5">Identification Numbers</h1>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">National ID Number</h1>
          <input
            type="text"
            name="phone"
            placeholder="11980XXXXXXXXXXX"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Primary Index Number</h1>
          <input
            type="text"
            name="phone"
            placeholder="0000PR000000"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">O-Level Index Number</h1>
          <input
            type="text"
            name="phone"
            placeholder="0000PR000000"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">A-Level Index Number</h1>
          <input
            type="text"
            name="phone"
            placeholder="XXXXXCODEXXXXX"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <button className="h-[35px] mt-3 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-main-color text-white text-sm font-medium">
          <LuCheck className="text-lg" />
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BasicInfo;
