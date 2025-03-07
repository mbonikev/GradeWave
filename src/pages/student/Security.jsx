import React from "react";
import { LuCheck, LuTrash, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function Security() {
  return (
    <div className="p-8 max-md:p-5 w-full h-fit flex flex-col gap-5 text-lightBlackText/80">
      <form className="w-full flex flex-col gap-4 max-w-[300px] max-md:max-w-full">
        {/* section title */}
        <h1 className="text-lg ">Change Password</h1>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Old Password</h1>
          <input
            type="password"
            name="password"
            placeholder="Old password"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">New Password</h1>
          <input
            type="password"
            name="password"
            placeholder="Old password"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <button className="h-[35px] mt-1 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-mainColor text-white text-sm font-medium">
          <LuCheck className="text-lg" />
          Submit
        </button>
      </form>

      <form className="w-full flex flex-col gap-4 max-w-[500px] mt-5 max-md:max-w-full">
        {/* section title */}
        <div className="flex flex-col">
          <h1 className="text-lg ">Delete Account</h1>
          <h1 className="text-sm font-normal text-lightBlackText/50">
            This account will be temporarily deactivated for potential recovery
            and will be permanently deleted automatically after 30 days.{" "}
          </h1>
        </div>
        <div className="w-full flex flex-col gap-1 max-w-[300px] max-md:max-w-full">
          <h1 className="text-sm font-normal">Confirm Password</h1>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <button className="h-[35px] mt-1 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-red-500 text-white text-sm font-medium">
          <LuTrash2 className="text-base" />
          Delete Account
        </button>
      </form>
    </div>
  );
}

export default Security;
