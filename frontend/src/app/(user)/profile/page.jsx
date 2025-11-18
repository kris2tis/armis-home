import ProfileNavigation from "@/features/profile/components/ProfileNavigation";

export const metadata = {
  title: "حساب کاربری",
};

export default function ProfilePage() {
  return (
    <div className="lg:hidden">
      <ProfileNavigation />
    </div>
  );
}
