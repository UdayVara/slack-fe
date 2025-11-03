"use client"
import React, { useState } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AddWorkspaceDialog from '@/components/Custom/Workspace/AddWorkspace/AddWorkspaceDialog'
import { GoPlusCircle } from 'react-icons/go'

interface WorkspaceItemProps {
    workspace: any;
}
function WorkspaceItem({ workspace }: WorkspaceItemProps) {
    const [open,setOpen] = useState(false)
    const [cardOpen,setCardOpen] = useState(false)
  return (
    <>
         <HoverCard open={cardOpen} onOpenChange={setCardOpen} key={"workspace-ds"}>
        <HoverCardTrigger>
          <Avatar className="cursor-pointer rounded-full dark:bg-neutral-800/80 dark:text-neutral-200">
            <AvatarImage className='rounded-full h-12 w-12 object-cover object-center' src={workspace?.workspace?.workspaceImage} />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent
          side="right"
          align="end"
          alignOffset={100}
          sideOffset={2}
          className="bg-neutral-200 ml-4  p-0 text-black dark:bg-neutral-800  dark:text-neutral-200"
        >
          <div className="py-2 px-2 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700  w-full">
            <h5>{workspace?.workspace?.name}</h5>
            <p className=" text-neutral-700 dark:text-neutral-300 text-sm">{workspace?.workspace?.name?.replaceAll(" ","")}.slack.com</p>
          </div>

          <AddWorkspaceDialog
            open={open}
            setOpen={setOpen}
            onCreateWorkspace={()=>{setCardOpen(false);setOpen(false)}}
            triggerContent={
              <div className="py-2 px-2 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700  w-full" onClick={()=>setOpen(true)}>
                <h5 className="flex flex-row  items-center gap-2">
                  {" "}
                  <GoPlusCircle /> Create Workspace
                </h5>
              </div>
            }
          />
        </HoverCardContent>
      </HoverCard>
    </>
  )
}

export default WorkspaceItem