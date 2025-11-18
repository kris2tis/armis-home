"use client";

import { create } from "zustand";

export const useModal = create((set) => ({
  isOpen: false,
  data: null,
  toggleModal: (value) => {
    set(({ isOpen }) => {
      let val;
      if (value === undefined || null) {
        val = !isOpen;
      } else val = value;
      return {
        isOpen: val,
      };
    });
  },
  setData: (data) => {
    set(() => ({ data: data }));
  },
}));
