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