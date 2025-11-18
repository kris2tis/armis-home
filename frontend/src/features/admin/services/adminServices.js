import { http } from "@/services/httpServices";

export async function addCategoryApi(data) {
  return await http
    .post("/admin/category/add", data)
    .then(({ data }) => data.data);
}

export async function addCouponApi(data) {
  return await http
    .post("/admin/coupon/add", data)
    .then(({ data }) => data.data);
}

export async function addProductApi(data) {
  return await http
    .post("/admin/product/add", data)
    .then(({ data }) => data.data);
}
