import { categoryList } from "@/services/categoryServices";
import { getProductList } from "@/services/indexServices";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await categoryList(),
  });
  return { categories: categories, isLoadingCategories: isLoading };
}

export default function useGetData(querisFormat) {
  const { data: productList, isLoading } = useQuery({
    queryKey: ["product-list", querisFormat],
    queryFn: async () => {
      return await getProductList(querisFormat, {});
    },
  });
  
  return { productList: productList, isLoading };
}



