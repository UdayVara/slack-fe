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
    handleClose?:()=>void,
    handleOpen?:()=>void,
    triggerContent?:React.ReactNode
}
function AddWorkspaceDialog({handleClose,handleOpen,triggerContent}:addDialogProps) {
  const [open,setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={(open)=>{
        if(open){
            if(handleOpen) handleOpen()
        }else{
            if(handleClose) handleClose()
        }
    }}>
      <DialogTrigger className='w-full' onClick={()=>setOpen(true)}>{triggerContent}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create Workspace</DialogTitle>
      <DialogDescription>
       Create a new workspace to start collaborating with your team.
      </DialogDescription>
    </DialogHeader>
    <AddWorkspaceForm handleClose={()=>{setOpen(false);}}/>
  </DialogContent>
</Dialog>
  )
}

export default AddWorkspaceDialog