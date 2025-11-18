"use client";

import Button from "@/components/ui/Button";
import RHFInput from "@/components/ui/RHFInput";

export default function GetOtpForm({
  onSubmit,
  register,
  errors,
  isPending,
  onChange,
  phoneNumberValue,
}) {
  return (
    <form className="flex flex-col gap-y-3" onSubmit={onSubmit}>
      <h4 className="font-medium">ورود | یا ثبت نام</h4>
      <div className="flex flex-col gap-y-3">
        <RHFInput
          value={phoneNumberValue}
          onChange={onChange}
          errors={errors}
          label={"شماره موبایل"}
          name={"phoneNumber"}
          register={register}
        />
        {isPending ? (
          <Button className="dot-loader p-2" disabled></Button>
        ) : (
          <Button className="p-2">دریافت کد</Button>
        )}
      </div>
    </form>
  );
}
