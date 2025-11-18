import BaseImage from "@/components/ui/BaseImage";
import Link from "next/link";
import { createNavigation, listNavigation } from "../../utils/resourse";

export default async function AdminSideBar() {
  return (
    <div className="hidden lg:flex lg:flex-col min-h-[500px] gap-y-3 min-w-[100px] bg-secondary-150 p-2 rounded-sm">
      <Link className="flex-center-center" href={`/admin`}>
        <BaseImage
          src={"/assets/brand/simple-logo.svg"}
          alt={"armis icon"}
          heigth="45"
        />
      </Link>

      <div className="flex flex-col items-center gap-y-3">
        {createNavigation.map((cN) => (
          <Link href={`/admin/${cN.href}`}>
            <BaseImage
              src={`/assets/icons/${cN.iconName}.svg`}
              alt={`${cN.iconName} icon`}
              heigth="18"
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center gap-y-3 my-7">
        {listNavigation.map((cN) => (
          <Link href={`/admin/${cN.href}`}>
            <BaseImage
              src={`/assets/icons/${cN.iconName}.svg`}
              alt={`${cN.iconName} icon`}
              heigth="18"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
