"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReceiverCard from "./ReceiverCard";
import { EllipsisVertical } from "lucide-react";
import ChannelCollapsibleAction from "./ChannelCollapsibleAction";

function ChannelsCollapisble() {
  const receiverDummyData = [
    { name: "General", id: "1" },
    { name: "Development", id: "2" },
    { name: "Marketing & Sales", id: "3" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <Accordion defaultValue="item-1" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-neutral-500/40 group relative w-full px-1.5">
          Channels{" "}
          <EllipsisVertical
            size={26}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-500/60 rounded cursor-pointer hidden group-hover:block"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          />
          {/* Show dropdown when open is true */}
          {open && (
            <div className="absolute right-[calc(-3%-250px)] top-0">
            <ChannelCollapsibleAction
              onClose={() => setOpen(false)}
            />
            </div>
          )}
        </AccordionTrigger>

        <AccordionContent className="mt-1 pb-0">
          {receiverDummyData.map((receiver) => (
            <ReceiverCard
              key={receiver.id}
              name={receiver.name}
              id={receiver.id}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ChannelsCollapisble;
