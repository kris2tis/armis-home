import BaseImage from "@/components/ui/BaseImage";
import { getUserProfileApi } from "@/services/authServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function EditProfile() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  const { user } = await getUserProfileApi(option);
  return (
    <Link href={"/profile/edit-profile"}>
      <div className="flex justify-between py-2">
        <span className="font-medium">{user?.name}</span>
        <BaseImage src={"/assets/icons/pen.svg"} heigth={20} alt={"pen icon"} />
      </div>
    </Link>
  );
}
