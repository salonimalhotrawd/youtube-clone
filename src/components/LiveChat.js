import { useEffect, useState } from "react";
import {
    LIVE_CHAT_DUMMY_DATA,
    getRandomMessage,
    getRandomName,
    getRandomAvatar,
} from "../utils/staticDataConstants";
import LiveChatMesage from "./LiveChatMesage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";

const LiveChat = () => {
    const chatDispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    const [liveMessage, setLiveMessage] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const newChat = {
                id: Date.now(),
                name: getRandomName(),
                message: getRandomMessage(),
                img: getRandomAvatar(),
            };
            chatDispatch(addChatMessage(newChat));
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const submitLiveChat = () => { };

    return (
        <div className="rounded-xl border border-gray-200 shadow-sm bg-white overflow-hidden">
            <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
                <h2 className="font-semibold text-sm">Live Chat</h2>
                <span className="text-xs text-gray-500">Top chat</span>
            </div>

            <div className="h-[340px] overflow-y-auto px-4 py-3 flex flex-col-reverse gap-4">
                {chatMessages?.map((message) => (
                    <LiveChatMesage key={message.id} chat={message} />
                ))}
            </div>

            <form
                className="border-t px-3 py-2 flex items-center gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    chatDispatch(
                        addChatMessage({
                            id: Date.now(),
                            name: "Saloni Malhotra",
                            message: liveMessage,
                            img: "https://i.pravatar.cc/40?img=20",
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <img
                    className="w-9 h-9 rounded-full object-cover"
                    src="https://i.pravatar.cc/40?img=20"
                    alt="you"
                />

                <input
                    value={liveMessage}
                    type="text"
                    placeholder="Chat..."
                    className="flex-1 border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
                    onChange={(e) => setLiveMessage(e.target.value)}
                />

                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChat;
