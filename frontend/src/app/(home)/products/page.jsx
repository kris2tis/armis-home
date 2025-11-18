import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductListWrapper from "../../../features/plp/components/ProducsWrapper";

export const metadata = {
  title: 'فروشگاه',
}

export default function ProductsPage({ searchParams }) {
  return (
    <div className="flex flex-col gap-y-3">
      <Breadcrumb pathname={["/", "products"]} />
      <ProductListWrapper searchParams={searchParams} />
    </div>
  );
}
