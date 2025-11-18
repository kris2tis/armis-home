import { http } from "./httpServices";
// First arguman is body and second is option
export async function getAllUser(option) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/admin/user/list`,
      {
        cache: "force-cache",
        next: { tags: ["users-list"] },
        ...option,
      }
    );

    if (!res.status === 200)
      throw new Error("مشکلی در گرفتن دیتا ها پیش آمده است.");
    const data = await res.json();
    return data.data.users;
  } catch (error) {
    return error;
  }
}



export async function upddateProductApi(id, body) {
  return await http
    .patch(`/admin/product/update/${id}`, body)
    .then(({ data }) => data.data);
}

export async function removeProductApi(id, option) {
  return await http
    .delete(`/admin/product/remove/${id}`, option, {})
    .then(({ data }) => data.data);
}


