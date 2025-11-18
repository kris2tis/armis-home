"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useSetQueries(searchParam, queries) {
  const { push } = useRouter();
  const pathName = usePathname();
  const { category, sort } = queries || {};
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParam);
    
    if (category) {
      newSearchParams.set("category", category);
    } else {
      newSearchParams.delete("category");
    }
    if (sort) {
      newSearchParams.set("sort", sort);
    } else {
      newSearchParams.delete("sort");
    }

    push(`${pathName}?${newSearchParams.toString()}`);
  }, [queries]);
}
