import PageTitle from "@/components/shared/PageTitle";
import BooksListSection from "@/domains/books/components/BooksListSection";
import BooksSearchSection from "@/domains/books/components/BooksSearchSection";

export default function BooksPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageTitle>도서 검색</PageTitle>
      <BooksSearchSection />
      <BooksListSection />
    </div>
  );
}
