import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoNotifications } from 'react-icons/io5'
import { LuFiles } from 'react-icons/lu'
import { TbMessageCircle } from 'react-icons/tb'

function MiniSidebar() {
  return (
    <div className="h-full text-neutral-200  overflow-hidden bg-primary-theme w-[68px] max-h-full overflow-y-auto max-w-[68px] border-r border-r-[#5e285f] flex flex-col gap-5 shadow pt-1">
          <Link href={"/home"} className="icon-wrap flex flex-col items-center justify-center gap-0.5  transtion-all duration-200 ease-in-out cursor-pointer group rounded">
            <AiFillHome className='text-4xl  py-1 px-2 hover:bg-[#926093] rounded' />
            <span className="text-white text-xs">Home</span>
          </Link>
          
          <Link href={"/direct-messages"} className="icon-wrap flex flex-col items-center justify-center gap-0.5  transtion-all duration-200 ease-in-out cursor-pointer group rounded">
            <TbMessageCircle fill='#ffffff' className='text-4xl   py-1 px-2 hover:bg-[#926093] rounded' />
            <span className="text-white  text-xs">DMs</span>
          </Link>
          <Link href={"activity"} className="icon-wrap flex flex-col items-center justify-center gap-0.5  transtion-all duration-200 ease-in-out cursor-pointer group rounded">
            <IoNotifications className='text-4xl  py-1 px-2 hover:bg-[#926093] rounded' />
            <span className="text-white text-xs">Activity</span>
          </Link>
          <Link href={"/files"} className="icon-wrap flex flex-col items-center justify-center gap-0.5  transtion-all duration-200 ease-in-out cursor-pointer group rounded">
            <LuFiles  className='text-4xl  py-1 px-2 hover:bg-[#926093] rounded' />
            <span className="text-white text-xs">Files</span>
          </Link>
         
    </div>
  )
}

export default MiniSidebar