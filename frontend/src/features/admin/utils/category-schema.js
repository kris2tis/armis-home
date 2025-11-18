import * as yup from "yup";

export const addCategorySchema = yup
  .object({
    title: yup
      .string()
      .required("عنوان الزامی است")
      .min(3, "عنوان حداقل 3 کاراکتر باشد")
      .max(100, "عنوان حدااکثر 30 کاراکتر باشد"),
    englishTitle: yup
      .string()
      .required("عنوان الزامی است")
      .min(3, "عنوان حداقل 3 کاراکتر باشد")
      .max(100, "عنوان حدااکثر 30 کاراکتر باشد"),
    description: yup
      .string()
      .required("توضیحات الزامی است")
      .min(3, "توضیحات حداقل 3 کاراکتر باشد")
      .max(100, "توضیحات حدااکثر 30 کاراکتر باشد"),

    type: yup.string().required().min(3).max(100),
  })
  .required();
