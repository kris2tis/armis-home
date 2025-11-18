import Button from "@/components/ui/Button";
import RHFInput from "@/components/ui/RHFInput";
import React from "react";

export default function CompleteProfileForm({
  onSubmit,
  register,
  errors,
  isPending,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-5">
        <h4 className="lg:text-[22px]">اطلاعاتتان را تکمیل کنید</h4>
        <div className="flex flex-col gap-y-4">
          <RHFInput
            name={"name"}
            label={"نام و نام خانوادگی"}
            errors={errors}
            register={register}
          />

          <RHFInput
            name={"email"}
            label={"ایمیل خود را وارد کنید"}
            errors={errors}
            register={register}
            type="email"
          />
        </div>

        {isPending ? (
          <Button className="dot-loader" disabled></Button>
        ) : (
          <Button className="p-2">تکمیل اطلاعات</Button>
        )}
      </div>
    </form>
  );
}
