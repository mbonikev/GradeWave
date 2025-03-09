import React from "react";

function SidebarSectionTitle({ title }) {
  return (
    <p className="py-1 mt-3 text-xs uppercase font-medium text-text-color-weak/80">
      {title}
    </p>
  );
}

export default SidebarSectionTitle;
