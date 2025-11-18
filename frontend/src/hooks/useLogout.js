"use client";
import { logoutApi } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useLogout() {
  const { push } = useRouter();
  const logoutHandler = async () => {
    try {
      const { message } = await logoutApi();
      toast.success(message);
      push("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };
  return logoutHandler;
}
