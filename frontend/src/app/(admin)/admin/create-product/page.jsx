"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "sonner";
import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import RHFTextArea from "@/components/ui/RHFTextArea";

import { updateProductList } from "@/lib/action/actions";

import { useGetCategories } from "@/hooks/useGetData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  RHFTextFieldTags,
  Dropzone,
  addProductApi,
  convertToFromData,
  addProductSchema,
  RHFSelect,
} from "@/features/admin";

export default function CreateProductPage() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
    mode: "onBlur",
  });
  const queryClient = useQueryClient();

  const { push } = useRouter();
  const addProductHandler = async (form) => {
    const formData = convertToFromData({
      ...form,
      imageLink: getValues("imageLink"),
    });

    try {
      const { message } = await addProductApi(formData);
      toast.success(message);
      push("/admin");
      queryClient.invalidateQueries({ queryKey: ["product-list"] });
      updateProductList();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.message(errorMessage || "خطا");
    }
  };

  return (
    <div className="flex-col-center-center  gap-y-4 w-full">
      <span className="font-bold lg:text-[16px]">ساخت محصول</span>
      <form
        className="flex justify-center max-w-[500px]"
        onSubmit={handleSubmit(addProductHandler)}
      >
        <FormWrapper
          register={register}
          control={control}
          errors={errors}
          setValue={setValue}
        />
      </form>
    </div>
  );
}

function FormWrapper({ register, control, errors, setValue }) {
  const { categories } = useGetCategories();
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 ">
        <RHFTextField
          contauierClassName="w-full"
          register={register}
          errors={errors}
          name={"title"}
          label={"عنوان"}
        />
        <Controller
          name="imageLink"
          control={control}
          render={({ field }) => (
            <Dropzone
              removeImage={setImageUrl}
              curImage={imageUrl}
              onChange={(e) => {
                const url = URL.createObjectURL(e.target.files[0]);
                setImageUrl(url);
                setValue("imageLink", e.target.files[0]);
              }}
              areaClassName="aspect-square"
            />
          )}
        />
      </div>
      <RHFTextArea
        lable={"توضیحات"}
        name={"description"}
        register={register}
        errors={errors}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"slug"}
        label={"اسلاگ"}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <RHFTextFieldTags {...field} errors={errors} label={"برچسب ها"} />
        )}
      />
      <RHFSelect
        errors={errors}
        register={register}
        options={categories}
        name={"category"}
        label={"دسته بندی ها"}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"brand"}
        label={"برند"}
      />

      <RHFTextField
        register={register}
        errors={errors}
        name={"price"}
        label={"قیمت"}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"discount"}
        label={"تخفیف"}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"offPrice"}
        label={"قیمت تخفیف"}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"countInStock"}
        label={"تعداد"}
      />
      <Button className="p-2.5">ساخت محصول</Button>
    </div>
  );
}
