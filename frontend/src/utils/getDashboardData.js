import { getProductList } from "@/services/indexServices";
import { getAllPeyments } from "@/services/peymentServices";

export default async function getDashboardDatas(option) {
  const peyments = getAllPeyments(option);
  const products = await getProductList("", option);
  const data = [
    {
      id: 1,
      title: "مجموع خرید ها",
      iconName: "peyments",
      bgColor: "#B7FFB1",
      dataList: null,
    },
    {
      id: 2,
      title: "مجموع محصولات",
      iconName: "products-grid",
      bgColor: "#5EB5F8",
      dataList: null,
    },
  ];

  const peymentList = await Promise.all([peyments, products]);

  return data.map((d, index) => ({ ...d, dataList: peymentList[index] }));
}
