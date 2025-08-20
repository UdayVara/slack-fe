import client from "@/lib/graphqlClient";
import { VERIFY_OTP_QUERY } from "@/query/auth.query";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const nextAuthConfig: NextAuthConfig= {
    providers:[
        Google({clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,}),
        GitHub({
            clientId:process.env.AUTH_GITHUB_ID,
            clientSecret:process.env.AUTH_GITHUB_SECRET
        }),
        Credentials({
            name:"Credentials",
            async authorize(credentials){
                try {
                    const res = await client.mutate({
                        mutation: VERIFY_OTP_QUERY,
                        variables: {
                            verifyOtpVerifyData2: {
                                otp: credentials.otp,
                                email: credentials.email,
                            },
                        },
                    });
                    console.log("res",res)
                    if(res.data?.verifyOtp?.statusCode == 201){
                        return {
                            id:res.data?.verifyOtp?.user?.id,
                            email:res.data?.verifyOtp?.user?.email,
                            username:res.data?.verifyOtp?.user?.username,
                            verified:res.data?.verifyOtp?.user?.verified,
                            platform:res.data?.verifyOtp?.user?.platform,
                            token:res.data?.verifyOtp?.token,
                            image:res.data?.verifyOtp?.user?.image,
                        }
                    }else{
                        throw new Error(res.data?.verifyOtp?.message || "Internal Server Error")
                    }
                } catch (error:any) {
                    throw new Error(error?.message || "Internal Server Error")
                }
            }
        })
    ],
    callbacks:{
        signIn:({profile,account})=>{
            if(account?.provider == "google"){
                console.log("Google Login Deteced",profile)
            }
            if(account?.provider == "github"){
                console.log("Google Login Deteced",profile)
            }
            return true;
        },
        jwt(params) {
            if(params.user){
                params.token.user = params.user
            }
            return params.token
        },
        session(params : any) {
            if(params.token?.user){
                params.session.user = params.token?.user
            }
            return params.session
        },

    },
    pages:{
        signIn:"/auth/signin"
    }
}