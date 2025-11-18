export async function brandList() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/brand/list`,
      { cache: "force-cache", next: { revalidate: 3600 } }
    );

    if (!res.status === 200) throw new Error("مشکلی در گرفتن دیتا ها");
    const data = await res.json();
    return data.data.data;
  } catch (error) {
    return error;
  }
}
