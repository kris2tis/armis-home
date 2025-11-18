import Image from "next/image";
import React from "react";

export default function BaseImage({
  src,
  heigth = "",
  alt,
  className = "",
  imageClassName = "",
  children,
  ...rest
}) {
  return (
    <div
      {...rest}
      style={{ height: `${heigth}px` }}
      className={`${className} relative col-span-1 aspect-square`}
    >
      <Image
        className={`${imageClassName}`}
        src={src}
        alt={alt}
        fill={"true"}
      />
      {children}
    </div>
  );
}
