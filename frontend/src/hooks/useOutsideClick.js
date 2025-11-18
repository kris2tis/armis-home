"use client";

import { useEffect, useRef } from "react";

export default function useOutsideClick(setFunction) {
  const ref = useRef();
  useEffect(() => {
   
    function handleClick(e) {
      if (
        !ref.current.contains(e.target) &&
        ref.current &&
        typeof setFunction === "function"
      ) {
        setFunction(false);
      }

    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });

  return ref;
}
