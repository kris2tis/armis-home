import { getUserProfileApi } from "@/services/authServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import { CartItems, CartSummery } from "@/features/cart/index";

export default async function CartWrapper() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  const user = await getUserProfileApi(option);
  const productList = user?.cart?.productDetail;

  return user?.user?._id ? (
    <div className="grid grid-cols-1 gap-x-3 lg:grid-cols-12">
      <CartItems products={productList || []} />

      <CartSummery cartPayDetils={user?.cart?.payDetail || {}} />
    </div>
  ) : (
    <div>
      <span>برای دیدن سبد لطفا وارد سایت شوید</span>
    </div>
  );
}
