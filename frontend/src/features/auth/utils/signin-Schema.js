import * as yup from "yup";

export const signinScheam = yup
  .object({
    phoneNumber: yup
      .string()
      .matches(
        /(^(0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
        "لطفا یک شماره موبایل معتبر وارد کنید"
      )
      .required(),
  })
  .required();

export const completeProfileScheam = yup
    .object({
      name: yup
        .string()
        .min(5, " حداقل کاراکتر باید 5 عدد باشد")
        .max(100, " حداکثر کاراکتر باید 100 عدد باشد")
        .required("نام الزامی است"),
      email: yup
        .string()
        .email("لطفا یک ایمیل معتبر وارد کنید")
        .required("ایمیل الزامی است"),
    })
    .required();