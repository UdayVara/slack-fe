import api from "@/lib/axios";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const nextAuthConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      async authorize(credentials: any) {
        try {
          const res = await api.post("/auth/verify-otp", {
            otp: credentials.otp,
            email: credentials.email,
          });

          if (res.data?.statusCode === 201) {
            return {
              id: res.data?.user?.id,
              email: res.data?.user?.email,
              username: res.data?.user?.username,
              verified: res.data?.user?.verified,
              platform: res.data?.user?.platform,
              token: res.data?.token,
              image: res.data?.user?.image,
            };
          } else {
            throw new Error(res.data?.message || "Internal Server Error");
          }
        } catch (error: any) {
          throw new Error(error?.message || "Internal Server Error");
        }
      },
    }),
  ],
  callbacks: {
    signIn: ({ profile, account }) => {
      if (account?.provider === "google") {
        console.log("Google Login Detected", profile);
      }
      if (account?.provider === "github") {
        console.log("GitHub Login Detected", profile);
      }
      return true;
    },
    jwt(params) {
      if (params.user) {
        params.token.user = params.user;
      }
      return params.token;
    },
    session(params: any) {
      if (params.token?.user) {
        params.session.user = params.token?.user;
      }
      return params.session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
