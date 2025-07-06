import { useState, useRef, useEffect, type ChangeEvent, type KeyboardEvent } from "react";

import PopoverBox from "@/components/shared/Popover";
import SearchInput from "@/components/shared/SearchInput";
import SearchPopoverContents from "@/components/shared/SearchPopoverContents";
import Button from "@/components/ui/Button";
import { useSearchHistoryStore } from "@/domains/books/store/searchHistoryStore";
import { useSearchStore } from "@/domains/books/store/searchStore";

export default function BookSearchSection() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const addSearchHistory = useSearchHistoryStore((state) => state.addSearchHistory);
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);
  const setTarget = useSearchStore((state) => state.setTarget);
  const setDetailSearch = useSearchStore((state) => state.setDetailSearch);
  const setSubmittedSearch = useSearchStore((state) => state.setSubmittedSearch);
  const clearSubmittedSearch = useSearchStore((state) => state.clearSubmittedSearch);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onSearchSubmit() {
    setSubmittedSearch(search);
    addSearchHistory(search);
    setTarget("title");
    setDetailSearch("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      onSearchSubmit();
      inputRef.current?.blur();
    }
  }

  function handleToggleFocus(nextFocus: boolean) {
    setIsFocused(nextFocus);
  }

  function handleSearchHistoryClick(keyword: string) {
    setSearch(keyword);
    setSubmittedSearch(keyword);
    setTarget("title");
    setDetailSearch("");
    inputRef.current?.blur();
  }

  useEffect(
    () => () => {
      clearSubmittedSearch();
    },
    [clearSubmittedSearch],
  );

  return (
    <section className="flex items-center gap-4">
      <SearchInput
        ref={inputRef}
        wrapperClassName="w-[480px]"
        value={search}
        placeholder="검색어를 입력하세요"
        isFocused={isFocused}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onFocus={() => handleToggleFocus(true)}
        onBlur={() => handleToggleFocus(false)}
        onSearchHistoryClick={handleSearchHistoryClick}
      />
      <PopoverBox
        trigger={
          <Button variant="outline" size="sm">
            상세검색
          </Button>
        }
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <SearchPopoverContents onClose={() => setPopoverOpen(false)} />
      </PopoverBox>
    </section>
  );
}
