import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import type { Document } from "@/types/books";

type WishlistStoreState = {
  wishlist: Document[];
  page: number;
  total: number;
  pagedWishlist: Document[];
  addToWishlist: (book: Document) => void;
  removeFromWishlist: (isbn: string) => void;
  clearWishlist: () => void;
  setPage: (page: number) => void;
};

const PAGE_SIZE = 10;

function getPagedWishlist(wishlist: Document[], page: number) {
  const start = (page - 1) * PAGE_SIZE;
  return wishlist.slice(start, start + PAGE_SIZE);
}

export const useWishlistStore = create<WishlistStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        wishlist: [],
        page: 1,
        total: 0,
        get pagedWishlist() {
          const { wishlist, page } = get();
          return getPagedWishlist(wishlist, page);
        },
        addToWishlist: (book) => {
          set((state) => {
            if (state.wishlist.some((b) => b.isbn === book.isbn)) return state;
            const newWishlist = [book, ...state.wishlist];
            return {
              wishlist: newWishlist,
              total: newWishlist.length,
              page: 1,
            };
          });
        },
        removeFromWishlist: (isbn) => {
          set((state) => {
            const newWishlist = state.wishlist.filter((b) => b.isbn !== isbn);
            const maxPage = Math.max(1, Math.ceil(newWishlist.length / PAGE_SIZE));
            return {
              wishlist: newWishlist,
              total: newWishlist.length,
              page: Math.min(state.page, maxPage),
            };
          });
        },
        clearWishlist: () => set({ wishlist: [], total: 0, page: 1 }),
        setPage: (page) =>
          set((state) => ({
            page: Math.max(1, Math.min(page, Math.ceil(state.wishlist.length / PAGE_SIZE))),
          })),
      }),
      {
        name: "CDRI_WISHLIST",
      },
    ),
    { name: "WishlistStore" },
  ),
);
