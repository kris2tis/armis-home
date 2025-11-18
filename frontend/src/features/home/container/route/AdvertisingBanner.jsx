import BaseImage from "@/components/ui/BaseImage";

export default function AdvertisingBanner() {
  return (
    <div className="lg:px-10">
      <div className="bg-[url(/assets/bg-1.svg)]  bg-blend-overlay p-5  flex flex-col items-center gap-y-7 lg:flex-row lg:justify-between lg:rounded-2xl">
        <h3 className="text-white">اینستاگرام مارو دنبال کن حتما</h3>
        <div className="flex items-center gap-x-3">
          <h3 className="text-white">Armin-Home</h3>
          <BaseImage
            src={"/assets/icons/instagram.svg"}
            heigth={40}
            alt={"instagram icon"}
          />
        </div>
      </div>
    </div>
  );
}
