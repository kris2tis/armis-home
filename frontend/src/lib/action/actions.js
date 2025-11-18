"use server";

import { removeProductApi } from "@/services/adminServices";
import { likeProductApi } from "@/services/indexServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function updateProductList() {
  revalidateTag("product-list");
}

export async function updateCart() {
  revalidateTag("user-profile");
}

export async function likeProduct(id) {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  try {
    const { message } = await likeProductApi(id, option);
    revalidateTag("product-list");
    return message;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    return errorMessage;
  }
}

export async function removeProduct(id) {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  try {
    const { message } = await removeProductApi(id, option);

    return { succesMessage: message };
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    return { errorMessage: errorMessage };
  }
}
