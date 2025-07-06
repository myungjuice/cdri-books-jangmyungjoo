import { useMemo, useEffect } from "react";

import BookList from "@/components/shared/Book/BookList";
import { usePagination } from "@/hooks/usePagination";
import { useWishlistStore } from "@/store/wishlistStore";

const PAGE_SIZE = 10;

export default function BookListSection() {
  const page = useWishlistStore((state) => state.page);
  const setPage = useWishlistStore((state) => state.setPage);
  const wishlist = useWishlistStore((state) => state.wishlist);
  const total = useWishlistStore((state) => state.total);

  const { startPage, endPage, getPagedList } = usePagination({
    totalCount: total,
    pageSize: PAGE_SIZE,
    currentPage: page,
  });

  const data = useMemo(
    () => ({
      meta: {
        is_end: page === endPage,
        pageable_count: 1,
        total_count: total,
      },
      documents: getPagedList(wishlist, page, PAGE_SIZE),
    }),
    [page, endPage, total, wishlist, getPagedList],
  );

  useEffect(
    () => () => {
      setPage(1);
    },
    [setPage],
  );

  return (
    <section>
      <BookList
        data={data}
        isLoading={false}
        isError={false}
        currentPage={page}
        startPage={startPage}
        endPage={endPage}
        onPageChange={setPage}
      />
    </section>
  );
}
