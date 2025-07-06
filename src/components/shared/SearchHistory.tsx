import { X } from "lucide-react";

import { useSearchHistoryStore } from "@/domains/books/store/searchHistoryStore";

import Button from "../ui/Button";

type SearchInputProps = {
  onSearchHistoryClick: (keyword: string) => void;
};

export default function SearchInput({ onSearchHistoryClick }: SearchInputProps) {
  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);
  const removeSearchHistory = useSearchHistoryStore((state) => state.removeSearchHistory);

  return (
    <div className="bg-light-gray absolute top-[100%] left-0 z-10 w-full rounded-b-2xl p-6">
      {searchHistory.length === 0 ? (
        <div className="text-text-sub-title text-caption text-center">
          이전 검색 기록이 없습니다.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {searchHistory.map((keyword) => (
            <li key={keyword} className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="group w-[calc(100%-24px)] justify-start hover:bg-transparent"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onSearchHistoryClick(keyword)}
              >
                <span className="text-text-sub-title text-caption group-hover:text-primary">
                  {keyword}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-6 w-6 hover:bg-gray-200"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => removeSearchHistory(keyword)}
                aria-label="검색 기록 삭제"
              >
                <X className="h-6 w-6 text-black" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
