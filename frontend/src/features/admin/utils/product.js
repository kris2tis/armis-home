import * as yup from "yup";

export function convertToFromData(data) {
  const formData = new FormData();
  const automaticKeys = {};
  for (const key in data) {
    if (!["imageLink", "tags"].includes(key)) {
      automaticKeys[key] = data[key];
    }
  }

  for (const key in automaticKeys) {
    formData.append(key, automaticKeys[key]);
  }

  for (var i = 0; i < data.tags.length; i++) {
    formData.append("tags", data.tags[i]);
  }
  formData.append("imageLink", data.imageLink);

  return formData;
}

export const addProductSchema = yup
  .object({
    title: yup
      .string()
      .required("عنوان الزامی است")
      .min(3, "عنوان حداقل 3 کاراکتر باشد")
      .max(30, "عنوان حدااکثر 30 کاراکتر باشد"),
    description: yup.string().required("توضیحات محصول الزامی است"),
    slug: yup
      .string()
      .min(3, "اسلاگ حداقل 3 کاراکتر باشد")
      .max(30, "اسلاگ حدااکثر 30 کاراکتر باشد")
      .required(" اسلاگ الزامی است"),
    brand: yup.string().required("برند الزامی است"),
    countInStock: yup.string().required("لطفا تعداد موجودی را بنویسید"),
    tags: yup.array().min(1, "حداقل 1 تگ وارد کنید").max(20, "حدااکثر 20 تگ"),
    category: yup.string().required("دسته بندی الزامی است"),
    imageLink: yup.string().required("عکس محصول الزامی است"),
    offPrice: yup.string().required("قیمت تخفیف وارد شده صحیح نمیباشد"),
    price: yup.string().required("قیمت  وارد شده صحیح نمیباشد"),
    discount: yup.string().required("تخفیف صحیح نمیباشد !"),
  })
  .required();
