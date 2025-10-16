import React from 'react'
import MiniSidebar from './home/_components/MiniSidebar'
import ChatSidebar from './home/_components/ChatSidebar/ChatSidebar'
import Navbar from './home/_components/Navbar'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full w-full gap-0 flex flex-col">
        <Navbar />
        <div className='flex flex-row w-full h-full gap-0'>

            <MiniSidebar />
            <ChatSidebar />
        {children}
        </div>
       </div>
  )
}

export default layout