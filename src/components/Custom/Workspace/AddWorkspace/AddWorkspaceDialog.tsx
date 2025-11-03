"use client"
import React,{useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddWorkspaceForm from './_compoents/AddWorkspaceForm'

type addDialogProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    onCreateWorkspace?:()=>void,
    triggerContent?:React.ReactNode
}
function AddWorkspaceDialog({open,setOpen,onCreateWorkspace,triggerContent}:addDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <>{triggerContent}</>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Workspace</DialogTitle>
      <DialogDescription>
       Create a new workspace to start collaborating with your team.
      </DialogDescription>
    </DialogHeader>
    <AddWorkspaceForm handleClose={()=>{setOpen(false);onCreateWorkspace?.();}}/>
  </DialogContent>
</Dialog>
  )
}

export default AddWorkspaceDialog