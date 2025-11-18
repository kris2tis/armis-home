import CategoryCard from "@/features/home/container/route/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { categories } from "../../utils/resourse";

export default function Categories() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <SectionTitle titleClassName="" title="دسته بندی ها" />
      <div className="grid grid-cols-3 justify-between w-full gap-[42px]">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}
