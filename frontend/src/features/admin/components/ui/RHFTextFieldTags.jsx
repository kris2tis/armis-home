"use client";

import BaseImage from "@/components/ui/BaseImage";
import { useState } from "react";

export default function RHFTextFieldTags({
  name,
  type = "text",
  label,
  errors,
  defaultValue,
  onChange,
}) {
  const [isActive, setIsAvtive] = useState(false);

  const hasErrors = errors && errors[name];
  return (
    <div
      className={`grid grid-cols-12 border-b h-max ${
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
              defaultValue={defaultValue?.map((value) => value)}
              className="w-full"
              name={name}
              type={type}
              onChange={(e) => {
                const targetValue = e.target.value;
                const values = targetValue?.split(",") || [targetValue];
                onChange(values);
              }}
            />
            {hasErrors && (
              <span className="text-danger-900 body-sm">
                {errors[name]?.message}
              </span>
            )}
          </>
        ) : defaultValue ? (
          <div className="flex flex-col gap-y-1">
            <span className="text-secondary-400 body-sm">{label}</span>
            <p className="font-medium">{defaultValue?.map((value) => value)}</p>
          </div>
        ) : (
          <span className="body-sm">{label}</span>
        )}
      </div>
      <BaseImage
        onClick={() => setIsAvtive((prev) => !prev)}
        src={`/assets/icons/${isActive ? "black-close" : "plus"}.svg`}
        className="flex justify-end w-full col-span-1"
        alt={"plus icon"}
        heigth="24"
      />
    </div>
  );
}
