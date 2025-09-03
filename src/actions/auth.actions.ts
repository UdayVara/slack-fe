"use server";

import { signIn } from "@/auth/auth";
import api from "@/lib/axios";
import { cookies } from "next/headers";

type HandleSignupArgs = {
  username: string;
  email: string;
};

type HandleVerifyOtpArgs = {
  otp: string;
  email: string;
};

export const handleSignup = async (body: HandleSignupArgs) => {
  try {
    const res = await api.post("/auth/signup", {
      username: body.username,
      email: body.email,
      platform: "default", // same as PlatformType.default
    });

    if (res.data?.statusCode === 201) {
      const cookiesUtil = await cookies();

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
        value: res.data?.email,
        expires: new Date(Date.now() + 5 * 60 * 1000),
        path: "/",
        httpOnly: false,
        sameSite: "lax",
      });

      return { success: true, message: "OTP Sent Successfully" };
    } else {
      return {
        success: false,
        message: res.data?.message || "Failed to Signup",
      };
    }
  } catch (error: any) {
    console.log("Signup error", error);
    return {
      success: false,
      message: error?.message || "Internal Server Error",
    };
  }
};

export const handleVerify = async (body: HandleVerifyOtpArgs) => {
  try {
    const res = await signIn("credentials",{...body,redirect:false})

    return {success:true,message:"Verified Successfully"}
  } catch (error: any) {
    console.log("Verify error", error);
    return {
      success: false,
      message: error?.message || "Internal Server Error",
    };
  }
};

export const getUserClient = async () => {
  try {
    const res = await api.get("/auth/user");
    return res.data;
  } catch (error: any) {
    console.log("GetUser error", error);
    return {
      success: false,
      message: error?.message || "Internal Server Error",
    };
  }
};
