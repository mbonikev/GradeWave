import React from "react";

function SidebarSectionTitle({ title }) {
  return (
    <p className="py-2 mt-1 text-xs uppercase font-medium text-text-color-weak/80">
      {title}
    </p>
  );
}

export default SidebarSectionTitle;
