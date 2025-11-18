"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { useEffect, useState } from "react";

export default function RHFInput({
  value,
  name,
  type = "text",
  label,
  register,
  errors,
  onChange,
}) {
  const [isActive, setIsAvtive] = useState(false);
  const hasError = errors && errors[name];
  const errorMessage = hasError && errors[name]?.message;

  const ref = useOutsideClick(!value?.length && setIsAvtive);

  return (
    <div className="flex flex-col gap-y-2 h-max">
      <div
        ref={ref}
        onClick={() => !value?.length && setIsAvtive((prev) => !prev)}
        className="relative w-full"
      >
        <label
          className={`absolute transition-all duration-200 top-1/2 ${
            isActive ? "!top-0" : "top-1/2"
          } -translate-y-1/2 right-3 bg-white px-1`}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          autoComplete="off"
          className="w-full py-4 px-2.5 border border-[#E5F4FF] rounded-md"
          defaultValue={value}
          type={type}
          name={name}
          {...register(name, { onChange: onChange })}
        />
      </div>
      {hasError && <span className="text-danger">{errorMessage}</span>}
    </div>
  );
}
