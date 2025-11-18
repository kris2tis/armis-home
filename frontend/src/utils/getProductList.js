import { getProduct } from "@/services/indexServices";

export default async function getProductList(ids) {
  if (ids?.length && Array.isArray(ids)) {
    const productList = await Promise.all(
      ids.map(async (id) => {
        const { product } = await getProduct(id);
        return product;
      })
    ).then((product) => product);

    return { productList: productList };
  }
}
