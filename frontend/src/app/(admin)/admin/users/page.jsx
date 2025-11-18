import UsersWrapper from "@/features/admin/components/UsersWrapper";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-y-2.5 w-full">
      <span className="font-bold lg:text-[16px]">کاربران</span>
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <UsersWrapper />
      </Suspense>
    </div>
  );
}
