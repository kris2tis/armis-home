import RelationCard from "@/features/pdp/components/RelationCard";
import BaseImage from "@/components/ui/BaseImage";
import { bestSellingProducts } from "@/resourses";

export default function RelationProduct() {
  return (
    <div className="flex flex-col gap-y-3 mt-20">
      {/* Title */}
      <div className="relative mx-auto w-max flex justify-center">
        <BaseImage
          src={"/assets/icons/highlight_05.svg"}
          heigth="24"
          className="!absolute -right-2 -top-2"
          alt={"highlight_05"}
        />
        <h3 className={`font-light lg:font-bold lg:text-[24px]`}>
          محصولات مرتبط
        </h3>
      </div>
      {/* Products */}
      <div className=" overflow-x-scroll flex lg:justify-center gap-x-3 hideScroollbar">
        {bestSellingProducts.map((p) => (
          <RelationCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
