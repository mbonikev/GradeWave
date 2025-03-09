import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ImageAdmin,
  ImageSchool,
  ImageStudents,
  LogoBlack,
  LogoWhite,
} from "../assets";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { BsPersonVideo, BsShieldShaded } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CgSpinner } from "react-icons/cg";
import { LuArrowRight, LuSchool } from "react-icons/lu";
import Loading from "../components/Loading";

function Login() {
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleLoginStudent = () => {
    sessionStorage.setItem("loggedInStudent", true);
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleLoginSchool = () => {
    sessionStorage.setItem("loggedInSchool", true);
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleLoginAdmin = () =>{
    
  }

  const handleRole = (e) => {
    setRole(e);
    if (e === "school") {
      document.documentElement.style.setProperty("--main-color", "#00bc7d");
      document.documentElement.style.setProperty(
        "--main-color-weak",
        "#00bc7d27"
      );
    } else if (e === "student") {
      document.documentElement.style.setProperty("--main-color", "#3277f0");
      document.documentElement.style.setProperty(
        "--main-color-weak",
        "#3277f027"
      );
    } else {
      document.documentElement.style.setProperty("--main-color", "#101828");
      document.documentElement.style.setProperty(
        "--main-color-weak",
        "#10182827"
      );
    }
  };

  return (
    <div className="w-full h-svh grid grid-cols-2 max-lg:grid-cols-1 z-[60] bg-body-bg relative overflow-y-auto">
      {/* 1 */}
      <div className="w-full h-full p-6 flex flex-col">
        {/* logo */}
        <div className="flex items-center justify-start gap-1">
          <img src={LogoBlack} className="size-8" />
          <h1 className="text-xl font-medium">Grade Wave</h1>
        </div>

        {/* form */}
        <form className="w-full flex-1 py-[50px] flex flex-col items-start justify-center max-w-[400px] mx-auto">
          <h1 className="text-xl font-medium mb-5">Welcome Back</h1>
          {/* auth options */}
          <h1 className="text-base font-normal opacity-80 mt-2 mb-3">
            What's your Role?
          </h1>
          <div className="w-full h-fit  bg-stone-200/60 p-1 rounded-2xl">
            <div className="w-full flex select-none items-center justify-start gap-1 relative">
              {/* indicator */}
              <div
                className={`w-1/3 h-full bg-white absolute top-0 left-0 transition-all duration-200 rounded-xl ease-in-out ${
                  role === "student"
                    ? "translate-x-0 "
                    : role === "school"
                    ? "translate-x-[100%]"
                    : "translate-x-[200%]"
                }`}
              ></div>
              {/* student */}
              <div
                onClick={() => handleRole("student")}
                className={`w-full h-fit p-2.5 z-10 rounded-xl cursor-pointer flex gap-1.5 items-center justify-center flex-col transition-all ${
                  role === "student"
                    ? "text-main-color"
                    : "border-white/40 text-text-color-weak"
                }`}
              >
                <PiGraduationCapDuotone className="text-xl" />
                <p className="text-xs font-medium">STUDENT</p>
              </div>
              {/* school */}
              <div
                onClick={() => handleRole("school")}
                className={`w-full h-fit p-2.5 z-10 rounded-xl cursor-pointer flex gap-1.5 items-center justify-center flex-col transition-all ${
                  role === "school"
                    ? "text-main-color-school"
                    : "border-white/40 text-text-color-weak"
                }`}
              >
                <LuSchool className="text-xl" />
                <p className="text-xs font-medium">SHOOOL</p>
              </div>
              {/* admin */}
              <div
                onClick={() => handleRole("admin")}
                className={`w-full h-fit p-2.5 z-10 rounded-xl cursor-pointer flex gap-1.5 items-center justify-center flex-col transition-all ${
                  role === "admin"
                    ? "text-main-color"
                    : "border-white/40 text-text-color-weak"
                }`}
              >
                <BsShieldShaded className="text-xl" />
                <p className="text-xs font-medium">ADMIN</p>
              </div>
            </div>
          </div>

          {role === "student" ? (
            <>
              <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                Student ID
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="XXXX-XXX-XXXX"
                className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />
              <h1 className="text-base font-normal opacity-80 mt-4 mb-3">
                Password
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="Password"
                type="password"
                className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />

              <button className="bg-main-color hover:bg-main-color-dark text-white select-none text-base font-semibold px-3 py-2.5 w-full flex items-center justify-center gap-2 mt-5 rounded-2xl">
                Continue
              </button>
            </>
          ) : role === "school" ? (
            <>
              <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                School ID
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="XXX-XXXX"
                className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />
              <h1 className="text-base font-normal opacity-80 mt-4 mb-3">
                Password
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="Password"
                type="password"
                className="border-2 border-stone-200 focus:border-main-color-school outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />

              <button
                className={` bg-main-color-school hover:bg-main-color-dark-school text-white select-none text-base font-semibold px-3 py-2.5 w-full flex items-center justify-center gap-2 mt-5 rounded-2xl`}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h1 className="text-base font-normal opacity-80 mt-6 mb-3">
                School ID
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="XXX-XXXX"
                className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />
              <h1 className="text-base font-normal opacity-80 mt-4 mb-3">
                Password
              </h1>
              <input
                // disabled={!isAgree}
                // onClick={() => login()}
                required
                placeholder="Password"
                type="password"
                className="border-2 border-stone-200 focus:border-main-color outline-none font-medium rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2"
              />

              <button
                className={` bg-main-color text-white select-none text-base font-semibold px-3 py-2.5 w-full flex items-center justify-center gap-2 mt-5 rounded-2xl`}
              >
                Continue
              </button>
            </>
          )}
          <div className="my-7 w-full h-0.5 bg-stone-200 relative">
            <p className="bg-white absolute -top-3 left-0 right-0 mx-auto w-fit px-4">
              Or
            </p>
          </div>
          {loading ? (
            <div
              className={`group w-full flex items-center justify-between gap-2 ${
                role === "student"
                  ? "text-main-color hover:text-main-color-dark"
                  : role === "school"
                  ? "text-main-color-school hover:text-main-color-dark-school"
                  : "text-main-color"
              }  pointer-events-none select-none`}
            >
              <div className="flex items-center justify-start gap-2 group-[]:opacity-50">
                Continue as a Guest {role === "school" && "School"}
                <LuArrowRight className="text-lg translate-y-[1px]" />
              </div>
              <Loading size="small" />
            </div>
          ) : role === "student" ? (
            <button
              onClick={handleLoginStudent}
              className="flex items-center justify-start gap-2 text-main-color hover:text-main-color-dark select-none"
            >
              Continue as a Guest
              <LuArrowRight className="text-lg translate-y-[1px]" />
            </button>
          ) : role === "school" ? (
            <button
              onClick={handleLoginSchool}
              className="flex items-center justify-start gap-2 text-main-color-school hover:text-main-color-dark-school select-none"
            >
              Continue as a Guest School
              <LuArrowRight className="text-lg translate-y-[1px]" />
            </button>
          ) : (
            <button
              onClick={handleLoginAdmin}
              className="flex items-center justify-start gap-2 text-main-color select-none"
            >
              Continue as a Guest School
              <LuArrowRight className="text-lg translate-y-[1px]" />
            </button>
          )}
        </form>
        <p className="text-sm font-normal text-text-color-weak mb-2">
          By Signing in you agree to our{" "}
          <a className="cursor-pointer text-main-color hover:underline">
            Terms of service
          </a>{" "}
          and{" "}
          <a className="cursor-pointer text-main-color hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
      {/* 2 */}
      <div className="w-full p-5 h-svh sticky top-0 max-lg:hidden">
        <div
          className="w-full h-full rounded-2xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${
              role === "student"
                ? ImageStudents
                : role === "school"
                ? ImageSchool
                : ImageAdmin
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 text-[#f1f1f1] to-black/20 flex items-start justify-between p-10">
            <h1 className="text-base font-medium text-[#f1f1f1c7] max-w-[500px] text-left h-full flex items-end">
              Login to Continue.
            </h1>
            <div className="flex items-center justify-start gap-1 w-fit h-fit opacity-90 mb-5">
              <img src={LogoWhite} className="size-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
