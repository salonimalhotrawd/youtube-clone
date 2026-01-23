
export const YOUTUBE_API_KEY = "AIzaSyB5nmgR4sY1kZ7KVXTwaINA_0urrDGAu-4";

export const YOUTUBE_VIDEO_LIST_API_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=100&key=";

export const GET_YOUTUBE_VIDEO_API_BY_ID_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const GET_ALL_COMMENTS_ON_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const YOUTUBE_RECOMMENDED_BY_TITLE = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=";

export const YOUTUBE_SEARCH_RECOMMENDATION_BY_QUERY = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
