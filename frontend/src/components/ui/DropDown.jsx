"use client";

import { useState } from "react";
import BaseImage from "./BaseImage";

export default function DropDown({ title, children, className="" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className} bg-secondary-300`}>
      <div className="p-3" onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex justify-between">
          <span className="text-secondary-800">{title || ""}</span>
          <BaseImage
            src={`/assets/icons/${
              isOpen ? "arrow-top-dropdown.svg" : "arrow-down-dropdown.svg"
            }`}
            alt={"arrow icon"}
            heigth="24"
          />
        </div>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col p-2`}>
        {children}
      </div>
    </div>
  );
}
