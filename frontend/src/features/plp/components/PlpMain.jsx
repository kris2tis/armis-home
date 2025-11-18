import { ProductList, Sort } from "@/features/plp";

export default function PlpMain({ productList, isLoading }) {
  return (
    <div className="col-span-12 lg:col-span-9 flex flex-col gap-y-3">
      <Sort
        className="hidden lg:flex"
        productLength={productList?.length}
        onClick={(e) =>
          setQueris((prev) => ({
            ...prev,
            sort: e.target.getAttribute("value"),
          }))
        }
      />
      <ProductList productList={productList} isLoading={isLoading} />
    </div>
  );
}
