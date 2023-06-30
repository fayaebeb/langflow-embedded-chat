import { ChatMessageType } from "../../../types/chatWidget";
import { MoreHorizontal } from 'lucide-react';

export default function ChatMessage({ message, isSend,error }: ChatMessageType) {
    return (
        <div className={"w-full py-2 px-2 flex " + (isSend ? " justify-end" : " justify-start")}>
            {isSend ? 
            <div className="rounded-lg w-fit max-w-full  px-2 py-1 break-all text-right rounded-br-none bg-blue-500 text-white">{message}</div> :
            <div className={(error?" bg-red-400 ":"bg-gray-400 ")+" break-all rounded-lg rounded-bl-none text-left px-2 py-1 text-white"}>
                {message==="" ? <div className="animate-pulse"><MoreHorizontal/></div> : message}
            </div>}
        </div>)
}