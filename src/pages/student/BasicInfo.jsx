import React from "react";
import { LuCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

function BasicInfo() {
  return (
    <div className="p-8 max-md:p-5 w-full h-fit flex flex-col gap-5">
      {/* section title */}
      <h1 className="text-lg ">Account</h1>
      {/* profile */}
      <div className="w-fit flex items-center gap-3 text-lightBlackText/80">
        <div className="h-[55px] aspect-square rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jCoAOgRVSf64y8kj2iEpwweXcsRpSq7YYw&s"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-base font-medium">Kevin Dermot</h1>
          <Link
            to="/"
            className="text-sm font-medium text-mainColor hover:underline"
          >
            Change photo
          </Link>
        </div>
      </div>
      <form className="w-full flex flex-col gap-4 mt-2 max-w-[300px] max-md:max-w-full">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-sm font-normal">Username</h1>
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
          <h1 className="text-sm font-normal">Country</h1>
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
            placeholder="phone number"
            className="ring-1 ring-stone-200 rounded-xl h-[35px] px-4 max-md:w-full text-sm placeholder:text-lightBlackText/30"
          />
        </div>
        <button className="h-[35px] mt-1 px-4 w-fit max-md:w-full rounded-xl flex items-center justify-center gap-1 bg-mainColor text-white text-sm font-medium">
        <LuCheck className="text-lg" />
          Save
        </button>
      </form>
    </div>
  );
}

export default BasicInfo;
