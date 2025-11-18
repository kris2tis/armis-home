import PeymentList from "@/features/profile/components/PeymentList";
import { Suspense } from "react";

export default async function PaymentPage() {
  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <span>محصولات خریداری شد</span>
      </div>
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <PeymentList />
      </Suspense>
    </div>
  );
}
