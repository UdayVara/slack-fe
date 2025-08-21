import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth/auth";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname
    const publicRoutes = ["/auth/signin","/auth/signup","/auth/verify"]
    const user = await auth()
    if(url == "/auth/verify"){
      const isOtpGenerate = request.cookies.get("isOtpGenerated") || null
        if(!isOtpGenerate || isOtpGenerate.value != "true"){
            return NextResponse.redirect(new URL("/auth/signin",request.url))
        }
    }

    if(!user){
        if(!publicRoutes.includes(url)){
            return NextResponse.redirect(new URL("/auth/signin",request.url))
        }
    }
    if(user){
        if(publicRoutes.includes(url)){
            return NextResponse.redirect(new URL("/home",request.url))
        }
    }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
