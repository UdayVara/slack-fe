import React from "react";
import ChatSidebarHeader from "./_components/ChatSidebarHeader";
import { Headphones, NotebookText, Star } from "lucide-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import DirectMessageCollapsible from "./_components/DirectMessageCollapsible";
import ChannelsCollapisble from "./_components/ChannelsCollapisble";


function ChatSidebar() {
  return (
    <div className="h-full px-2 text-neutral-200  overflow-hidden bg-[#4a154b] w-96 max-w-96  shadow">
      <ChatSidebarHeader />
      <div className="other-actions mt-3">
        <div className="flex  flex-row items-center text-neutral-300 gap-2 cursor-pointer hover:text-neutral-100 group hover:bg-neutral-500/40 p-1 rounded ">
          <Headphones
            size={18}
            className="text-neutral-300 group-hover:!text-neutral-100 "
          />{" "}
          Huddle
        </div>
        <div className="flex flex-row items-center text-neutral-300 gap-2 cursor-pointer hover:text-neutral-100 group hover:bg-neutral-500/40 p-1 rounded ">
          <NotebookText
            size={18}
            className="text-neutral-300 group-hover:!text-neutral-100 "
          />{" "}
          Directory
        </div>
      </div>
      <hr className="border-b-[0.5px] border-neutral-600/50 mt-3"/>

      <div className="mt-2">
        <div className="flex flex-row items-center text-neutral-300 gap-2 cursor-pointer hover:text-neutral-100 group hover:bg-neutral-500/40 p-1 rounded ">
          <Star
            size={18}
            className="text-neutral-300 group-hover:!text-neutral-100 "
          />{" "}
          Starred
        </div>
      </div>

      <div className=" mt-2 flex flex-col gap-1">
        <ChannelsCollapisble/>
        <DirectMessageCollapsible/>
      </div>
    </div>
  );
}

export default ChatSidebar;
