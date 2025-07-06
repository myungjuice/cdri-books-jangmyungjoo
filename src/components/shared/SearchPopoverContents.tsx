import { ChevronDownIcon } from "lucide-react";
import { useState, type ChangeEvent, type KeyboardEvent, useRef, useEffect } from "react";

import Button from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/DropdownMenu";
import Input from "@/components/ui/Input";
import { useSearchStore } from "@/domains/books/store/searchStore";
import type { Target } from "@/types/books";

type TargetOption = {
  text: string;
  value: Target;
};

const TARGET_OPTIONS: Array<TargetOption> = [
  {
    text: "제목",
    value: "title",
  },
  {
    text: "저자명",
    value: "person",
  },
  {
    text: "출판사",
    value: "publisher",
  },
];

type Props = {
  onClose?: () => void;
};

export default function SearchPopoverContents({ onClose }: Props) {
  const detailSearch = useSearchStore((state) => state.detailSearch);
  const selectedTarget = useSearchStore((state) => state.target);
  const setSearch = useSearchStore((state) => state.setSearch);
  const setDetailSearch = useSearchStore((state) => state.setDetailSearch);
  const setSelectedTarget = useSearchStore((state) => state.setTarget);
  const setSubmittedSearch = useSearchStore((state) => state.setSubmittedSearch);

  const [target, setTarget] = useState<Target>(selectedTarget);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFilterSelect(value: Target) {
    setTarget(value);
  }

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setDetailSearch(e.target.value);
  }

  function handleSubmit() {
    setSelectedTarget(target);
    setSubmittedSearch(detailSearch);
    setSearch("");
    if (onClose) onClose();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleSubmit();
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="underline" className="h-9 w-[100px] justify-between !p-1.5">
              <span className="text-caption-medium font-bold !text-black">
                {TARGET_OPTIONS.find((t) => t.value === target)?.text}
              </span>
              <ChevronDownIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {TARGET_OPTIONS.filter((option) => option.value !== target).map((option) => (
              <DropdownMenuItem
                key={option.value}
                onSelect={() => handleFilterSelect(option.value)}
              >
                {option.text}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          ref={inputRef}
          placeholder="검색어 입력"
          className="flex-1"
          value={detailSearch}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button size="fill" onClick={handleSubmit} disabled={!detailSearch}>
        검색하기
      </Button>
    </div>
  );
}
