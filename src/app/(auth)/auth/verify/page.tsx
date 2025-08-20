import Image from "next/image";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Footer from "@/components/Auth/Footer";
import Link from "next/link";
import { Metadata } from "next";
import DockedSignupLabel from "@/components/Auth/DockedSignupLabel";
import { cookies } from "next/headers";
import InputOtpComponent from "./_components/InputOtpComponent";


export const metadata: Metadata = {
    title: "Verify | Slack",
    description: "Verify your account with Slack",
  };

async function page() {
  const cookiesStore = await cookies()
  return (
    <div className="flex flex-col  items-center mt-20 h-full w-full mx-auto max-w-md">
        <DockedSignupLabel />
      <Image
        className="w-[150px] h-auto gap-2 mx-auto"
        height={1000}
        width={1000}
        src={"/slack-logo-full.png"}
        alt="logo"
      />
      <h1 className="text-4xl text-center mt-4 font-semibold ">
        We emailed you a code
      </h1>
      <h5 className="text-neutral-700 text-center mt-2 text-lg">
        We’ve sent an email to <b>{cookiesStore.get("useremail")?.value}</b> Enter the code here or tap the
        button in the email to continue.
      </h5>
      <h5 className="text-neutral-700 text-center mt-5 text-base">
        If you can’t see the email, check your spam or junk folder.
      </h5>

      <InputOtpComponent/>

      <h4 className="mt-9">Can&apos;t find your code ? <span className="text-blue-600">Request new code</span></h4>
      <h5 className='mt-4'>Having Trouble? <Link href={"/"} className='text-blue-600'>Try entering workspace URL</Link></h5>
      <Footer />
    </div>
  );
}

export default page;
