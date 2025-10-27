"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type addDialogProps = {
    open:boolean,
    handleClose?:()=>void,
    handleOpen?:()=>void
}
function AddWorkspaceDialog({open,handleClose,handleOpen}:addDialogProps) {
  return (
    <Dialog open onOpenChange={(open)=>{
        if(open){
            if(handleOpen) handleOpen()
        }else{
            if(handleClose) handleClose()
        }
    }}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default AddWorkspaceDialog