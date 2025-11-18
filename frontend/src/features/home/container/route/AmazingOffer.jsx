import AmagzingOfferTimer from "@/features/home/components/TimerWrapper";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

export default function AmazingOffer() {
  return (
    <div className="flex flex-col gap-y-3 lg:flex-row gap-x-3">
      <AmagzingOfferTimer />
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <ProductList query={"?category=Mattresses"} />
      </Suspense>
    </div>
  );
}
