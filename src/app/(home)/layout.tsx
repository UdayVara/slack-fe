import React from 'react'
import MiniSidebar from './home/_components/MiniSidebar'
import ChatSidebar from './home/_components/ChatSidebar'
import Navbar from './home/_components/Navbar'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-full w-full gap-0 flex flex-row">
        <Navbar />
            <MiniSidebar />
            <ChatSidebar />
        {children}
       </div>
  )
}

export default layout