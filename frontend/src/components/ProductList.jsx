import { getProductList } from "@/services/indexServices";
import React from "react";
import ProductCard from "../features/plp/components/ProductCard";

export default async function ProductList({ query }) {
  const productList = await getProductList(query, {});

  return (
    <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-4 lg:gap-x-3">
      {productList?.length &&
        productList.map((p) => <ProductCard key={p.id} {...p} />)}
    </div>
  );
}
