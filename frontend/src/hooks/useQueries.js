import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useQueries(queries) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    queries.category.length && params.set("category", queries.category);
    queries.sort.length && params.set("sort", queries.sort);

    push(`${pathname}?${params.toString()}`);
  }, [queries]);
}
