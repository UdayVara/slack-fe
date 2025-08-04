"use server"

import { signIn } from "@/auth/auth"


type handleSignupArgs =  {
    username:string,
    email:string
}
export const handleSignup = async(body:handleSignupArgs) => {
    try {
        await signIn("credentials",{
            username: body.username,
            email:body.email,
            isSignUp:true,
            redirect:false
        })

        return {success:true,message:"OTP Sent Successfully"}
    } catch (error:any) {
        return {success:false,message:error?.message || "Internal Server Error"}
    }
}