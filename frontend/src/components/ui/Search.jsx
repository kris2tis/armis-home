import React from "react";
import Button from "./Button";
import BaseImage from "./BaseImage";

export default function Search() {
  return (
    <div className="grid grid-cols-12 bg-secondary-100 rounded-lg pl-[16px]">
      <input
        className="py-[11px]  col-span-11 pr-[16px] placeholder:text-[#606060]"
        type="text"
        placeholder="جستجو ..."
      />

      <Button className="relative col-span-1 bg-transparent rounded-none border-transparent !p-0 flex justify-end items-center">
        <BaseImage
          src={"/assets/icons/search-normal.svg"}
          alt={"search icon"}
          heigth={24}
        />
      </Button>
    </div>
  );
}
