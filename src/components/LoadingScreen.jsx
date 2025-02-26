import React from "react";
import { IntroGif } from "../assets";

function LoadingScreen({ animateFetching }) {
  return (
    <div
      className={`w-full h-svh fixed top-0 left-0 z-50 bg-white/90 flex items-center justify-center ${
        animateFetching ? "opacity-100" : "opacity-0"
      }`}
    >
      <video
        muted
        loop
        preload="auto"
        autoPlay
        playsInline
        src={IntroGif}
        className="h-[120px]"
      ></video>
    </div>
  );
}

export default LoadingScreen;
