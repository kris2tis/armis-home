import { upddateProductApi } from "@/services/adminServices";
import { useMutation } from "@tanstack/react-query";
import { getProduct } from "@/services/indexServices";
import { useQuery } from "@tanstack/react-query";

export function useUpdateProduct() {
  const { mutateAsync: updateProductAsync, isPending: updateProductPending } =
    useMutation({
      mutationFn: async ({ id, body }) => {
        return await upddateProductApi(id, body);
      },
    });
  return { updateProductAsync, updateProductPending };
}

export function useGetProduct(id) {
  const { data: productData, isLoadingProduct } = useQuery({
    queryKey: [id],
    queryFn: async () => await getProduct(id),
  });

  return { productData: productData?.product, isLoadingProduct };
}