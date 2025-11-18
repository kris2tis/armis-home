"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/ui/Button";
import RHFSelect from "@/features/admin/components/ui/RHFSelect";
import RHFTextField from "@/components/ui/RHFTextField";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import {
  addCouponApi,
  addCouponSchema,
  DataPicker,
  RHFTextFieldTags,
  addCouponType,
} from "@/features/admin";

export default function CreateCouponPage() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addCouponSchema), mode: "onBlur" });
  const { push } = useRouter();
  const addCouponHandler = async (form) => {
    try {
      const { message } = await addCouponApi(form);
      toast.success(message);
      push("/admin");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.message(errorMessage || "خطا");
    }
  };
  return (
    <div className="flex-col-center-center  gap-y-4 w-full">
      <span className="font-bold lg:text-[16px]">ساخت کد تخفیف</span>
      <form
        className="flex justify-center max-w-[500px]"
        onSubmit={handleSubmit(addCouponHandler)}
      >
        <FormWrapper register={register} errors={errors} control={control} />
      </form>
    </div>
  );
}

function FormWrapper({ register, errors, control }) {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <RHFTextField
        register={register}
        errors={errors}
        name={"code"}
        label={"کد"}
      />

      <RHFTextField
        register={register}
        errors={errors}
        name={"amount"}
        label={"مقدار تخفیف "}
      />
      <RHFTextField
        register={register}
        errors={errors}
        name={"usageLimit"}
        label={"تعداد"}
      />
      <Controller
        name="productIds"
        control={control}
        render={({ field }) => (
          <RHFTextFieldTags {...field} errors={errors} label={"آیدی محصولات"} />
        )}
      />
      <Controller
        name="expireDate"
        control={control}
        render={({ field }) => <DataPicker {...field} errors={errors} />}
      />
      <RHFSelect
        errors={errors}
        label={"نوع تخفیف"}
        name={"type"}
        register={register}
        options={addCouponType}
      />
      <Button className="p-2.5">ساخت دسته بندی</Button>
    </div>
  );
}
