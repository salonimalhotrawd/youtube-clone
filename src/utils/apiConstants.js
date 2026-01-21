export const BUTTON_LIST = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Music'
    },
    {
        id: 3,
        name: 'Live'
    },
    {
        id: 4,
        name: 'Mantras'
    }, {
        id: 5,
        name: 'Mixes'
    },
    {
        id: 6,
        name: 'Podcasts'
    }, {
        id: 7,
        name: 'T-series'
    },
    {
        id: 8,
        name: 'Jukebox'
    }
]

export const YOUTUBE_API_KEY = "AIzaSyB5nmgR4sY1kZ7KVXTwaINA_0urrDGAu-4";

export const YOUTUBE_VIDEO_LIST_API_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=100&key=";

export const GET_YOUTUBE_VIDEO_API_BY_ID_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const GET_ALL_COMMENTS_ON_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";



