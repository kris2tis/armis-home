"use client";
import React, { useState } from "react";
import BaseImage from "./BaseImage";

export default function ReadMore({ text , className }) {
  const [isOpen, setIsOpen] = useState(text.length > 200 ? true : false);

  return (
    <div className={`${className} relative`}>
      {isOpen ? text.slice(0, 300) : text}
      <div
        className={`${
          isOpen
            ? "absolute bottom-0 bg-linear-to-b from-0% from-transparent to-white to-70%"
            : ""
        } flex items-end justify-center  h-full w-full  `}
      >
        <span
          className="text-primary-900 mt-3"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <div className="flex gap-x-3">
              مطالعه بیشتر{" "}
              <BaseImage
                src={"/assets/icons/blue-plus.svg"}
                alt={"plue plus"}
                heigth="24"
              />
            </div>
          ) : (
            <div className="flex gap-x-3">
              مطالعه کمتر{" "}
              <BaseImage
                src={"/assets/icons/blue-minus.svg"}
                alt={"plue minus"}
                heigth="24"
              />
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
