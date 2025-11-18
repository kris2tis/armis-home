import MainPage from "@/features/admin/container/layout/MainPage";
import { Suspense } from "react";



export default async function DashboardPage() {
  return (
    <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
      <MainPage />
    </Suspense>
  );
}
