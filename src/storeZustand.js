import { create } from "zustand";

export const useAppStore = create((set) => ({
  roleUser: "",
  updateRole(roleUser) {
    set({ roleUser: roleUser });
  },
}));
