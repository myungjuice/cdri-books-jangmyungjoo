import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type BooksStoreState = {
  searchHistory: string[];
  addSearchHistory: (keyword: string) => void;
  removeSearchHistory: (keyword: string) => void;
};

export const useBooksStore = create<BooksStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        searchHistory: [],
        addSearchHistory: (keyword) => {
          if (!keyword.trim()) return;
          const prev = get().searchHistory.filter((k) => k !== keyword);
          const next = [keyword, ...prev].slice(0, 8);
          set({ searchHistory: next });
        },
        removeSearchHistory: (keyword) => {
          set({ searchHistory: get().searchHistory.filter((k) => k !== keyword) });
        },
      }),
      {
        name: "CDRI_BOOKS_SEARCH_HISTORY",
      },
    ),
    { name: "BooksStore" },
  ),
);
