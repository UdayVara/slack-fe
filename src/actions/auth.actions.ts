"use server"

import { signIn } from "@/auth/auth"

export const handleGoogleSignin = async() => {
    await signIn("google",{
        redirect:false
    })
}