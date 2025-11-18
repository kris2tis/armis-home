import BaseImage from "../../../components/ui/BaseImage";

export default function RelationCard({
  title,
  imageLink,
  price,
  offPrice,
  discount,
}) {
  return (
    <div className="min-w-[270px] min-h-[370px] flex justify-between flex-col items-center gap-y-3 gap-x-3 p-2 bg-secondary-200 rounded-xl">
      <BaseImage
        src={`/${imageLink}` || ""}
        className="h-[99px] lg:h-[218px]"
        imageClassName="object-center"
        alt={`تصویر محصول ${title}`}
      />
      <span className="hidden lg:block font-medium">{title || ""}</span>

      <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-between">
        <span className="lg:hidden">{title || ""}</span>
        <div className="flex items-center justify-between ">
          <div className="flex flex-col justify-between">
            <span className="body-sm text-secondary-800 line-through">
              {price || ""}
            </span>
            <span>{offPrice || ""}</span>
          </div>
          <h5 className="bg-primary-700 text-primary-900 rounded-lg p-2 font-light">
            {discount + "%" || ""}
          </h5>
        </div>
      </div>
    </div>
  );
}
