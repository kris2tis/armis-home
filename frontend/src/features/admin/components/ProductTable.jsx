"use client";
import DeleteProduct from "./DeleteProduct";
import Link from "next/link";

export default function ProductTable({ tableHead, tableBody }) {
  return (
    <div className="flex flex-col gap-y-2.5 border border-secondary-150 rounded-lg p-2.5">
      {/* Table Head */}
      <div className="grid  grid-flow-col   auto-cols-[200px] 2xl:grid-cols-6 overflow-x-scroll hideScroollbar [&_span]:text-[12px] lg:[&_span]:text-[16px] [&_span]:font-bold [&>*]:col-span-1 border-b border-secondary-150 py-2.5">
        {tableHead.map((tH) => {
          const firstIndex = tH.id === 1;
          const lastIndex = tableHead.length === tH.id;

          return (
            <span
              className={`flex ${
                firstIndex
                  ? " justify-start"
                  : !lastIndex
                  ? "justify-center"
                  : "justify-end"
              }`}
              key={tH.id}
            >
              {tH.name}
            </span>
          );
        })}
      </div>
      {/* Table Body */}
      <div className="flex flex-col gap-y-2.5">
        {tableBody?.map((tB) => {
          const {
            _id: productId,
            title,
            category: { title: categoryTitle },
            createdAt: date,
          } = tB;

          return (
            <Link key={productId} href={`/admin/edit-product/${productId}`}>
              <div className="grid  grid-flow-col  auto-cols-[200px] items-center 2xl:grid-cols-6 overflow-x-scroll hideScroollbar [&>*]:col-span-1 [&>*]:text-center [&>*]:text-[16px]">
                <div className="w-full h-full  min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] lg:max-w-[80px] lg:max-h-[80px] aspect-square bg-secondary-400 rounded-md"></div>
                <div className="min-w-max">
                  <span>{title}</span>
                </div>
                <span>{categoryTitle}</span>
                <span> {tB.price.toLocaleString()}</span>
                <span> {date}</span>
                <div className="w-max h-max mr-auto px-2.5 py-[5px] rounded-[5px]">
                  <DeleteProduct productId={productId} productTitle={title} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
