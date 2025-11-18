import { http } from "./httpServices";





export async function completeProfileApi(data) {
  return await http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export async function getUserProfileApi(option) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/profile`,
      {
        cache: "force-cache",
        next: { tags: ["user"] },
        ...option,
      }
    );

    if (!res.status === 200)
      throw new Error("مشکلی در گرفتن دیتا ها پیش آمده است.");
    const data = await res.json();
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function getUserProfile() {
  return await http.get("/user/profile").then(({ data }) => data.data);
}

export async function editUserProfileApi(data) {
  return await http.patch("/user/update", data).then(({ data }) => data.data);
}

export async function logoutApi() {
  return await http.post("/user/logout").then(({ data }) => data);
}
