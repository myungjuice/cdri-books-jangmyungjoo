import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { Target } from "@/types/books";

type SearchStoreState = {
  search: string;
  detailSearch: string;
  target: Target;
  submittedSearch: string;
  setSearch: (search: string) => void;
  setDetailSearch: (detailSearch: string) => void;
  setTarget: (target: Target) => void;
  setSubmittedSearch: (submittedSearch: string) => void;
  clearSubmittedSearch: () => void;
};

export const useSearchStore = create<SearchStoreState>()(
  devtools(
    (set) => ({
      search: "",
      target: "title",
      submittedSearch: "",
      setSearch: (search) => set({ search }),
      setDetailSearch: (detailSearch) => set({ detailSearch }),
      setTarget: (target) => set({ target }),
      setSubmittedSearch: (submittedSearch) => set({ submittedSearch }),
      clearSubmittedSearch: () => set({ search: "", submittedSearch: "" }),
    }),
    { name: "SearchStore" },
  ),
);
