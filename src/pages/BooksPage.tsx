import PageTitle from "@/components/shared/PageTitle";
import BookListSection from "@/domains/books/components/BookListSection";
import BookSearchSection from "@/domains/books/components/BookSearchSection";

export default function BooksPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle>도서 검색</PageTitle>
      <BookSearchSection />
      <BookListSection />
    </div>
  );
}
