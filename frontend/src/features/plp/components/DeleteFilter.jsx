import BaseImage from "@/components/ui/BaseImage";
import React from "react";

export default function DeleteFilter({queries , setQueris}) {
  return queries?.category || queries?.sort ? (
    <div
      className="flex justify-between items-center bg-secondary-300 p-3"
      onClick={() => {
        setQueris({ category: "", sort: "" });
      }}
    >
      <div className="flex items-center gap-x-2">
        <BaseImage
          src={"/assets/icons/filter.svg"}
          heigth="20"
          alt={"filter icon"}
        />
        <h5 className="font-medium">فیلتر</h5>
      </div>
      <div className="flex items-center gap-x-2">
        <BaseImage
          src={"/assets/icons/blue-close.svg"}
          heigth="20"
          alt={"close icon"}
        />
        <h5 className="font-medium text-primary-900">حذف فیلتر</h5>
      </div>
    </div>
  ) : null;
}
