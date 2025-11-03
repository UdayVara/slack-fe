import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { GoPlusCircle } from "react-icons/go";
import AddWorkspaceDialog from "@/components/Custom/Workspace/AddWorkspace/AddWorkspaceDialog";
import ThemeToggler from "@/components/Common/ThemeToggler/ThemeToggler";
import WorkspaceList from "./_components/WorkspaceList";

function MiniSidebar() {
  return (
    <div className="h-full text-neutral-200 bg-primary-theme w-[68px] max-h-full overflow-y-auto border-r border-r-[#5e285f] flex flex-col items-center gap-4 shadow pt-1 relative">
     <WorkspaceList/>

      <Link
        href="/home"
        className="flex flex-col items-center justify-center gap-0.5 cursor-pointer group rounded"
      >
        <AiFillHome className="text-4xl py-1 px-2 rounded transition-transform duration-200 transform group-hover:scale-110 group-hover:bg-[#926093]" />
        <span className="text-white text-xs">Home</span>
      </Link>

      <Link
        href="/direct-messages"
        className="flex flex-col items-center justify-center gap-0.5 cursor-pointer group rounded"
      >
        <TbMessageCircle className="text-4xl py-1 px-2 rounded transition-transform duration-200 transform group-hover:scale-110 group-hover:bg-[#926093]" />
        <span className="text-white text-xs">DMs</span>
      </Link>

      <Link
        href="/activity"
        className="flex flex-col items-center justify-center gap-0.5 cursor-pointer group s rounded"
      >
        <IoNotifications className="text-4xl py-1 px-2 rounded transition-transform duration-200 transform group-hover:scale-110 group-hover:bg-[#926093]" />
        <span className="text-white text-xs">Activity</span>
      </Link>

      <Link
        href="/files"
        className="flex flex-col items-center justify-center gap-0.5 cursor-pointer group rounded"
      >
        <LuFiles className="text-4xl py-1 px-2 rounded transition-transform duration-200 transform group-hover:scale-110 group-hover:bg-[#926093]" />
        <span className="text-white text-xs">Files</span>
      </Link>

      <div className="absolute bottom-4 text-neutral-300">
       <ThemeToggler/>
        
      </div>
    </div>
  );
}

export default MiniSidebar;
