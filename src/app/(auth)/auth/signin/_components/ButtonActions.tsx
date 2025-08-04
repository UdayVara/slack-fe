"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

function ButtonActions() {
    const buttonSignInHandler = async(provider:"google" | "github") => {
        await signIn(provider)
    }
  return (
    <div className="mt-3 flex flex-row gap-3 items-center w-full">
    <Button onClick={() => buttonSignInHandler("google")} className='bg-transparent py-5 border-2 border-theme text-md text-black rounded-lg grow hover:bg-neutral-200 cursor-pointer'>Google <FcGoogle /></Button>
    <Button onClick={() => buttonSignInHandler("github")} className='bg-transparent py-5 border-2 border-theme text-md text-black rounded-lg grow hover:bg-neutral-200 cursor-pointer'>Github <FaGithub /></Button>
</div>
  )
}

export default ButtonActions