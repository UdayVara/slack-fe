"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings, SquarePen } from "lucide-react";

function ChatSidebarHeader() {
  return (
    <div className="flex flex-row items-center justify-between pt-3 gap-x-10">
      <DropdownMenu modal>
        <DropdownMenuTrigger className="flex flex-row grow items-center gap-2 cursor-pointer !border-none !outline-none !ring-0 text-lg">
          Demo Sample <ChevronDown className="ml-1" size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary-theme-background dark:bg-neutral-800 min-w-[190px]">
          <DropdownMenuLabel>Demo Sample</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer focus:!bg-primary-theme/90 dark:focus:bg-primary-theme focus:!text-white">Prefernces</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:!bg-primary-theme/90 dark:focus:bg-primary-theme focus:!text-white">Tools & Settings</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer focus:!bg-primary-theme/90 dark:focus:bg-primary-theme focus:!text-white">Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer focus:!bg-primary-theme/90 dark:focus:bg-primary-theme focus:!text-white">Signout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="right-actions flex flex-row items-center gap-4 text-neutral-500">
      <Settings className="!text-neutral-300 hover:!text-neutral-100 cursor-pointer transition-all" size={20}/>
      <SquarePen className="!text-neutral-300 hover:!text-neutral-100 cursor-pointer transition-all" size={20}/>
      </div>
    </div>
  );
}

export default ChatSidebarHeader;
