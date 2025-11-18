import { useMutation } from "@tanstack/react-query";

import { addToCartApi } from "@/services/cartServices";
import { decreaseQuantityApi } from "@/services/cartServices";
import { peymentApi } from "@/services/peymentServices";

export function useAddToCart() {
  const { mutateAsync: addToCartAsync, isPending: addToCartPending } =
    useMutation({
      mutationFn: async (id) => await addToCartApi(id),
    });
  return { addToCartAsync, addToCartPending };
}

export function useDecreaseQuantity() {
  const {
    mutateAsync: decreaseQuantityAsync,
    isPending: decreaseQuantityPending,
  } = useMutation({
    mutationFn: async (id) => await decreaseQuantityApi(id),
  });
  return { decreaseQuantityAsync, decreaseQuantityPending };
}

export function usePeyment() {
  const { mutateAsync: peymentAsync, isPending: peymentPending } = useMutation({
    mutationFn: async () => await peymentApi(),
  });
  return { peymentAsync, peymentPending };
}
