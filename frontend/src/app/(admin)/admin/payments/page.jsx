import PaymentsWrapper from "@/features/admin/components/PaymentsWrapper";
import { Suspense } from "react";

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-y-2.5 w-full">
      <span className="font-bold lg:text-[16px]">محصولات خریداری شده</span>
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <PaymentsWrapper />
      </Suspense>
    </div>
  );
}
