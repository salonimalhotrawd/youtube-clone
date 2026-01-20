
const VideoCard = ({data}) => {
    const {id, snippet} = data;
    const {thumbnails, description, publishedAt, localized, channelTitle,title} = snippet;
    return (
        <div className="p-2 m-4 w-60 cursor-pointer rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]">
            <img className="rounded-lg" src={thumbnails?.high?.url} alt={channelTitle}/>
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
            </ul>
        </div>
    )
};


export default VideoCard;