import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    
    <>
        <div className="flex fixed bottom-10 text-sm flex-row text-neutral-600 items-center justify-center gap-6 ">
            <Link href={"/privacy-terms"}>Privacy & Terms</Link>
            <Link href={"/contact"}>Contact us</Link>
        </div>
    </>
  )
}

export default Footer