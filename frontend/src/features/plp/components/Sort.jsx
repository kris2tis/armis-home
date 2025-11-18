import BaseImage from "@/components/ui/BaseImage";
import { sorts } from "../utils/resourse";

export default function Sort({ onClick, productLength, className = "" }) {
  return (
    <div className={`${className} flex justify-between bg-secondary-300 p-3`}>
      <div className="flex items-center gap-x-1">
        <div className="hidden lg:flex gap-x-2">
          <BaseImage src={"/assets/icons/sort.svg"} heigth="24" />
          <h5>مرتب سازی : </h5>
        </div>
        <div className="flex items-start gap-y-3 flex-col lg:flex-row lg:items-center gap-x-3">
          {sorts.map((s, index) => (
            <div
              onClick={onClick}
              key={index}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-secondary-400" value={s.englistSlug}>
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <span className="hidden lg:block">{productLength} محصول موجود است</span>
    </div>
  );
}
