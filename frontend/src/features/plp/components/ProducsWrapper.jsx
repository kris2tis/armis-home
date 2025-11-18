"use client";

import { useState } from "react";
import useGetData from "@/hooks/useGetData";
import { useSearchParams } from "next/navigation";
import useOutsideClick from "@/hooks/useOutsideClick";
import useDisabledScroll from "@/hooks/useDisabledScroll";

import Drawer from "@/components/ui/Drawer";

import {
  CategoryList,
  PlpMain,
  PlpSideBar,
  useSetQueriesFormat,
  useSetQueries,
} from "@/features/plp/index";

export default function ProductListWrapper({ searchParams }) {
  const [queries, setQueris] = useState({ category: "", sort: "" });
  const [querisFormat, setQuerisFormat] = useState("");

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const searchParam = useSearchParams();
  const { productList, isLoading } = useGetData(querisFormat);
  const drawerRef = useOutsideClick(setIsOpenDrawer, isOpenDrawer);
  useDisabledScroll(isOpenDrawer);
  useSetQueriesFormat(searchParams, setQuerisFormat, setQueris);
  useSetQueries(searchParam, queries);

  return (
    <div className="grid grid-cols-12 gap-y-3 lg:gap-x-3">
      {/* SideBar */}
      <PlpSideBar
        queries={queries}
        setQueris={setQueris}
        productCount={productList?.length}
        setIsOpenDrawer={setIsOpenDrawer}
      />

      {/* Main */}
      <PlpMain productList={productList} isLoading={isLoading} />

      {/* Filter Menu */}
      <Drawer className="p-2" ref={drawerRef} isOpen={isOpenDrawer}>
        <CategoryList
          queries={queries}
          onClick={(e) => {
            setQueris((prev) => ({
              ...prev,
              category: e.target.value,
            }));
          }}
        />
      </Drawer>
    </div>
  );
}
