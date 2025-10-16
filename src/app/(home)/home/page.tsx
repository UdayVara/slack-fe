import { auth } from "@/auth/auth"
import { Metadata } from "next";
import MiniSidebar from "./_components/MiniSidebar";
import ChatSidebar from "./_components/ChatSidebar/ChatSidebar";

export const metadata: Metadata = {
    title: "Home | Slack",
    description: "Home page of Slack",
  };
export default async function Home () {
    const user = await auth()
    console.log("user",user)
    return (
       
        <div className="flex flex-col w-full h-full items-center justify-center text-2xl">
            {user ? <h4>Hello {user?.user?.email}</h4> : <h4>User Not Logged In</h4>}
        </div>
    )
}