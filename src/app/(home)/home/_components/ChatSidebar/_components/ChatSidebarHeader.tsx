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
    <div className="flex flex-row items-center justify-between pt-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row items-center gap-2 cursor-pointer !border-none !outline-none !ring-0">
          Demo Sample <ChevronDown className="ml-2" size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Demo Sample</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Prefernces</DropdownMenuItem>
          <DropdownMenuItem>Tools & Settings</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Signout</DropdownMenuItem>
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
