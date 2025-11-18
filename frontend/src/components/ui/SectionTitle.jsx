import Image from "next/image";

export default function SectionTitle({ title = "تایتل" , titleClassName="" }) {
  return (
      <div className="relative w-full h-[46px]">
        <Image src={"/assets/border.svg"} fill alt="border image" />
        <h3 className={`${titleClassName}  absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 font-light lg:font-bold lg:text-[24px]`}>{title}</h3>
      </div>
  );
}
