import { getAllUser } from "@/services/adminServices";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import { userTableHead } from "../utils/resourse";

export default async function UsersWrapper() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  const users = await getAllUser(option);
  return (
    <div>
      <UsersTable tableHead={userTableHead} tableBody={users} />
    </div>
  );
}
