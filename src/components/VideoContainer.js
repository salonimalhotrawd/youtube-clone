import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LIST_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videosList, setVideos] = useState([]);

    useEffect(() => {
        getPopularVideoListing();
    }, []);

    const getPopularVideoListing = async () => {
        const videoDataListing = await fetch(YOUTUBE_VIDEO_LIST_API_URL);
        const json = await videoDataListing.json();
        setVideos(json.items);
    };

    return (
        <div className="flex flex-wrap">
            {
                videosList?.map((list) =>
                    <Link to={"/watch?v=" + list.id}>
                        <VideoCard key={list.id} data={list} />
                    </Link>
                )}
        </div>
    )
};

export default VideoContainer;