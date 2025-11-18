import AdminBaseLayout from "@/features/admin/container/layout/AdminLayout";
export const metadata = {
  title: "پنل ادمین",
};
export default function AdminLayout({ children }) {
  return <AdminBaseLayout>{children}</AdminBaseLayout>;
}
