import { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const nextAuthConfig: NextAuthConfig= {
    providers:[
        Google({clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,}),
        GitHub({
            clientId:process.env.AUTH_GITHUB_ID,
            clientSecret:process.env.AUTH_GITHUB_SECRET
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
        }
    },
    pages:{
        signIn:"/auth/signin"
    }
}