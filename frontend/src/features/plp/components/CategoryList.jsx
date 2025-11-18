"use client";
import DropDown from "@/components/ui/DropDown";
import { useGetCategories } from "@/hooks/useGetData";

export default function CategoryList({ onClick, queries }) {
  const { categories, isLoadingCategories } = useGetCategories();
  return (
    <DropDown className="block" title={"دسته بندی"}>
      <div className="flex flex-col gap-y-3 p-3">
        {!isLoadingCategories
          ? categories?.map((c, index) => {
              const isChecked = queries?.category === c.englishTitle;
              return (
                <label
                  key={index}
                  onClick={onClick}
                  className="flex items-center gap-x-3"
                >
                  <input
                    type="checkbox"
                    value={c.englishTitle}
                    checked={isChecked}
                  />
                  <span>{c.title}</span>
                </label>
              );
            })
          : "..."}
      </div>
    </DropDown>
  );
}
