"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  CheckOtpForm,
  GetOtpForm,
  signinScheam,
  useCheckOtp,
  useGetOtp,
  useTimer,
} from "@/features/auth";

import { useAuth } from "@/context/useAuth";
import BaseImage from "@/components/ui/BaseImage";

export const metadata = {
  title: 'ورود',
}

export default function SigninPage() {
  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinScheam),
    mode: "onBlur",
  });
  const signinHandler = useAuth((state) => state.signinHandler);

  const { getOtpIsPending, getOtpMutateAsync } = useGetOtp();
  const { checkOtpIsPending, checkOtpMutateAsync } = useCheckOtp();

  const { push } = useRouter();

  const [step, setStep] = useState(1);
  const [isRunTimer, setIsRunTimer] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: null,
  });

  const getOtpHandler = async (data) => {
    setFormData(data);
    try {
      const { message } = await getOtpMutateAsync(formData);
      toast.success(message);
      setStep(2);
      setIsRunTimer(true);
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };
  const checkOtp = async (e) => {
    const data = {
      phoneNumber: formData.phoneNumber,
      otp: e["otp"],
    };

    try {
      const { message, user } = await checkOtpMutateAsync(data);
      toast.success(message);
      if (!user.isActive) {
        push("/complete-profile");
      } else {
        signinHandler(user);
        push("/");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  const renderSteps = (step) => {
    switch (step) {
      case 1:
        return (
          <GetOtpForm
            isPending={getOtpIsPending}
            onSubmit={handleSubmit(getOtpHandler)}
            register={register}
            errors={errors}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
            phoneNumberValue={formData.phoneNumber}
          />
        );

      case 2:
        return (
          <CheckOtpForm
            control={control}
            getValue={getValues}
            onSubmit={handleSubmit(checkOtp)}
            register={register}
            isPending={checkOtpIsPending}
            onBack={() => setStep(1)}
            getOtpCode={async () => {
              try {
                const { message } = await getOtpMutateAsync(formData);
                toast.success(message);
              } catch (error) {
                const errorMessage = error?.response?.data?.message;
                toast.error(errorMessage);
              }
            }}
            timer={{ second: second, isRunTimer: isRunTimer }}
          />
        );
      default:
        break;
    }
  };

  const { second } = useTimer(10, isRunTimer);

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <BaseImage
        src={"/assets/brand/logo.svg"}
        alt={"armis logo"}
        className="w-auto !h-[40px]"
      />

      {renderSteps(step)}
    </div>
  );
}
