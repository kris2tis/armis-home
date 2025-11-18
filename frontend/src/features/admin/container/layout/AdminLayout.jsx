import AdminSideBar from "./AdminSideBar";

export default function AdminBaseLayout({ children }) {
  return (
    <div className="flex  gap-x-3 p-2">
      <AdminSideBar />
      {children}
    </div>
  );
}
