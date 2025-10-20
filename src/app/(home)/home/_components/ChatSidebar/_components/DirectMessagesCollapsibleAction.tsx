import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DirectMessagesCollapsibleAction({ onClose }: { onClose: () => void }) {
  return (
    <DropdownMenu open onOpenChange={(open) => !open && onClose()}>
      <DropdownMenuTrigger asChild>
        {/* Hidden trigger since you control it from parent */}
        <span></span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-neutral-600 text-white outline-none border-0 ring-0 min-w-[250px] z-50"
        align="end"
      >
        <DropdownMenuItem
          className="cursor-pointer focus:!bg-blue-500 focus:!text-white hover:bg-blue-500"
          onClick={onClose}
        >
        Send Message
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer focus:!bg-blue-500 focus:!text-white hover:bg-blue-500"
          onClick={onClose}
        >
        Create Group
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DirectMessagesCollapsibleAction;
