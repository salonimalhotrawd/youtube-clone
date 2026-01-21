import { useNavigate } from "react-router-dom";

const RecommendVideo = ({ data }) => {
    const navigate = useNavigate();
    const { id, snippet,statistics } = data;
    const { videoId } = id;

    return (
        <div
            onClick={() => navigate("/watch?v=" + videoId)}
            className="flex gap-3 p-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img
                className="w-40 h-24 rounded-xl object-cover"
                src={snippet?.thumbnails?.medium?.url}
                alt={snippet?.title}
            />

            <div className="flex-1">
                <div className="font-semibold text-sm line-clamp-2">{snippet?.title}</div>
                <div className="text-xs text-gray-500 mt-1">{snippet?.channelTitle}</div>
                <div className="text-xs text-gray-500">
                    {Number(statistics?.viewCount || 0).toLocaleString()} views •{" "}
                    {new Date(snippet?.publishedAt).toDateString()}
                </div>
            </div>
        </div>
    );
}

export default RecommendVideo;