import BaseImage from "@/components/ui/BaseImage";

import Link from "next/link";
import { Suspense } from "react";
import LogoutProfile from "./ui/ProfileAction";
import EditProfile from "./EditProfile";

export default function ProfileNavigation() {
  return (
    <div className={`w-full`}>
      {/* Edit Profile */}
      <div className="col-span-1 border-b border-secondary-500 lg:border-hidden">
        <Suspense
          fallback={
            <div className="w-full h-8 bg-secondary-500 animate-pulse rounded-xs"></div>
          }
        >
          <EditProfile />
        </Suspense>
      </div>
      <Link href={"/profile/payment"}>
        <div className="flex justify-between py-2">
          <div className="flex items-center gap-x-2 ">
            <BaseImage
              src={"/assets/icons/profile-bag.svg"}
              heigth={20}
              alt={"black bag icon"}
            />
            <span className="body-sm">سفارشات</span>
          </div>
          <BaseImage
            src={"/assets/icons/arrow-left.svg"}
            heigth={20}
            alt={"arrow left icon"}
          />
        </div>
      </Link>

      <LogoutProfile />
    </div>
  );
}
