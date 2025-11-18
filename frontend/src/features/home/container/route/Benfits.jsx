import BaseImage from "@/components/ui/BaseImage";
import { benefits } from "../../utils/resourse";

export default function Benfits() {
  return (
    <div className="flex flex-col gap-y-5 mt-8">
      <div className="w-full rounded-lg flex  px-2.5">
        <BaseImage
          className="m-[-40px_0px_-2px_-30px] aspect-video h-[80px]"
          src={"/assets/women-benefits-sec.png"}
          alt={"a women sleeped"}
        />
        <div className="my-auto z-10">
          <h3 className=" font-medium">
            بهترین هارا در کنار ما تجره خواهید کرد چون ...
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-3">
        {benefits.map((b) => (
          <BenfitCard key={b.id} {...b} />
        ))}
      </div>
    </div>
  );
}

function BenfitCard({ title, icon, desc }) {    
  return (
    <div className="flex flex-col gap-y-3 col-span-1">
      <BaseImage src={icon} alt={title} heigth={35} className="w-max" />
      <h5 className="font-bold">{title}</h5>
      <p className="body-sm text-secondary-800 text-justify">{desc}</p>
    </div>
  );
}
