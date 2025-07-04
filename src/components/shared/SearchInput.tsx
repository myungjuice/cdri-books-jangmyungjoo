import { Search } from "lucide-react";
import * as React from "react";

import Input from "@/components/ui/Input";
import { cn } from "@/libs/utils";

type SearchInputProps = React.ComponentProps<"input"> & {
  wrapperClassName?: string;
};

export default function SearchInput({ className, wrapperClassName, ...props }: SearchInputProps) {
  return (
    <div
      className={cn(
        "bg-light-gray flex h-[50px] w-full items-center rounded-full px-6",
        wrapperClassName,
      )}
    >
      <Search className="text-black/70" size={30} />
      <Input type="text" variant="ghost" className={className} {...props} />
    </div>
  );
}
