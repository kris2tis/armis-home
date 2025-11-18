"use client";
import BaseImage from "@/components/ui/BaseImage";
import React, { useState } from "react";

export default function HeroBanner({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${
        isOpen ? "grid" : "!hidden"
      } hidden bg-primary-900 py-1.5 rounded-lg lg:grid grid-cols-3 items-center mt-3`}
    >
      <div className="col-span-1"></div>
      <div className="col-span-1 mx-auto">{children}</div>
      <div className="flex justify-end">
        <BaseImage
          onClick={() => {
            setIsOpen(false);
          }}
          src={"/assets/icons/close.svg"}
          alt={"close icon"}
          heigth={24}
        />
      </div>
    </div>
  );
}
