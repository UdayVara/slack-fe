import DockedSignupLabel from '@/components/Auth/DockedSignupLabel'
import Footer from '@/components/Auth/Footer'
import { Button } from '@/components/ui/button'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import ButtonActions from './_components/ButtonActions'


export const metadata: Metadata = {
  title: "Login | Slack",
  description: "Login to Slack",
};

function page() {
  return (
    <>
        <div className='flex flex-col items-center mt-20 h-full w-full mx-auto max-w-md'>
          <DockedSignupLabel />
                <Image className='w-[150px] h-auto gap-2 mx-auto' height={1000} width={1000} src={"/slack-logo-full.png"}  alt='logo'  />

                <h1 className='text-4xl text-center mt-2 font-semibold '>Enter your email address to sign in</h1>
                <h5 className="text-neutral-600 mt-2">Or choose another option</h5>

                <div className='flex flex-col items-center justify-center w-[90%]'>
                <Input  placeholder='name@work-email.com' className='mt-4  border-2 border-gray-300 rounded-lg h-12 !text-lg w-full focus-visible:border-theme/60' />

                <Button className='mt-4 bg-theme hover:bg-theme/90 border-2 border-gray-300 rounded-lg h-12 !text-lg w-full'>Continue</Button>

                <div className="flex flex-row items-center my-4 w-full gap-5">
                  <DropdownMenuSeparator  className='border grow border-gray-300 mt-2'/> <span className="uppercase">or sign in with</span> <DropdownMenuSeparator  className='border border-gray-300 grow'/>
                </div>

              <ButtonActions />
                <h5 className='mt-4'>Having Trouble? <Link href={"/"} className='text-blue-600'>Try entering workspace URL</Link></h5>
                

                <Footer />
                
                </div>
        </div>
    </>
  )
}

export default page