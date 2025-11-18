import { CategoryList, DeleteFilter } from "@/features/plp/index";
import MobileFilters from "./MobileFilters";

export default function PlpSideBar({
  queries,
  setQueris,
  productCount,
  setIsOpenDrawer,
}) {
  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-y-3">
      <DeleteFilter queries={queries} setQueris={setQueris} />

      <CategoryList
        queries={queries}
        onClick={(e) => {
          setQueris((prev) => ({
            ...prev,
            category: e.target.value,
          }));
        }}
      />

      <MobileFilters
        productCount={productCount}
        queries={queries}
        setIsOpenDrawer={setIsOpenDrawer}
      />
    </div>
  );
}
