"use client";

import Portal from "../Portal";
import BaseImage from "./BaseImage";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function Dialog({
  children,
  isOpen,
  toggleModal,
  data,
  ...rest
}) {
  const { title, body } = data || {};
  const ref = useOutsideClick(toggleModal);
  return (
    <Portal>
      <div
        ref={ref}
        {...rest}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute max-w-[500px] z-40 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-4/5 bg-white rounded-lg py-4 px-3 border border-secondary-800`}
      >
        <div className=" flex flex-col justify-between gap-y-3">
          <div className="flex-center-between border-b border-secondary-500 py-3">
            <span className="body-sm lg:text-[16px] lg:font-medium">{title || ""} </span>
            <BaseImage
              onClick={() => toggleModal()}
              src={"/assets/icons/black-close.svg"}
              alt={"black close icon"}
              heigth="20"
            />
          </div>

          {body}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 w-full right-1/2 translate-x-1/2 z-20 bg-secondary-900/50 min-h-screen`}
      ></div>
    </Portal>
  );
}
