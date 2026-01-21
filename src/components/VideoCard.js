
const VideoCard = ({ data }) => {
    const { id, snippet } = data;
    const { thumbnails, description, publishedAt, localized, channelTitle, title } = snippet;
    return (
        <div className="w-80 p-2 cursor-pointer 
                 rounded-2xl shadow-lg 
                 transition-all duration-300 
                 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" src={thumbnails?.high?.url} alt={channelTitle} />
            </div>

            <ul className="mt-2 space-y-1">
                <li className="font-bold text-sm line-clamp-2">{title}</li>
                <li className="text-gray-600 text-sm line-clamp-1">{channelTitle}</li>
            </ul>
        </div>
    )
};


export default VideoCard;