import * as yup from "yup";

export const editProfileSchema = yup
  .object({
    name: yup
      .string()
      .required("نام الزامی است")
      .min(3, "نام حداقل 3 کاراکتر باشد")
      .max(30, "نام حدااکثر 30 کاراکتر باشد"),
    email: yup.string().required("ایمیل محصول الزامی است"),
    phoneNumber: yup
      .string()
      .matches(
        /(^(0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
        "لطفا یک شماره موبایل معتبر وارد کنید"
      )
      .required(),
  })
  .required();
