"use client";

import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import useGetProfile from "@/hooks/useGetProfile";
import useUpdateProfile from "@/hooks/useUpdateProfile";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "@/features/profile/utils/editProfile-Schema";

export default function page() {
  const queryClient = useQueryClient();
  const { defaultValues, isLoading } = useGetProfile();
  const { isUpdating, updateMutateAsync } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", biography: "", phoneNumber: "" },
  });
  const { push } = useRouter();
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const onSubmit = async (data) => {
    try {
      const { message } = await updateMutateAsync(data);

      toast.success(message);

      queryClient.invalidateQueries({ queryKey: ["user-info"] });
      push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) {
    return <span>درحال گرفتن اطلاعات ...</span>;
  }
  return (
    <div className="mx-auto mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3">
          <RHFTextField
            getValue={getValues}
            register={register}
            name={"name"}
            errors={errors}
            label={"نام و نام خانوادگی"}
          />
          <RHFTextField
            getValue={getValues}
            register={register}
            name={"email"}
            errors={errors}
            label={"ایمیل"}
          />
          <RHFTextField
            getValue={getValues}
            register={register}
            name={"biography"}
            label={"بیوگرافی"}
            errors={errors}
          />
          <RHFTextField
            getValue={getValues}
            register={register}
            name={"phoneNumber"}
            errors={errors}
            label={"تلفن همراه"}
          />
          {isUpdating ? (
            <Button disabled className="mt-2 w-full">
              ...
            </Button>
          ) : (
            <Button className="mt-2 w-full p-2">ثبت تغییرات</Button>
          )}
        </div>
      </form>
    </div>
  );
}
