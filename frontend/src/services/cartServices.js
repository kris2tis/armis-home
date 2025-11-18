import { http } from "./httpServices";

export async function addToCartApi(body) {
  return await http.post("/cart/add", body).then(({ data }) => data.data);
}

export async function decreaseQuantityApi(body) {
  return await http.post("/cart/remove", body).then(({ data }) => data.data);
}


