import CounterQuanity from "@/components/ui/CounterQuanity";
import Price from "@/components/ui/Price";


export default function CartCard({ _id: productId, title, price }) {
  return (
    <div className="grid grid-cols-8 gap-x-2.5 border-b border-b-secondary-150 py-2.5">
      {/* Right */}
      <div className="col-span-2 lg:col-span-1">
        <div className="h-full flex flex-col gap-y-3">
          {/* Product Picture */}
          <div className="w-full h-full min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] lg:max-w-[120px] lg:max-h-[120px] aspect-square  bg-secondary-400 rounded-lg"></div>
          {/* Counter */}
          <CounterQuanity id={productId} />
        </div>
      </div>
      {/* Left */}
      <div className="col-span-6 flex-col-start-bettwon">
        <h5 className="text-[18px]">{title}</h5>
        <Price price={price} numberClassName={"text-primary-900"} />
      </div>
    </div>
  );
}
