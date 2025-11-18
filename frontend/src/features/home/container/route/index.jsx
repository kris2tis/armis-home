import {
  Categories,
  Collections,
  BestSellingProducts,
  AdvertisingBanner,
  Benfits,
  HeroSection,
  AmazingOffer,
} from "@/features/home/index";

export default function HomeWrapper() {
  return (
    <div className="flex flex-col gap-y-5">
      <HeroSection />
      {/* <BeautyIcon className="border-b border-color-1">
        <BaseImage
          src={"/assets/icons/arrow-down.svg"}
          alt={"arrow down icon"}
          heigth={24}
        />
      </BeautyIcon> */}
      <Categories />
      <AmazingOffer />
      <Collections />
      {/* <BeautyIcon>
        <BaseImage
          src={"/assets/icons/crown.svg"}
          alt={"crown down icon"}
          heigth={30}
        />
      </BeautyIcon> */}
      <BestSellingProducts />
      <AdvertisingBanner />
      <Benfits />
    </div>
  );
}
