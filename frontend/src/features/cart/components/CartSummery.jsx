"use client";

import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import { toast } from "sonner";

import { usePeyment } from "@/features/cart/index";
import { useQueryClient } from "@tanstack/react-query";

import { updateCart } from "@/lib/action/actions";

export default function CartSummery({ cartPayDetils }) {
  const { totalPrice } = cartPayDetils;

  const queryClient = useQueryClient();
  const { peymentAsync, peymentPending } = usePeyment();

  const peymentHandler = async () => {
    try {
      const { message } = await peymentAsync();
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      await updateCart();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="fixed lg:sticky lg:top-2 lg:col-span-4 lg:border lg:border-secondary-150 lg:rounded-lg lg:h-max z-50 bg-white px-4 py-2.5 bottom-0 left-0 padding w-full">
      <div className="flex-center-between lg:flex-col-reverse gap-y-3">
        <div className="w-1/2 lg:w-full h-full">
          {peymentPending ? (
            <Button disabled>...</Button>
          ) : (
            <Button
              onClick={peymentHandler}
              className="!w-full rounded-sm bg-primary-900 py-2"
            >
              تکمیل سفارش
            </Button>
          )}
        </div>
        <div className="w-1/2 lg:w-full flex flex-col items-end lg:flex-row lg:justify-between justify-center gap-y-2.5">
          <span className="font-bold">جمع سبد خرید</span>

          <Price numberClassName={"text-primary-900"} price={totalPrice} />
        </div>
      </div>
    </div>
  );
}
