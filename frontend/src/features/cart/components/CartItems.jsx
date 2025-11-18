import CartCard from "@/features/cart/components/CartCard";

export default function CartItems({ products }) {
  return (
    <div className="col-span-1 lg:col-span-8 grid grid-cols-1 gap-y-3">
      {products?.length && Array.isArray(products) ? (
        products.map((product) => <CartCard key={product._id} {...product} />)
      ) : (
        <span>محصولی در سبد نیست</span>
      )}
    </div>
  );
}
