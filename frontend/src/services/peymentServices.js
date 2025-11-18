export async function getAllPeyments(option = {}) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/admin/payment/list`,
      {
        cache: "force-cache",
        next: { tags: ["payment-list"], revalidate: 3600 },
        ...option,
      }
    );

    if (!res.status === 200)
      throw new Error("مشکلی در گرفتن دیتا ها پیش آمده است.");
    const data = await res.json();
    return data.data.payments;
  } catch (error) {
    return error;
  }
}


