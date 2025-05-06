import {useChatStore} from "../store/useChatStore";
import {useEffect, useRef} from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import {useAuthStore} from "../store/useAuthStore";
import {formatMessageTime} from "../lib/utils";

const ChatContainer = () => {
    const {
        messages,
        getMessages,
        isMessagesLoading,
        selectedUser,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();
    const {authUser} = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser._id);

        subscribeToMessages();

        return () => unsubscribeFromMessages();
    }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    if (isMessagesLoading) {
        return (
            <div className="flex flex-1 relative flex-col overflow-auto">
                <ChatHeader/>
                <MessageSkeleton/>
                <MessageInput/>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col relative bg-gray-100 overflow-auto">
            <ChatHeader/>

            <div className="flex-1 overflow-y-auto relative p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef}
                    >
                        <div className=" ">
                            <div
                                className={`size-8 rounded-full border flex items-center justify-center text-sm uppercase ${
                                    message.senderId === authUser._id
                                        ? "bg-gradient-to-r from-primary to-primary/80 text-white"
                                        : "bg-gray-400 text-gray-900"
                                }`}
                            >
                                {message.senderId === authUser._id
                                    ? authUser.fullName
                                          .split(" ")
                                          .map((n) => n[0])
                                          .slice(0, 3)
                                          .join("")
                                    : selectedUser.fullName
                                          .split(" ")
                                          .map((n) => n[0])
                                          .slice(0, 3)
                                          .join("")}
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            <time className="text-xs opacity-50 ml-1">
                                {formatMessageTime(message.createdAt)}
                            </time>
                        </div>
                        <div
                            className={`chat-bubble flex text-wrap items-center justify-center flex-col ${
                                message.senderId === authUser._id ? "bg-primary/80" : "bg-gray-400"
                            }`}
                        >
                            {message.image && (
                                <img
                                    src={message.image}
                                    alt="Attachment"
                                    className="sm:max-w-[200px] rounded-md mb-2"
                                />
                            )}
                            {message.text && <p className="text-white text-wrap text-xs text-center">{message.text}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative w-full">
                <MessageInput/>
            </div>
        </div>
    );
};
export default ChatContainer;
