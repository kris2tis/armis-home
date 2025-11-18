import { completeProfileApi } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
export default function useCompleteProfile() {
  const { mutateAsync: completeProfileMutateAsync, isPending: isCompleting } =
    useMutation({
      mutationFn: async (formData) => completeProfileApi(formData),
    });

  return { completeProfileMutateAsync, isCompleting };
}
