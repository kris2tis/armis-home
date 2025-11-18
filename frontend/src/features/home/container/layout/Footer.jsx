import BaseImage from "@/components/ui/BaseImage";
import Link from "next/link";
import { contact, headerNavigation, social, trust } from "../../utils/resourse";

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-3 ">
      <div className="bg-secondary-900 p-4 rounded-[15px_15px_0px_0px]">
        <div className="lg:max-w-[640px] lg:mx-auto">
          <BaseImage
            src={"/assets/brand/footer-logo.svg"}
            className="w-[112px] h-[40px] mx-auto"
            alt={"logo icon"}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-3 mt-5">
            {headerNavigation.map((n) => {
              const lastIndex = headerNavigation.length === n.id;
              return (
                !lastIndex && (
                  <Link key={n.id} className="col-span-1" href={n.href}>
                    <h5 className="text-secondary-800 font-medium">{n.name}</h5>
                  </Link>
                )
              );
            })}
          </div>
          <div className="h-[1px] bg-white-20 my-3 hidden lg:block"></div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-y-3 mt-5">
              {contact.map((c) => (
                <div className="flex gap-x-2 items-center" key={c.id}>
                  <div className="rounded-full bg-white-20 p-2">
                    <BaseImage src={c.icon} alt={c.name} heigth="24" />
                  </div>
                  <h5 className="text-white ">{c.name}</h5>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-y-3 mt-5">
              {trust.map((c) => (
                <BaseImage key={c.id} src={c.icon} alt={c.name} heigth="90" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-3 mt-3">
        <div className="flex gap-x-3">
          {social.map((s) => (
            <BaseImage key={s.id} src={s.icon} alt={s.alt} heigth="24" />
          ))}
        </div>
        <span className="text-secondary-800">
          تمامی حقوق این وب سایت متعلق به آرمیس میباشد
        </span>
      </div>
    </div>
  );
}
