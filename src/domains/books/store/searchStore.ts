import { create } from "zustand";
import { devtools } from "zustand/middleware";

type SearchStoreState = {
  search: string;
  submittedSearch: string;
  setSearch: (search: string) => void;
  setSubmittedSearch: (submittedSearch: string) => void;
};

export const useSearchStore = create<SearchStoreState>()(
  devtools(
    (set) => ({
      search: "",
      submittedSearch: "",
      setSearch: (search) => set({ search }),
      setSubmittedSearch: (submittedSearch) => set({ submittedSearch }),
    }),
    { name: "SearchStore" },
  ),
);
