"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import RHFTextArea from "@/components/ui/RHFTextArea";
import RHFTextField from "@/components/ui/RHFTextField";
import Button from "@/components/ui/Button";
import RHFSelect from "@/features/admin/components/ui/RHFSelect";
import { toast } from "sonner";


import { addCategorySchema, addCategoryApi } from "@/features/admin";
import { addType } from "@/features/admin/utils/resourse";

export default function page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addCategorySchema), mode: "onBlur" });
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const addCategoryHandler = async (form) => {
    try {
      const { message } = await addCategoryApi(form);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      push("/admin");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.message(errorMessage || "خطا");
    }
  };
  return (
    <div className="flex-col-center-center  gap-y-4 w-full">
      <span className="font-bold lg:text-[16px]">ساخت دسته بندی</span>
      <form
        className="flex justify-center max-w-[500px]"
        onSubmit={handleSubmit(addCategoryHandler)}
      >
        <FormWrapper register={register} errors={errors} />
      </form>
    </div>
  );
}

function FormWrapper({ register, errors }) {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <RHFTextField
        register={register}
        errors={errors}
        name={"title"}
        label={"نام فارسی"}
      />

      <RHFTextField
        register={register}
        errors={errors}
        name={"englishTitle"}
        label={"نام انگلیسی"}
      />
      <RHFSelect
        register={register}
        errors={errors}
        name={"type"}
        options={addType}
        label={"نوع"}
      />
      <RHFTextArea
        errors={errors}
        lable={"توضیحات"}
        name={"description"}
        register={register}
      />

      <Button className="p-2.5">ساخت دسته بندی</Button>
    </div>
  );
}
