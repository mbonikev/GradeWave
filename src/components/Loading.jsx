import React from "react";

function Loading({ size }) {
  return (
    <div
      className={`loader ${
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

export default Loading;
