import { editUserProfileApi } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateProfile() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values) => await editUserProfileApi(values),
  });

  return { isUpdating: isPending, updateMutateAsync: mutateAsync };
}
