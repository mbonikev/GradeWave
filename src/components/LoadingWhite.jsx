import React from "react";

function LoadingWhite({ size }) {
  return (
    <div
      className={`loader_white ${
        size === "small"
          ? "small"
          : size === "medium"
          ? "medium"
          : size === "large"
          ? "large"
          : ""
      }`}
    ></div>
  );
}

export default LoadingWhite;
