"use server";

import { signIn } from "@/auth/auth";
import client from "@/lib/graphqlClient";
import { SIGNUP_USER_QUERY, VERIFY_OTP_QUERY } from "@/query/auth.query";
import { PlatformType } from "@/types/Models/user.model";
import { cookies } from "next/headers";

type handleSignupArgs = {
  username: string;
  email: string;
};

type handleVerifyOtpArgs = {
    otp:string,
    email:string
}
export const handleSignup = async (body: handleSignupArgs) => {
  try {
    const res = await client.mutate({
      mutation: SIGNUP_USER_QUERY,
      variables: {
        signupdata: {
          email: body.email,
          platform: PlatformType.default,
          username: body.username,
        },
      },
    });

    console.log("signup data -----------------------",res?.data)
    if(res.data?.signupUser?.statusCode == 201){
      const cookiesUtil = await cookies()
      cookiesUtil.set({
        name: "isOtpGenerated",
        value: "true",
        expires: new Date(Date.now() + 5 * 60 * 1000), 
        path: "/",
        httpOnly: true, 
        sameSite: "lax",
      });

      cookiesUtil.set({
        name: "useremail",
        value: res.data?.signupUser?.email,
        expires: new Date(Date.now() + 5 * 60 * 1000), 
        path: "/",
        httpOnly: false, 
        sameSite: "lax",
      })
        return { success: true, message: "OTP Sent Successfully" };
    }else{
        return {success:false,message:res?.data?.signupUser?.message || "Failed to Signup"}
    }
    
  } catch (error: any) {
    console.log("errror",error)
    return {
      success: false,
      message: error?.message || "Internal Server Error",
    };
  }
};

export const handleVerify = async(body:handleVerifyOtpArgs)=>{
  try {
    console.log("body",body)
    const res = await signIn("credentials",{...body,redirect:false})
    console.log(res,"result")
    return {success:true,message:"Verified Successfully"}
    
  } catch (error:any) {
    return {success:false,message:error?.cause?.err?.message|| "Internal Server Error"}
  }
}
