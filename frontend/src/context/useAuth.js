"use client";

import { getUserProfile } from "@/services/authServices";
import { createContext, useEffect } from "react";
import { create } from "zustand";

export const useAuth = create((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signinHandler: (data) =>
    set(() => {
      return { user: data, isAuthenticated: true, isLoading: false };
    }),
  getUserProfile: (data) =>
    set(() => {
      return { user: data, isAuthenticated: true, isLoading: false };
    }),
  changeLoading: () => {
    set(() => ({ isLoading: false }));
  },
}));

const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const setUserProfile = useAuth((state) => state.getUserProfile);
  const changeLoading = useAuth((state) => state.changeLoading);

  const getProfile = async () => {
    try {
      const data = await getUserProfile();
      setUserProfile(data);
    } catch (error) {
      changeLoading();
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getProfile();
    }
    fetchData();
  }, []);
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
}
