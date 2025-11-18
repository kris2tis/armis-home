import { http } from "./httpServices";

export async function getProductList(querirs, option) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/product/list${querirs}`,
      {
        cache: "force-cache",
        next: { tags: ["product-list"], revalidate: 3600 },
        ...option,
      }
    );

    if (!res.status === 200)
      throw new Error("مشکلی در گرفتن دیتا ها پیش آمده است.");
    const data = await res.json();
    return data.data.products;

  } catch (error) {
    return error;
  }
}

export async function getProduct(id) {
  return await http.get(`/product/${id}`).then(({ data }) => data.data);
}

export async function likeProductApi(id, option) {
  return await http
    .post(`/product/like/${id}`, {}, option)
    .then(({ data }) => data.data);
}
