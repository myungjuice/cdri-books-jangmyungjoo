import * as RadixPopover from "@radix-ui/react-popover";
import { X } from "lucide-react";
import * as React from "react";

type PopoverBoxProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
};

export default function Popover({ trigger, children, contentClassName }: PopoverBoxProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side="bottom"
          align="start"
          className={
            contentClassName ?? "z-50 h-[160px] w-[360px] rounded-lg bg-white p-6 shadow-lg"
          }
          sideOffset={8}
        >
          {children}
          <RadixPopover.Close className="text-gray-2 absolute top-2 right-2 cursor-pointer">
            <X size={20} />
          </RadixPopover.Close>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
