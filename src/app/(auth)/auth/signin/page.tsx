import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
        <div className='flex flex-col items-center justify-center h-full w-full mx-auto max-w-md'>
                <Image className='w-[200px] h-auto mx-auto' height={1000} width={1000} src={"/slack-logo-full.png"}  alt='logo'  />

                <h1 className='text-4xl text-center mt-2 font-semibold '>Enter your email address to sign in</h1>
                <h5 className="text-neutral-600 mt-2">Or choose another option</h5>
        </div>
    </>
  )
}

export default page