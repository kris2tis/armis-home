"use client";

import BaseImage from "@/components/ui/BaseImage";
import Button from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";
import { useState } from "react";
import { Sort } from "@/features/plp/index";

export default function MobileFilters({productCount , queries , setIsOpenDrawer}) {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => setIsOpenTooltip((prev) => !prev)}
        className="lg:hidden relative flex items-center gap-x-2 bg-secondary-300 p-2"
      >
        <BaseImage
          src={"/assets/icons/filter.svg"}
          heigth="20"
          alt={"filter icon"}
        />
        <span className="font-medium text-secondary-900 body-sm">
          {queries?.sort || "مرتب سازی"}
        </span>
        <Tooltip isOpen={isOpenTooltip} queries={queries}>
          <Sort
            className="block"
            productLength={productCount}
            onClick={(e) =>
              setQueris((prev) => ({
                ...prev,
                sort: e.target.getAttribute("value"),
              }))
            }
          />
        </Tooltip>
      </Button>
      <Button
        onClick={() => setIsOpenDrawer((prev) => !prev)}
        className="lg:hidden flex items-center gap-x-2 bg-secondary-300 p-2"
      >
        <BaseImage
          src={"/assets/icons/filter.svg"}
          heigth="20"
          alt={"filter icon"}
        />
        <span className="font-medium text-secondary-900 body-sm">فیلتر</span>
      </Button>
    </div>
  );
}
