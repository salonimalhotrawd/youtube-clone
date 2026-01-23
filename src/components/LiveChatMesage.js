const LiveChatMesage = ({ chat }) => {
    return (
        <div className="flex items-start gap-2">
            <img
                className="w-8 h-8 rounded-full object-cover"
                src={chat.img}
                alt={chat.name}
            />

            <div className="text-sm">
                <span className="font-semibold text-gray-800">{chat.name}</span>
                <span className="text-gray-500">: </span>
                <span className="text-gray-700">{chat.message}</span>
            </div>
        </div>
    );
};

export default LiveChatMesage;
