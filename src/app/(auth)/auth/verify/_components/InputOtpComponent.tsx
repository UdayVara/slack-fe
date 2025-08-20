"use client"
import React, { useState, useEffect } from "react"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { handleVerify } from "@/actions/auth.actions"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

function InputOtpComponent() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState("")

  useEffect(() => {
    // ✅ only trigger API when OTP is 6 digits & stable
    if (otp.length === 6) {
      const timer = setTimeout(() => {
        handleVerifyOtp(otp)
      }, 300) // slight delay so cursor still shows

      return () => clearTimeout(timer)
    }
  }, [otp])

  const handleVerifyOtp = async (otp: string) => {
    if (!otp) {
      toast.error("Please enter OTP")
      return
    }
    if (!Cookies.get("useremail")) {
      toast.error("User not found")
      return
    }
    try {
      setLoading(true)
      const res = await handleVerify({ otp, email: Cookies.get("useremail") as string})
      if (res.success) {
        Cookies.remove("useremail")
        toast.success(res.message)
        router.push("/home")
      } else {
        toast.error(res?.message || "Something went wrong")
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-4">
      <InputOTP
        value={otp}
        onChange={(val) => {
          if (/^\d*$/.test(val)) setOtp(val) // ✅ only allow numbers
        }}
        maxLength={6}
        disabled={loading} // only disabled during API call
      >
        <InputOTPGroup>
          <InputOTPSlot className="text-lg" index={0} />
          <InputOTPSlot className="text-lg" index={1} />
          <InputOTPSlot className="text-lg" index={2} />
        </InputOTPGroup>
        <InputOTPSeparator> - </InputOTPSeparator>
        <InputOTPGroup>
          <InputOTPSlot className="text-lg" index={3} />
          <InputOTPSlot className="text-lg" index={4} />
          <InputOTPSlot className="text-lg" index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default InputOtpComponent
