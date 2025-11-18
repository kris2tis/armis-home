"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  CompleteProfileForm,
  completeProfileScheam,
  useCompleteProfile,
} from "@/features/auth";

export default function CompleteProfile() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(completeProfileScheam),
    mode: "onBlur",
  });

  const { completeProfileMutateAsync, isCompleting } = useCompleteProfile();
  const { push } = useRouter();

  const completeProfile = async (formData) => {
    try {
      const { message } = await completeProfileMutateAsync(formData);
      toast.success(message);
      push("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
    <CompleteProfileForm
      isPending={isCompleting}
      onSubmit={handleSubmit(completeProfile)}
      register={register}
      errors={errors}
    />
  );
}
