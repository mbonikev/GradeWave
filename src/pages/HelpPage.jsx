import React from "react";
import { BannerBlue } from "../assets";
import { Combinations } from "../content/Combinations";

const HelpPage = () => {
  return (
    <div className="w-full bg-body-bg p-5 max-lg:space-y-7">
      <div className="w-full h-fit relative">
        <h1 className="bg-white z-30 text-text-color font-bold tracking-tight text-2xl w-fit h-fit px-4 py-2 rounded-2xl  absolute left-0 -bottom-5 right-0 mx-auto">
          GradeWave
        </h1>
        <div className="w-full max-w-4xl mx-auto rounded-3xl h-[200px] bg-main-color overflow-hidden relative">
          <img
            src={BannerBlue}
            className="w-full h-fit min-h-full object-cover"
          />
        </div>
      </div>
      <div className=" px-6 max-lg:px-2">
        <div className="max-w-4xl mx-auto p-6 max-lg:p-0">
          <div className="space-y-6">
            <div className="w-full h-fit min-h-[300px] max-md:min-h-fit mt-4 mb-20 max-md:mb-10">

              <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Full Names
                  </h1>
                  <input
                    placeholder="Full Names"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    Email
                  </h1>
                  <input
                    required
                    type="email"
                    placeholder="Enter email"
                    className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
              </div>


              <div className="w-full grid grid-cols-1 gap-5 mt-5">
                <div className="w-full h-fit">
                  <h1 className="text-base font-normal opacity-80 mb-2">
                    How can we help you?
                  </h1>
                  <textarea
                    type="email"
                    name="email"
                    placeholder="Write Request"
                    className="border-2 w-full border-stone-200 focus:border-main-color outline-none rounded-xl h-[135px] py-2.5 px-4 max-md:w-full text-base placeholder:text-text-color-weak/70"
                  />
                </div>
              </div>

              {/* save button */}
              <div className="w-full max-w-[300px] mt-8 max-sm:max-w-full ml-auto max-sm:ml-0 flex items-center max-sm:flex-col gap-2">
                <button className="border border-card-bg rounded-2xl transition active:scale-95 text-text-color w-full flex items-center justify-center h-[40px]">
                  Cancel
                </button>
                <button className="bg-main-color rounded-2xl border-none transition active:scale-95 text-white w-full flex items-center justify-center h-[42px]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
