import { Search } from "lucide-react";
import { type ComponentProps } from "react";

import Input from "@/components/ui/Input";
import { cn } from "@/libs/utils";

import SearchHistory from "./SearchHistory";

type SearchInputProps = ComponentProps<"input"> & {
  wrapperClassName?: string;
  isFocused: boolean;
  onSearchHistoryClick: (keyword: string) => void;
};

export default function SearchInput({
  className,
  wrapperClassName,
  isFocused,
  onSearchHistoryClick,
  ...props
}: SearchInputProps) {
  return (
    <div
      className={cn(
        "bg-light-gray relative flex h-[50px] w-full items-center px-6",
        isFocused ? "rounded-t-2xl" : "rounded-2xl",
        wrapperClassName,
      )}
    >
      <Search className="text-black/70" size={30} />
      <Input type="text" variant="ghost" className={className} {...props} />

      {isFocused && <SearchHistory onSearchHistoryClick={onSearchHistoryClick} />}
    </div>
  );
}
