import { collections } from "../../utils/resourse";

export default function Collections() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-x-3 mt-8">
      {collections.map((c) => {
        const firstElement = c.id === 1;
        return (
          <div
            key={c.id}
            style={{ backgroundImage: `url(${c.imageSrc})` }}
            className={` w-full lg:w-1/2 h-[200px] bg-cover bg-center bg-no-repeat rounded-xl flex flex-col justify-start lg:justify-center py-2 px-5`}
          >
            <h5
              className={`font-bold ${
                !firstElement && "text-white"
              } lg:text-[20px]`}
            >
              {c.title || ""}
            </h5>
            <span
              className={`${
                firstElement ? "text-[#2F5B7D]" : "text-white"
              } body-sm lg:text-[16px] font-light`}
            >
              {c.desc || ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}
