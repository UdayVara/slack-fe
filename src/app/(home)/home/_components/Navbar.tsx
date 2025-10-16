import React from 'react'

function Navbar() {
  return (
   <nav className='sticky top-0 w-full text-white bg-primary-theme text-center z-20 py-1'>
    <input type="text" placeholder='Search anything' className="py-1 text-xs  min-w-lg focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0 rounded px-3 my-1 bg-[#8e398f]" />
   </nav>
  )
}

export default Navbar