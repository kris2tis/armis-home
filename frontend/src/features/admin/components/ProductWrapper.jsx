import { getProductList } from "@/services/indexServices";
import ProductTable from "./ProductTable";
import { setCookiesToRequest } from "@/utils/setCookiesToRequest";
import { cookies } from "next/headers";
import { productTableHead } from "../utils/resourse";

export default async function ProductWrapper() {
  const cookiesStore = await cookies();
  const option = setCookiesToRequest(cookiesStore);
  const products = await getProductList("", option);
  return <ProductTable tableHead={productTableHead} tableBody={products} />;
}
