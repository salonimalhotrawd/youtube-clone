import {
    YOUTUBE_API_KEY,
    YOUTUBE_VIDEO_LIST_API_URL,
    GET_YOUTUBE_VIDEO_API_BY_ID_URL,
    GET_ALL_COMMENTS_ON_VIDEO_BY_ID,
    YOUTUBE_RECOMMENDED_BY_TITLE,
    YOUTUBE_SEARCH_RECOMMENDATION_BY_QUERY,
} from "../utils/apiConstants";

const fetchJSON = async (url, customError = "Request failed") => {
    try {
        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) return data;

        const reason = data?.error?.errors?.[0]?.reason;
        const apiMessage = data?.error?.message;

        if (reason === "quotaExceeded") {
            throw new Error("YouTube API quota exceeded. Try again after reset.");
        }

        throw new Error(apiMessage || customError);
    } catch (err) {
        throw new Error(err.message || "Network error. Please try again.");
    }
};

export const fetchMostPopularVideos = () => {
    const url = `${YOUTUBE_VIDEO_LIST_API_URL}${YOUTUBE_API_KEY}`;
    return fetchJSON(url, "Failed to fetch videos list");
};

export const fetchSearchVideos = (title) => {
    const url = `${YOUTUBE_SEARCH_RECOMMENDATION_BY_QUERY}${encodeURIComponent(title)}`;
    return fetchJSON(url, "Failed to fetch search list");
};

export const fetchVideoById = (videoId) => {
    const url = `${GET_YOUTUBE_VIDEO_API_BY_ID_URL}${videoId}&key=${YOUTUBE_API_KEY}`;
    return fetchJSON(url, "Failed to fetch video by id");
};

export const fetchAllCommentsById = (videoId) => {
    const url = `${GET_ALL_COMMENTS_ON_VIDEO_BY_ID}${videoId}&key=${YOUTUBE_API_KEY}`;
    return fetchJSON(url, "Failed to fetch comments");
};

export const fetchRecommendVideosList = (title) => {
    const url = `${YOUTUBE_RECOMMENDED_BY_TITLE}${encodeURIComponent(title)}&key=${YOUTUBE_API_KEY}`;
    return fetchJSON(url, "Failed to fetch recommended videos");
};
