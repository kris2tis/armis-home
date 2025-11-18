import BaseImage from "../../../components/ui/BaseImage";
import Link from "next/link";

export default function ProductCard({
  _id,
  title,
  imageLink,
  price,
  offPrice,
  discount,
}) {
  const productImage = imageLink ? imageLink : "/aha";
  return (
    <Link href={`/products/${_id}`}>
      <div className="col-span-1 flex justify-between lg:flex-col lg:gap-y-3 gap-x-3 p-2 bg-secondary-200 rounded-xl">
        <BaseImage
          src={productImage}
          className="h-[99px] lg:h-[218px] !aspect-video"
          imageClassName="object-cover"
          alt={`product picture`}
        />
        <span className="hidden lg:block font-medium">{title || ""}</span>

        <div className="w-4/5 lg:w-full bg-white rounded-lg p-2 flex flex-col justify-between">
          <span className="lg:hidden">{title || ""}</span>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-x-2">
                <span className="body-sm text-secondary-800 line-through">
                  {price?.toLocaleString() || ""}
                </span>
                <BaseImage
                  src={"/assets/icons/toman.svg"}
                  alt={"toman icon"}
                  heigth="14"
                />
              </div>
              <span>{offPrice?.toLocaleString() || ""}</span>
            </div>
            <h5 className="bg-primary-700 text-primary-900 rounded-lg p-2 font-light">
              {discount?.toLocaleString() + "%" || ""}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
}
