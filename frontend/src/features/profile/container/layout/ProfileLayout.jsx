import ProfileNavigation from "../../components/ProfileNavigation";

export default function ProfileLayout({ children }) {
  return (
    <div className="grid grid-cols-12 padding py-2">
      <div className="hidden lg:block border border-secondary-500 p-2 rounded-lg lg:col-span-2">
        <ProfileNavigation />
      </div>
      <div className="col-span-12 lg:col-span-10 lg:p-4">{children}</div>
    </div>
  );
}
