import { useMutation } from "@tanstack/react-query";
import { checkOtpApi } from "../services/services";

export default function useCheckOtp() {
  const { mutateAsync: checkOtpMutateAsync, isPending: checkOtpIsPending } =
    useMutation({
      mutationFn: async (formData) => await checkOtpApi(formData),
    });
  return { checkOtpMutateAsync, checkOtpIsPending };
}
