import * as yup from "yup";

export const addCouponSchema = yup
  .object({
    code: yup
      .string()
      .required("کد تخفیف  الزامی است")
      .min(5, "نام حداقل 5 کاراکتر باشد")
      .max(30, "نام حدااکثر 30 کاراکتر باشد"),
    type: yup.string().required("نوع تخفیف الزامی است"),
    amount: yup
      .number()
      .required("مقدار تخفیف الزامی است")

      .required(),
    expireDate: yup
      .date()
      .required("تاریخ انقضا الزامی است")

      .required(),
    usageLimit: yup
      .number()
      .required("تعداد استفاده الزامی است")

      .required(),
    productIds: yup.array().required("شناسه محصولات  الزامی است").required(),
  })
  .required();

  export const addCouponType = [
  { title: "تخفیف ثابت", _id: "fixedProduct" },
  { title: "تخفیف درصدی", _id: "percent" },
];