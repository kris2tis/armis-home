import PeymentCard from "@/features/profile/components/PeymentCard";
import { paymentTableHead } from "@/constants/admin";
import { getUserProfileApi } from "@/services/authServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";

export default async function PeymentList() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  const user = await getUserProfileApi(option);
  return (
    <div className="flex flex-col gap-y-2">
      <PaymentHead />
      <PaymentBody paymentList={user.payments} />
    </div>
  );
}

function PaymentBody({ paymentList }) {
  return (
    <div className="[&>div]:flex [&>div]:justify-between [&>div]:items-center  [&>div]:overflow-x-scroll [&_span]:min-w-max [&_span]:text-center [&_span]:body-sm [&>div]:!hideScroollbar [&>div]:gap-x-5 [&>div]:p-2 [&>div]:rounded-sm [&>div]:h-max">
      {paymentList.map((payment) => (
        <PeymentCard key={payment._id} {...payment} />
      ))}
    </div>
  );
}

function PaymentHead() {
  return (
    <div className="flex justify-between gap-x-5 overflow-x-auto hideScroollbar bg-secondary-500 px-2 py-3 rounded-lg">
      {paymentTableHead.map((head) => (
        <span
          className="min-w-max  text-center body-sm  lg:text-[14px] font-medium"
          key={head.id}
        >
          {head.name}
        </span>
      ))}
    </div>
  );
}
