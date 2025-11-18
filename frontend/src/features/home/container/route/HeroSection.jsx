import BaseImage from "@/components/ui/BaseImage";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { heroBenefits } from "../../utils/resourse";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8">
      <Top />
      <Bttom />
    </div>
  );
}

function Top() {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex flex-col items-center lg:flex-row gap-y-9  **:lg:text-5xl">
        <h1>خواب راحت و آسوده </h1>
        <div className=" w-max  bg-secondary-900 rounded-lg flex items-end px-2.5">
          <div className="my-auto">
            <h1 className="text-white  font-light ">با آرمیس</h1>
          </div>

          <BaseImage
            className="m-[-40px_0px_-2px_-25px]"
            src={"/assets/brand/hero-image.svg"}
            heigth={90}
            alt={"a women sleeped"}
          />
        </div>
      </div>

      <div>
        <p className="text-center text-secondary-800">
          وارد کننده بهترین کالاهای خواب وارداتی از کشور های معتبر در سراسر جهان
        </p>
      </div>
      <Link href={"/products"}>
        <Button className="flex items-center gap-x-3 p-2 w-max">
          <span>مشاهده محصولات</span>
          <BaseImage
            src={"/assets/icons/arrow-left-short.svg"}
            alt={"arrow icon"}
            heigth={8}
          />
        </Button>
      </Link>
    </div>
  );
}

function Bttom() {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video  h-min-[230px] max-h-[230px] h-full w-full lg:!max-h-[375px]">
        <Image
          src={"/assets/brand/hero-image-2.svg"}
          alt={"bed picture"}
          fill
        />
      </div>
      <div
        className={`w-full lg:w-max lg:mx-auto lg:-mt-19.5 z-10 lg:gap-x-30  lg:py-6 lg:px-[71px] grid grid-cols-2 gap-3 lg:grid-cols-3 lg:bg-secondary-900 lg:justify-items-center rounded-[20px] `}
      >
        {heroBenefits.map((benefit) => {
          const isLastItem = heroBenefits.length === benefit.id;
          return (
            <div
              key={benefit.id}
              className={`${
                isLastItem ? "col-span-2 lg:col-span-1" : "col-span-1"
              } p-3  lg:!p-0 rounded-full w-full bg-secondary-900 lg:bg-transparent flex items-center gap-x-3`}
            >
              {/* Icon */}
              <div className="bg-white-20 p-2 rounded-full lg:rounded-lg">
                <BaseImage
                  src={benefit.iconSrc}
                  heigth={24}
                  alt={benefit.alt}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-y-1">
                <span className="text-white lg:text-[18px]">
                  {benefit.title}
                </span>
                <span className="caption text-secondary-800 lg:text-[13px]">
                  {benefit.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
