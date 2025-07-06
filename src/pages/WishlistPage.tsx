import PageTitle from "@/components/shared/PageTitle";
import BookListSection from "@/domains/wishlist/components/BookListSection";

export default function WishlistPage() {
  return (
    <div>
      <PageTitle>내가 찜한 책</PageTitle>
      <BookListSection />
    </div>
  );
}
