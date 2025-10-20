import { Hash } from "lucide-react";
import React from "react";

function ReceiverCard({ name, id }: { name: string; id: string }) {
  return (
    <div className="hover:bg-neutral-500/40 w-full px-4 py-2 flex flex-row gap-3 cursor-pointer items-center ">
      <Hash className="rotate-6" size={16}/>
      {name}
    </div>
  );
}

export default ReceiverCard;
