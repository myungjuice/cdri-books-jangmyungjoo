import { Helmet } from "react-helmet-async";

import PageTitle from "@/components/shared/PageTitle";
import BookListSection from "@/domains/books/components/BookListSection";
import BookSearchSection from "@/domains/books/components/BookSearchSection";

export default function BooksPage() {
  return (
    <>
      <Helmet>
        <title>[CDRI] 도서 검색</title>
      </Helmet>
      <div className="flex flex-col gap-4">
        <PageTitle>도서 검색</PageTitle>
        <BookSearchSection />
        <BookListSection />
      </div>
    </>
  );
}
