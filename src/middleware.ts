import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname
    
    if(url == "/auth/verify"){
      const isOtpGenerate = request.cookies.get("isOtpGenerated") || null
        if(!isOtpGenerate || isOtpGenerate.value != "true"){
            // return NextResponse.redirect(new URL("/auth/signin",request.url))
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
