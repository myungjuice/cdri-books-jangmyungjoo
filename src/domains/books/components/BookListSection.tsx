import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import BookList from "@/components/shared/Book/BookList";
import { getBooks } from "@/domains/books/apis";
import { useSearchStore } from "@/domains/books/store/searchStore";
import { usePagination } from "@/hooks/usePagination";

const PAGE_SIZE = 10;

export default function BookListSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const submittedSearch = useSearchStore((state) => state.submittedSearch);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", submittedSearch, currentPage],
    queryFn: () => getBooks({ query: submittedSearch, page: currentPage, size: PAGE_SIZE }),
  });

  const { totalPage, startPage, endPage } = usePagination({
    totalCount: data?.meta?.pageable_count ?? 0,
    pageSize: PAGE_SIZE,
    currentPage,
  });

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPage) return;
    setCurrentPage(page);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [submittedSearch]);

  return (
    <section>
      <BookList
        data={data}
        isLoading={isLoading}
        isError={isError}
        currentPage={currentPage}
        startPage={startPage}
        endPage={endPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
