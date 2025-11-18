import ProductCard from "./ProductCard";

export default function ProductList({ productList, isLoading }) {
  return !isLoading ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {productList?.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  ) : (
    <span>درحال گرفتن اطلاعات ...</span>
  );
}
