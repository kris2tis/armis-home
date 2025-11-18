import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => await getUserProfile(),
  });
  return { data: data, isLoading, isLoading };
}
