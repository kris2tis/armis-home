"use client";
import Button from "@/components/ui/Button";
import CounterQuanity from "@/components/ui/CounterQuanity";
import Seprator from "@/components/ui/Seprator";
import { useAddToCart } from "@/features/cart/hooks/useCart";
import { toast } from "sonner";

export default function AddToCart({ data }) {
  const { price, id } = data;

  const { addToCartAsync, addToCartPending } = useAddToCart();
  const addTocartHandler = async () => {
    try {
      const { message } = await addToCartAsync({ productId: id });
      toast.success(message);
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };
  return (
    <div className="flex-1 flex flex-col lg:flex-row-reverse gap-y-3 lg:items-end lg:gap-x-3">
      <CounterQuanity id={id} />
      <Button
        disabled={addToCartPending}
        onClick={addTocartHandler}
        className="w-full flex py-2 gap-x-3 justify-center items-center h-max"
      >
        افزودن به سبد
        <Seprator type={"vr"} className={"bg-white-20 !h-[15px]"} />
        <span>{price}</span>
      </Button>
    </div>
  );
}
