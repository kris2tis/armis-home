import Table from "@/components/ui/Table";
import { getAllPeyments } from "@/services/peymentServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { paymentTableHead } from "../utils/resourse";

export default async function PaymentsWrapper() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  const payments = await getAllPeyments(option);

  return (
    <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
      <Table tableHead={paymentTableHead} tableBody={payments} />
    </Suspense>
  );
}
