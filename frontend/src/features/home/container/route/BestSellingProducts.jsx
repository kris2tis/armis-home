import ProductList from "@/components/ProductList";
import SectionTitle from "@/components/ui/SectionTitle";
import { Suspense } from "react";

export default function BestSellingProducts() {
  return (
    <div className="flex flex-col gap-y-3">
      <SectionTitle title=" پر فروش ترین" />
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <ProductList query={"?sort=earliest"} />
      </Suspense>
    </div>
  );
}
