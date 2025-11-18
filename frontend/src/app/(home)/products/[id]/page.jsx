import { getProduct } from "@/services/indexServices";
import { Suspense } from "react";
import { PdpWrapper } from "@/features/pdp";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const { product } = await getProduct(id);

  return (
    <Suspense fallback={<span>درحال گرفتن داده</span>}>
      <PdpWrapper product={product} />
    </Suspense>
  );
}
