import BaseImage from "@/components/ui/BaseImage";
import Table from "@/components/ui/Table";
import getDashboardDatas from "@/utils/getDashboardData";

import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import { paymentTableHead } from "../../utils/resourse";

export default async function MainPage() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);

  const data = await getDashboardDatas(option);
  const paymentList = data[0].dataList;
  
  return (
    <div className="flex flex-col gap-y-2.5 w-full">
      {/* Statistics */}
      <div className="flex-start-center gap-x-2.5">
        {data.map((d) => (
          <div
            key={d.id}
            className="cursor-pointer w-1/2 lg:w-max px-5 py-2.5 flex-col-start-bettwon gap-y-2.5 border border-secondary-100 rounded-lg"
          >
            <div
              className="w-max p-1.5 rounded-md "
              style={{ backgroundColor: d.bgColor }}
            >
              <BaseImage
                src={`/assets/icons/${d.iconName}.svg`}
                heigth="18"
                alt={`${d.title} icon`}
              />
            </div>
            <span className="body-sm">{d.title}</span>
            <h3 className="lg:text-[22px]">{d?.dataList?.length}</h3>
          </div>
        ))}
      </div>
      {/* TABLE */}
      <Table tableHead={paymentTableHead} tableBody={paymentList} />
    </div>
  );
}
