"use client";

import { useGetCategories } from "@/hooks/useGetData";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

import { updateProductList } from "@/lib/action/actions";

import Button from "@/components/ui/Button";
import { toast } from "sonner";
import RHFTextField from "@/components/ui/RHFTextField";

import {
  RHFSelect,
  RHFTextFieldTags,
  useGetProduct,
  useUpdateProduct,
} from "@/features/admin/index";

export default function EditProduct({ productId }) {
  const { updateProductAsync, updateProductPending } = useUpdateProduct();
  const { productData, isLoadingProduct } = useGetProduct(productId);

  const { push } = useRouter();

  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoadingProduct) {
      reset(productData);
    }
  }, [productId, productData]);
  const editProductHandler = async (formData) => {
    try {
      const { message } = await updateProductAsync({
        id: productId,
        body: formData,
      });
      toast.success(message);
      updateProductList();
      push("/admin");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  if (isLoadingProduct) {
    return <span>درحال گرفتن اطلاعات</span>;
  }

  return (
    <form className="max-w-[500px]" onSubmit={handleSubmit(editProductHandler)}>
      <TextFieldWrapper
        {...{ register, errors, control, getValues, updateProductPending }}
      />
    </form>
  );
}

function TextFieldWrapper({
  register,
  errors,
  control,
  getValues,
  updateProductPending,
}) {
  const { categories, isLoading } = useGetCategories();
  return (
    <div className="flex flex-col gap-y-3">
      <RHFTextField
        name={"title"}
        getValue={getValues}
        register={register}
        label={"عنوان "}
        errors={errors}
      />
      <RHFTextField
        name={"description"}
        getValue={getValues}
        register={register}
        label={"توضیحات"}
        errors={errors}
      />
      <RHFTextField
        name={"slug"}
        register={register}
        getValue={getValues}
        label={"اسلاگ"}
        errors={errors}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <RHFTextFieldTags
            errors={errors}
            {...field}
            getValue={getValues}
            label={"برچسب ها"}
            defaultValue={getValues("tags")}
          />
        )}
      />
      <RHFTextField
        errors={errors}
        name={"imageLink"}
        register={register}
        label={"لینک تصویر"}
        getValue={getValues}
      />
      {isLoading ? (
        <span>درحال گرفتن اطلاعات</span>
      ) : (
        <RHFSelect
          errors={errors}
          label={"دسته بندی ها"}
          getValue={getValues}
          name={"category"}
          register={register}
          options={categories}
          selectedOption={getValues("category")}
        />
      )}

      <RHFTextField
        name={"brand"}
        register={register}
        getValue={getValues}
        label={"برند"}
        errors={errors}
      />
      <RHFTextField
        name={"price"}
        getValue={getValues}
        register={register}
        label={"قیمت"}
        errors={errors}
      />
      <RHFTextField
        name={"discount"}
        getValue={getValues}
        register={register}
        label={"درصد تخفیف"}
        errors={errors}
      />
      <RHFTextField
        name={"offPrice"}
        getValue={getValues}
        register={register}
        label={"مقدار تخفیف"}
        errors={errors}
      />
      <RHFTextField
        name={"countInStock"}
        getValue={getValues}
        register={register}
        label={"تعداد"}
        errors={errors}
      />
      {updateProductPending ? (
        <Button disabled>...</Button>
      ) : (
        <Button className="py-2">ثبت تغییرات</Button>
      )}
    </div>
  );
}
