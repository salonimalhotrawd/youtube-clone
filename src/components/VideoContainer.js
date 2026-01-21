import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMostPopularVideos } from "../services/youtubeApi";
import ShimmerGrid from "./ShimmerGrid";
import VideoCard from "./VideoCard";
import ErrorHandler from "./ErrorHandler";

const VideoContainer = () => {

    const [videosList, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getPopularVideoListing();
    }, []);

    const getPopularVideoListing = async () => {
        try {
            setLoading(true);
            const json = await fetchMostPopularVideos();
            setVideos(json.items || []);
        } catch (err) {
            setError(err.message);
        }
        //finally block to perform cleanup actions like stopping the loader, because it executes regardless of whether the API call succeeds or fails.
        finally {
          setLoading(false);
        }
    };

    if (loading) return <ShimmerGrid count={20}/>;
    if (error) return <ErrorHandler errorMessage={error}/>;
    if (videosList.length === 0)
        return <div>No videos found</div>;

    return (
        <div className="flex flex-wrap">
            {
                videosList?.map((list) =>
                    <Link to={"/watch?v=" + list.id} key={list.id} className="block m-4">
                        <VideoCard data={list} />
                    </Link>
                )}
        </div>
    )
};

export default VideoContainer;