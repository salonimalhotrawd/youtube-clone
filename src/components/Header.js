import { HAMBURGER_MENU_URL, YOUTUBE_LOGO_URL, USER_PROFILE_URL } from '../utils/uiConstants';
import { useDispatch } from 'react-redux';
import {toggleHamburgerMenu} from '../utils/appSlice';

const Header = () => {
    const dispatchStore = useDispatch();

    const toggleMenuHandler = () => {
        dispatchStore(toggleHamburgerMenu());
    };

    return (
        <div className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 bg-white z-50">
            <div className="flex items-center gap-4">
                <img onClick={() => toggleMenuHandler()} className="h-7 mx-2 cursor-pointer" alt="menu" src={HAMBURGER_MENU_URL} />
                <img className="h-7" alt="you-tube-logo" src={YOUTUBE_LOGO_URL} />
            </div>

            <div className="flex items-center w-[40%]">
                <input className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500" type="text" />
                <button className="px-6 py-2 border border-gray-300 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200">
                    🔎︎
                </button>
            </div>

            <div className="flex items-center">
               <img className="h-8 w-8 rounded-full cursor-pointer" alt="user-profile" src={USER_PROFILE_URL} />
            </div>
        </div>
    )
}

export default Header;