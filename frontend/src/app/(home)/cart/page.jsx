import CartWrapper from "@/features/cart/components/CartWrapper";
import { Suspense } from "react";

export const metadata = {
  title: "سبد خرید",
};

export default async function CartPage() {
  return (
    <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
      <CartWrapper />
    </Suspense>
  );
}
