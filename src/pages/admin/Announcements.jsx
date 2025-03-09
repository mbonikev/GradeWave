import React from "react";
import { LuCheck, LuTrash, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { LogoWhite } from "../../assets";

function Announcements() {
  const Notifications = [
    {
      pfp: LogoWhite,
      name: "System",
      publishedAt: "24/02/2025",
      message: "4 days left to register your students.",
    },
    {
      pfp: LogoWhite,
      name: "Admin",
      publishedAt: "22/02/2025",
      message: "New guidelines for exam registration have been updated.",
    },
    {
      pfp: LogoWhite,
      name: "Support",
      publishedAt: "20/02/2025",
      message: "System maintenance scheduled for 28th February.",
    },
    {
      pfp: LogoWhite,
      name: "System",
      publishedAt: "18/02/2025",
      message: "Your school performance report is available.",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col gap-1 mt-3 py-1">
      {Notifications.map((annoucement, index) => (
        <div
          key={index}
          className="w-full h-fit p-2 cursor-pointer hover:bg-card-bg-weak rounded-2xl"
        >
          <div className="w-full flex items-start justify-start gap-3">
            <div className="size-8 rounded-full bg-main-color p-1.5 aspect-square">
              <img
                src={annoucement.pfp}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-sm text-text-color/90 line-clamp-3 max-w-[700px]">
                <strong>{annoucement.name} </strong>
                {annoucement.message} <br />
              </h1>
              <h1 className="text-sm text-text-color-weak/80 mt-1">2d</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Announcements;
