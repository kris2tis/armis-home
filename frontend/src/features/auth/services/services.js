import { http } from "@/services/httpServices";

export async function getOtpApi(data) {
  return await http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export async function checkOtpApi(data) {
  return await http.post("/user/check-otp", data).then(({ data }) => data.data);
}