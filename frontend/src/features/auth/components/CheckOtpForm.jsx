import BaseImage from "@/components/ui/BaseImage";
import Button from "@/components/ui/Button";
import React from "react";
import { Controller } from "react-hook-form";
import VerificationInput from "react-verification-input";

export default function CheckOtpForm({
  onSubmit,
  isPending,
  control,
  getOtpCode,
  onBack,
  timer: { second },
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-3 w-full ">
        <div className="flex items-center gap-x-1">
          <BaseImage
            src={"/assets/icons/black-long-arrow.svg"}
            alt={"black long arrow icon"}
            heigth="12"
          />
          <span onClick={onBack}>تغییر شماره موبایل</span>
        </div>
        <h4>تایید کد</h4>
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <VerificationInput
              validChars="0-9"
              inputProps={{ inputMode: "numeric" }}
              {...field}
            />
          )}
        />

        {isPending ? (
          <Button className="dot-loader p-2" disabled></Button>
        ) : (
          <Button className="p-2">تایید کد</Button>
        )}
        {second ? (
          <span>{second} تا ارسال دوباره کد</span>
        ) : (
          <span onClick={getOtpCode}>ارسال دوباره کد تایید</span>
        )}
      </div>
    </form>
  );
}
