import { paymentStatus } from "@/features/admin/utils/resourse";
import BaseImage from "./BaseImage";

export default function Table({ tableHead, tableBody }) {
  return (
    <div className="flex flex-col gap-y-2.5 border border-secondary-150 rounded-lg p-2.5">
      <div className="grid  grid-flow-col  auto-cols-[200px] 2xl:grid-cols-6 overflow-x-scroll hideScroollbar [&_span]:text-[12px] lg:[&_span]:text-[16px] [&_span]:font-bold [&>*]:col-span-1 border-b border-secondary-150 py-2.5">
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
      <div className="flex flex-col gap-y-2.5">
        {tableBody?.map((tB) => {
          const statusStyle = paymentStatus[tB.status];
          return (
            <div
              key={tB._id}
              className="grid  grid-flow-col  auto-cols-[200px] 2xl:grid-cols-6 overflow-x-scroll hideScroollbar [&>*]:col-span-1 [&>*]:text-center [&>*]:text-[16px]"
            >
              <div className="w-full h-full  min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] lg:max-w-[80px] lg:max-h-[80px] aspect-square bg-secondary-400 rounded-md"></div>
              <div className="min-w-max">
                <span>{tB.description}</span>
              </div>
              <span>{tB.invoiceNumber}</span>
              <span> {tB.amount}</span>
              <span> {tB.paymentDate}</span>
              <div
                className="w-max h-max mr-auto px-2.5 py-[5px] rounded-[5px]"
                style={{ backgroundColor: statusStyle?.bgc }}
              >
                <BaseImage
                  src={`/assets/icons/${statusStyle?.iconName}.svg`}
                  alt={`${statusStyle?.iconName} icon`}
                  heigth="18"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
