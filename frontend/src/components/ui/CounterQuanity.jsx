"use client";

import {
  useAddToCart,
  useDecreaseQuantity,
} from "@/features/cart/hooks/useCart";
import { updateCart } from "@/lib/action/actions";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Button from "./Button";
import BaseImage from "./BaseImage";
import useGetUser from "@/hooks/useGetUser";

export default function CounterQuanity({ id }) {
  const { data, isLoading } = useGetUser();

  // Find quantity count
  const finded = data?.user?.cart?.products?.find((p) => {
    if (p.productId === id) {
      return p;
    }
  });

  // Add To Cart And Increase Quantit
  const queryClient = useQueryClient();

  const { addToCartAsync, addToCartPending } = useAddToCart();
  const addToCartHandler = async () => {
    try {
      const { message } = await addToCartAsync({ productId: id });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      await updateCart();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // Remove And Dec Quanity
  const { decreaseQuantityAsync, decreaseQuantityPending } =
    useDecreaseQuantity();
  const decreaseQuantityHandler = async () => {
    try {
      const { message } = await decreaseQuantityAsync({ productId: id });
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      await updateCart();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return !isLoading ? (
    <div className="grid grid-cols-3 py-0.5 gap-x-1 px-[5px] border border-secondary-150 rounded-lg h-[32px]">
      <Button
        disabled={addToCartPending}
        onClick={addToCartHandler}
        className={`relative rounded-sm flex-center-center h-full  !bg-[#F6F6F6] ${
          addToCartPending && "animate-pulse"
        }`}
      >
        <BaseImage
          src={"/assets/icons/add.svg"}
          fill
          alt="Plus icon"
          heigth={16}
        />
      </Button>
      <span className="flex-center-center">{finded?.quantity || 0}</span>
      <Button
        disabled={decreaseQuantityPending}
        onClick={decreaseQuantityHandler}
        className={`relative  rounded-sm flex-center-center  !bg-[#F6F6F6] ${
          decreaseQuantityPending && "animate-pulse"
        }`}
      >
        <BaseImage
          src={"/assets/icons/minus.svg"}
          fill
          alt="Minus icon"
          heigth="16"
        />
      </Button>
    </div>
  ) : null;
}

// Create inc and dec button
// GET DATA WITH RQ AND REVALIDATE IT AFTER INC AND DEC
