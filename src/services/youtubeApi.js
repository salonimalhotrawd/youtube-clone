import { YOUTUBE_API_KEY, YOUTUBE_VIDEO_LIST_API_URL, GET_YOUTUBE_VIDEO_API_BY_ID_URL, GET_ALL_COMMENTS_ON_VIDEO_BY_ID, YOUTUBE_RECOMMENDED_BY_TITLE,YOUTUBE_SEARCH_RECOMMENDATION_BY_QUERY } from "../utils/apiConstants";


export const fetchMostPopularVideos = async () => {
    const url = YOUTUBE_VIDEO_LIST_API_URL + YOUTUBE_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch popular videos");
    return response.json();
};

export const fetchSearchVideos = async (title) => {
    const url = YOUTUBE_SEARCH_RECOMMENDATION_BY_QUERY + encodeURIComponent(title);
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Search List");
    return response.json();
};

export const fetchVideoById = async (videoId) => {
    const url = GET_YOUTUBE_VIDEO_API_BY_ID_URL + videoId + "&key=" + YOUTUBE_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Video By Id");
    return response.json();
};


export const fetchAllCommentsById = async (videoId) => {
    const url = GET_ALL_COMMENTS_ON_VIDEO_BY_ID + videoId + "&key=" + YOUTUBE_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Comments");
    return response.json();
};


export const fetchRecommendVideosList = async (title) => {
    const url = YOUTUBE_RECOMMENDED_BY_TITLE + encodeURIComponent(title) + "&key=" + YOUTUBE_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Recommend Videos");
    return response.json();
};