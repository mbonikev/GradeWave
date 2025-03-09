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
        <div className="w-full max-w-4xl mx-auto rounded-3xl h-[170px] bg-main-color overflow-hidden relative">
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
                    placeholder="Full Names"
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
                    placeholder="Age"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
                  <div className="w-full h-fit">
                    <h1 className="text-base font-normal opacity-80 mb-2">
                      Combination
                    </h1>
                    <select
                      required
                      className="border-2 bg-transparent border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                    >
                      <option
                        value={"Select Combination"}
                        disabled
                        hidden
                        selected
                      >
                        Select Combination
                      </option>
                      {Combinations.map((comb, index) => (
                        <option key={index} value={comb}>
                          {comb}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    placeholder="Enter Village"
                    className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2 w-full placeholder:text-text-color-weak/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
