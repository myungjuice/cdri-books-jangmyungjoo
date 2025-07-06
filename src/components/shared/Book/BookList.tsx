import { useState, useEffect, type PropsWithChildren } from "react";

import Empty from "@/components/shared/Empty";
import Error from "@/components/shared/Error";
import SpinnerPage from "@/components/shared/SpinnerPage";
import { Accordion } from "@/components/ui/Accordion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { isWishlist } from "@/libs/utils";
import type { GetBooksResponse } from "@/types/books";

import BookItem from "./BookItem";

type Props = {
  data?: GetBooksResponse;
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  startPage: number;
  endPage: number;
  onPageChange: (page: number) => void;
};

type BookListWrapperProps = PropsWithChildren & {
  totalCount?: number;
};

function BookListWrapper({ children, totalCount }: BookListWrapperProps) {
  return (
    <div>
      <div className="text-text-primary text-caption mt-4 flex items-center gap-2">
        <p>{isWishlist() ? "찜한 책" : "도서 검색 결과"}</p>
        <p>
          총 <span className="text-primary">{(totalCount ?? 0).toLocaleString()}</span>건
        </p>
      </div>
      {children}
    </div>
  );
}

export default function BookListSection({
  data,
  isLoading,
  isError,
  currentPage,
  startPage,
  endPage,
  onPageChange,
}: Props) {
  const [openAccordionValue, setOpenAccordionValue] = useState<string>("-1");

  function handleAccordionValueChange(value: string) {
    setOpenAccordionValue(value);
  }

  useEffect(() => {
    setOpenAccordionValue("-1");
  }, [currentPage]);

  if (isLoading) {
    return (
      <BookListWrapper>
        <SpinnerPage />
      </BookListWrapper>
    );
  }

  if (isError) {
    return (
      <BookListWrapper>
        <Error />
      </BookListWrapper>
    );
  }

  if (data?.meta.total_count === 0) {
    return (
      <BookListWrapper>
        <Empty text={isWishlist() ? "찜한 책이 없습니다." : "검색된 결과가 없습니다."} />
      </BookListWrapper>
    );
  }

  return (
    <BookListWrapper totalCount={data?.meta.total_count}>
      <Accordion
        type="single"
        collapsible
        value={openAccordionValue}
        onValueChange={setOpenAccordionValue}
        className="mx-auto mt-8 w-full"
      >
        {data?.documents.map((book, idx) => (
          <BookItem
            key={book.isbn}
            book={book}
            idx={idx}
            openAccordionValue={openAccordionValue}
            onAccordionValueChange={handleAccordionValueChange}
          />
        ))}
      </Accordion>

      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: endPage - startPage + 1 }).map((_, idx) => {
              const pageNum = startPage + idx;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    isActive={currentPage === pageNum}
                    onClick={() => onPageChange(pageNum)}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                disabled={data?.meta.is_end}
                onClick={() => onPageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </BookListWrapper>
  );
}
