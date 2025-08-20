"use client";

import { handleSignup } from "@/actions/auth.actions";
import Footer from "@/components/Auth/Footer";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonLoader from "@/components/Loaders/ButtonLoader/ButtonLoader";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });
  const router = useRouter()
  const onSubmit = async (data: SignupFormValues) => {
    try {
      const res = await handleSignup(data);

      if (res.success) {
        toast.success(res.message);
        router.push("/auth/verify")
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center pt-20 h-full w-full mx-auto max-w-md">
      <Image
        className="w-[150px] h-auto gap-2 mx-auto"
        height={1000}
        width={1000}
        src={"/slack-logo-full.png"}
        alt="logo"
      />

      <h1 className="text-4xl text-center mt-2 font-semibold">
        Enter your email address to get Started With
      </h1>
      <h5 className="text-neutral-600 mt-2">Or choose another option</h5>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-[90%]"
      >
        <Input
          placeholder="Enter your username"
          className="mt-4 border-2 border-gray-300 rounded-lg h-12 !text-lg w-full focus-visible:border-theme/60"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500 text-left self-start text-sm">
            {errors.username.message}
          </p>
        )}

        <Input
          type="email"
          placeholder="Enter your email"
          className="mt-4 border-2 border-gray-300 rounded-lg h-12 !text-lg w-full focus-visible:border-theme/60"
          {...register("email")}
        />
        {errors.email && (
          <p
            className="text-red-500 self-start 
          text-sm"
          >
            {errors.email.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 bg-theme hover:bg-theme/90 border-2 border-gray-300 rounded-lg h-12 !text-lg w-full"
        >
          {isSubmitting ? <ButtonLoader color="#ffffff" /> : "Continue"}
        </Button>

        <div className="flex flex-row items-center my-4 w-full gap-5">
          <DropdownMenuSeparator className="border grow border-gray-300 mt-2" />{" "}
          <span className="uppercase">or sign up with</span>{" "}
          <DropdownMenuSeparator className="border border-gray-300 grow" />
        </div>

        <div className="mt-3 flex flex-row gap-3 items-center w-full">
          <Button className="bg-transparent py-5 border-2 border-theme text-md text-black rounded-lg grow">
            Google <FcGoogle />
          </Button>
          <Button className="bg-transparent py-5 border-2 border-theme text-md text-black rounded-lg grow">
            Github <FaGithub />
          </Button>
        </div>
        <h5 className="mt-4">
          Having Trouble?{" "}
          <Link href={"/"} className="text-blue-600">
            Try entering workspace URL
          </Link>
        </h5>

        <Footer />
      </form>
    </div>
  );
}

export default SignupPage;
