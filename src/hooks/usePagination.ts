import { useState, useEffect, useCallback } from "react";

type Props = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
};

export function usePagination({ totalCount, pageSize, currentPage }: Props) {
  const totalPage = Math.max(1, Math.ceil(totalCount / pageSize));

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(totalPage);

  const getPageRange = useCallback(() => {
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPage);

    setStartPage(startPage);
    setEndPage(endPage);
  }, [currentPage, totalPage]);

  useEffect(() => {
    getPageRange();
  }, [getPageRange]);

  return {
    totalPage,
    startPage,
    endPage,
  };
}
