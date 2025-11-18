import React from "react";
import BaseImage from "../../../components/ui/BaseImage";
import Link from "next/link";

export default function BestSellingCard({ _id, imageSrc, title, price }) {
  return (
    <Link href={`/products/${_id}`}>
      <div className="flex justify-between lg:flex-col lg:gap-y-3 gap-x-3 p-2 bg-secondary-200 rounded-xl">
        <BaseImage
          src={imageSrc}
          className="h-[99px] lg:h-[218px]"
          imageClassName="object-center"
          alt={`${title} picture for product`}
        />
        <span className="hidden lg:block font-medium">{title || ""}</span>

        <div className="w-4/5 lg:w-full bg-white rounded-lg p-2 flex flex-col justify-between">
          <span className="lg:hidden font-medium">{title || ""}</span>
          <div className="flex justify-between items-center">
            <span className="body-sm text-secondary-800 line-through">
              {price || ""}
            </span>
            <div className="bg-primary-700 rounded-lg p-2">
              <BaseImage
                src={"/assets/icons/bag-black.svg"}
                heigth={20}
                alt={"black bag icon"}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
