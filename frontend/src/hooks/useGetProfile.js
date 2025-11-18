"use client";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/services/authServices";
import { useMemo } from "react";

export default function useGetProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => await getUserProfile(),
  });

  const targetKeys = ["name", "email", "biography", "phoneNumber"];
  const newObject = useMemo(() => {
    if (!data?.user) return {};
    const obj = {};
    for (const [key, value] of Object.entries(data.user)) {
      if (targetKeys.includes(key)) {
        obj[key] = value;
      }
    }
    return obj;
  }, [data]);

  return { defaultValues: newObject, isLoading: isLoading };
}
