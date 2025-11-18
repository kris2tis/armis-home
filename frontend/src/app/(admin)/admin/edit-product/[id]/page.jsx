import { EditProduct } from "@/features/admin";

export default async function EditProductPage({ params }) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center gap-y-2.5 w-full">
      <span className="font-bold lg:text-[16px]">محصولات</span>
      <EditProduct productId={id} />
    </div>
  );
}
