import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CHANNEL_LOGO_URL } from "../utils/uiConstants";
import { fetchRecommendVideosList, fetchVideoById } from "../services/youtubeApi";
import ErrorHandler from "./ErrorHandler";
import ShimmerWatchPage from "./ShimmerWatchPage";
import RecommendVideo from "./RecommendVideo";
import LiveChat from "./LiveChat";
import CommentsGrid from "./CommentsGrid";

const WatchPage = () => {
    const [seacrhParams] = useSearchParams();

    const [videoData, setVideoData] = useState();
    const [recommendVideoData, setRecommendVideoData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const videoId = seacrhParams.get("v");
    const isAd = seacrhParams.get("ad") === "true";

    useEffect(() => {
        if (!videoId) return null;
        getVideoDataById();
    }, [videoId]);


    const getVideoDataById = async () => {
        try {
            setLoading(true);
            const response = await fetchVideoById(videoId);
            setVideoData(response?.items[0]);
            getRecommendVideos(response?.items[0]?.snippet?.title);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getRecommendVideos = async (snippet) => {
        try {
            setLoading(true);
            const response = await fetchRecommendVideosList(snippet);
            const filter = response?.items?.filter(item => item?.id?.videoId !== videoId);
            setRecommendVideoData(filter);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div className="p-5"><ShimmerWatchPage /></div>;
    if (error) return <ErrorHandler errorMessage={error} />;


    const { snippet, statistics } = videoData;
    return (
        <div className="px-5 py-3">
            <div className="flex gap-6">
                {/* LEFT SIDE */}
                <div className="w-[70%]">
                    <iframe className="w-full rounded-xl"
                        height="420"
                        src={"https://www.youtube.com/embed/" + videoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                    <div className="font-bold text-lg mt-3">
                        {snippet?.title}
                    </div>

                    <div className="flex items-center justify-between mt-3">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <img className="w-full h-full object-cover" src={CHANNEL_LOGO_URL} alt={snippet?.channelTitle} />
                            </div>

                            <div>
                                <div className="font-semibold text-sm">{snippet?.channelTitle}</div>
                                <div className="text-xs text-gray-500">
                                    {Number(statistics?.viewCount || 0).toLocaleString()} views •{" "}
                                    {new Date(snippet?.publishedAt).toDateString()}
                                </div>
                            </div>

                            <button className="ml-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                                Subscribe
                            </button>
                        </div>

                        <div className="flex gap-2">
                            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                                👍 {Number(statistics?.likeCount || 0).toLocaleString()}
                            </button>

                            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                                Share
                            </button>

                            <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="mt-6">
                        <CommentsGrid />
                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="w-[30%]">
                    {isAd ? <LiveChat /> : (
                        <>
                            <div className="font-semibold mb-3">Recommended</div>

                            <div className="space-y-3">
                                {recommendVideoData?.map((rcvd) => (
                                    <RecommendVideo key={rcvd?.id?.videoId} data={rcvd} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
};

export default WatchPage;