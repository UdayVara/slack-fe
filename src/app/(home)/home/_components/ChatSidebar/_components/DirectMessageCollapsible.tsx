"use client"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ReceiverCard from './ReceiverCard'
import DirectMessagesCollapsibleAction from './DirectMessagesCollapsibleAction'
import { EllipsisVertical } from 'lucide-react';

function DirectMessageCollapsible() {
    const [open, setOpen] = useState(false);
    const receiverDummyData = [
        {
            name: "John Doe",
            id: "1",
        },
        {
            name: "Jane Doe",
            id: "2",
        },
    ]
  return (
    <>
<Accordion type="single" collapsible >
  <AccordionItem value="item-1">
    <AccordionTrigger className='hover:bg-neutral-500/40 group relative w-full px-1.5'>Direct Messages <EllipsisVertical
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
            <DirectMessagesCollapsibleAction
              onClose={() => setOpen(false)}
            />
            </div>
          )}
          </AccordionTrigger>
    <AccordionContent className='mt-1'>
      {receiverDummyData.map((receiver) => (
        <ReceiverCard key={receiver.id} name={receiver.name} id={receiver.id} />
      ))}
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </>
  )
}

export default DirectMessageCollapsible