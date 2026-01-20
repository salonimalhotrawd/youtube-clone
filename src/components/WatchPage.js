import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { closeHamburgerMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GET_YOUTUBE_VIDEO_API_BY_ID_URL, YOUTUBE_API_KEY, GET_ALL_COMMENTS_ON_VIDEO_BY_ID } from "../utils/constants";


const WatchPage = () => {
    const dispatchStore = useDispatch();
    const [seacrhParams] = useSearchParams();
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        dispatchStore(closeHamburgerMenu());
        getVideoDataById();
        getAllCommentsById();
    }, []);

    const getVideoDataById = async () => {
        const id = seacrhParams.get("v");
        const APIURL = GET_YOUTUBE_VIDEO_API_BY_ID_URL + id + "&key=" + YOUTUBE_API_KEY;
        const response = await fetch(APIURL);
        const json = await response.json();
        setVideoData(json?.items[0]);
    };

    const getAllCommentsById = async () => {
        const id = seacrhParams.get("v");
        const APIURL = GET_ALL_COMMENTS_ON_VIDEO_BY_ID + id + "&key=" + YOUTUBE_API_KEY;
        const commentsData = await fetch(APIURL);
        const commentsJSON = await commentsData.json();
    }

    const { snippet, statistics } = videoData;

    return (
        <div className="px-5 m-2">
            <iframe width="800" height="400"
                src={"https://www.youtube.com/embed/" + seacrhParams.get("v")}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            <div className="font-bold mt-2">{snippet?.title}</div>
        </div>
    )
};

export default WatchPage;