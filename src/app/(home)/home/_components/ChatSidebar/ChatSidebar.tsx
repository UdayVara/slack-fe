import React from 'react'
import ChatSidebarHeader from './_components/ChatSidebarHeader'


function ChatSidebar() {
  return (
    <div className='h-full px-2 text-neutral-200  overflow-hidden bg-[#4a154b] w-96 max-w-96 border-r shadow'>
     <ChatSidebarHeader />
    </div>
  )
}

export default ChatSidebar