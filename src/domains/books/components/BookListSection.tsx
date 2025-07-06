import { useQuery } from "@tanstack/react-query";

import { getBooks } from "@/domains/books/apis";
import { useSearchStore } from "@/domains/books/store/searchStore";

export default function BookListSection() {
  const submittedSearch = useSearchStore((state) => state.submittedSearch);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["books", submittedSearch],
    queryFn: () => getBooks({ query: submittedSearch, page: 1, size: 10 }),
  });

  return (
    <section>
      <div className="flex flex-col gap-2 rounded border p-4">
        <div>isFetching: {String(isFetching)}</div>
        <div>isError: {String(isError)}</div>
        <div>data: {JSON.stringify(data, null, 2)}</div>
      </div>
    </section>
  );
}
