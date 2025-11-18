"use client";

import { useState } from "react";
import BaseImage from "./BaseImage";

export default function RHFTextField({
  name,
  type = "text",
  label,
  register,
  errors,
  onChange,
  getValue,
  contauierClassName=""
}) {
  const [isActive, setIsAvtive] = useState(false);
  const hasErrors = errors && errors[name];
  const value = getValue && getValue(name || "");
  console.log(value)
  return (
    <div
      className={`${contauierClassName} grid grid-cols-12 border-b h-max ${
        hasErrors
          ? "border-danger-900"
          : isActive
          ? "border-primary-900"
          : "border-secondary-500"
      }
       transition-all duration-300 py-2`}
    >
      <div className="col-span-11">
        {isActive ? (
          <>
            <input
              className="w-full"
              name={name}
              type={type}
              autoComplete="off"
              {...register(name, { onChange: onChange })}
            />
            {hasErrors && <span className="text-danger-900 body-sm">{errors[name]?.message}</span>}
          </>
        ) : value ? (
          <div className="flex flex-col gap-y-1">
            <span className="text-secondary-400 body-sm lg:text-[14px]">{label}</span>
            <p className="font-medium">{value}</p>
          </div>
        ) : (
          <span className="body-sm lg:text-[14px]">{label}</span>
        )}
      </div>
      <BaseImage
        onClick={() => setIsAvtive((prev) => !prev)}
        src={`/assets/icons/${isActive ? "black-close" : "plus"}.svg`}
        className=" w-full col-span-1"
        alt={"plus icon"}
        heigth="24"
      />
    </div>
  );
}
