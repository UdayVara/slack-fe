import { auth } from "@/auth/auth"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Slack",
    description: "Home page of Slack",
  };
export default async function Home () {
    const user = await auth()
    console.log("user",user)
    return (
        <div className="flex flex-col w-full h-full items-center justify-center items-center text-2xl">
            {user ? <h4>Hello {user?.user?.email}</h4> : <h4>User Not Logged In</h4>}
        </div>
    )
}