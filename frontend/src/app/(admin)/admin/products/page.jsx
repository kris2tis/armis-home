import ProductWrapper from "@/features/admin/components/ProductWrapper";
import  { Suspense } from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-y-2.5 w-full">
      <span className="font-bold lg:text-[16px]">محصولات</span>
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <ProductWrapper />
      </Suspense>
    </div>
  );
}
