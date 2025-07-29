import Link from 'next/link'
import React from 'react'

function DockedSignupLabel() {
  return (
    <div className='md:flex hidden fixed right-2 top-10 text-sm flex-col text-right '>
        <span>New to Slack?</span>
        <Link href={"/signup"} className='text-blue-700 font-semibold'>Create an account</Link>
    </div>
  )
}

export default DockedSignupLabel