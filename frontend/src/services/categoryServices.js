export async function categoryList() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/category/list`,
      { cache: "force-cache", next: { revalidate: 3600 } }
    );

    if (!res.status === 200) throw new Error("مشکلی در گرفتن دیتا ها");
    const data = await res.json();
    return data.data.categories;
  } catch (error) {
    return error;
  }
}

