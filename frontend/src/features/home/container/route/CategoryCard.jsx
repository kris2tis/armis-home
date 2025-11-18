import BaseImage from "../../../../components/ui/BaseImage";

export default function CategoryCard({ title, desc, categoryIcon, alt }) {
  return (
    <div className="flex flex-col min-h-[114px] h-full gap-y-3 items-center justify-between lg:px-8 lg:flex-row-reverse col-span-1  lg:bg-gradient-to-r lg:from-30% lg:bg-primary-800 lg:to-30% lg:to-primary-700 lg:rounded-2xl">
      <div className="h-4/5 lg:h-max p-3 rounded-xl  bg-gradient-to-b from-80% bg-primary-800 to-80% to-primary-700 lg:bg-transparent lg:to-transparent">
        <BaseImage
          src={categoryIcon}
          heigth={45}
          className="!aspect-video lg:!h-[80px]"
          imageClassName="object-cover object-center"
          alt={alt}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex gap-x-1 items-center">
          <h6 className="body lg:text-[22px] lg:font-bold">{title}</h6>
          <BaseImage
            src={"/assets/icons/category-card-icon.svg"}
            alt={"arrow left icon"}
            heigth={18}
            className="hidden lg:!block"
          />
        </div>
        <span className="hidden lg:block text-secondary-800">{desc}</span>
      </div>
    </div>
  );
}
