import BaseImage from "./BaseImage";

export default function Price({ price, numberClassName }) {
  return (
    <div className="flex-start-center gap-x-[5px]">
      <span className={`${numberClassName} body-sm font-bold text-[14px]`}>
        {price.toLocaleString()}
      </span>
      <BaseImage
        src={"/assets/icons/toman.svg"}
        alt={"toman icon"}
        heigth="12"
      />
    </div>
  );
}
