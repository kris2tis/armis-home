const productStatus = { COMPLETED: "خریداری شده" };
export default function PeymentCard({
  invoiceNumber,
  amount,
  cart: { productDetail },
  status,
  paymentDate,
}) {
  const paymentStatus = productStatus[status];
  return (
    <div>
      <div className="w-max min-w-[50px] min-h-[50px] max-h-[50px] aspect-square bg-secondary-400 rounded-md"></div>
      <div className="min-w-max">
        {productDetail.map((p) => (
          <span className="text-center w-max" key={p._id}>
            {p.title}
          </span>
        ))}
      </div>
      <span>{invoiceNumber}</span>
      <span> {amount}</span>
      <span> {paymentDate}</span>
      <span>{paymentStatus}</span>
    </div>
  );
}
