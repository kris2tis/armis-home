import { http } from "@/services/httpServices";

export async function peymentApi() {
  return await http.post("/payment/create").then(({ data }) => data.data);
}