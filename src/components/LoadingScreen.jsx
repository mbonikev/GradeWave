import React from "react";
import { IntroGif } from "../assets";

function LoadingScreen() {
  return (
    <div className="w-full h-svh fixed top-0 left-0 bg-white flex items-center justify-center">
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
