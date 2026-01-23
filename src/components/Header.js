import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HAMBURGER_MENU_URL, YOUTUBE_LOGO_URL, USER_PROFILE_URL } from '../utils/uiConstants';
import { toggleHamburgerMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { fetchSearchVideos } from '../services/youtubeApi';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [error, setError] = useState("");
    const searchCache = useSelector((store) => store?.search);
    const dispatchStore = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache?.[searchQuery]) {
                setSearchData(searchCache?.[searchQuery])
            } else {
                getSearchVideos();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);


    const getSearchVideos = async () => {
        try {
            const json = await fetchSearchVideos(searchQuery);
            dispatchStore(cacheResults({
                [searchQuery]: json[1]
            }));
            setSearchData(json[1]);
        } catch (err) {
            setError(err.message);
        }
        //finally block to perform cleanup actions like stopping the loader, because it executes regardless of whether the API call succeeds or fails.
        finally { }
    };


    const searchRecommenedVideoList = () => {
    }

    const toggleMenuHandler = () => {
        dispatchStore(toggleHamburgerMenu());
    };

    return (
        <div className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 bg-white z-50">
            <div className="flex items-center gap-4">
                <img onClick={() => toggleMenuHandler()} className="h-7 mx-2 cursor-pointer" alt="menu" src={HAMBURGER_MENU_URL} />
                <img className="h-7" alt="you-tube-logo" src={YOUTUBE_LOGO_URL} />
            </div>

            <div className="flex-1 flex justify-center">
                <div className="relative w-[600px]">
                    <div className="flex w-full">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <button className="px-6 py-2 border border-gray-300 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200" onClick={() => searchRecommenedVideoList()}>
                            🔎︎
                        </button>
                    </div>

                    {searchData?.length > 0 && (
                        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-xl mt-2 z-50">
                            <ul className="py-2">
                                {searchData.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                        onClick={() => setSearchQuery(item)}>
                                        🔍 <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center">
                <img className="h-8 w-8 rounded-full cursor-pointer" alt="user-profile" src={USER_PROFILE_URL} />
            </div>
        </div>
    )
}

export default Header;