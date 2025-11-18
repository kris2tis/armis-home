import { useMutation } from "@tanstack/react-query";
import { getOtpApi } from "../services/services";

export default function useGetOtp() {
  const {
    isPending: getOtpIsPending,
    mutateAsync: getOtpMutateAsync,
  } = useMutation({
    mutationFn: async (formData) => {
      return await getOtpApi(formData);
    },
  });
  return { getOtpIsPending, getOtpMutateAsync };
}
