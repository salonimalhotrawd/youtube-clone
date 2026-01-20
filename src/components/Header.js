import { HAMBURGER_MENU_URL, YOUTUBE_LOGO_URL, USER_PROFILE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {toggleHamburgerMenu} from '../utils/appSlice';

const Header = () => {
    const dispatchStore = useDispatch();

    const toggleMenuHandler = () => {
        dispatchStore(toggleHamburgerMenu());
    };

    return (
        <div className="grid grid-flow-col p-4 m-4 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} className="h-7 mx-2 cursor-pointer" alt="menu" src={HAMBURGER_MENU_URL} />
                <img className="h-7" alt="you-tube-logo" src={YOUTUBE_LOGO_URL} />
            </div>

            <div className="col-span-10 px-10">
                <input className="w-1/2 p-1 border border-r-0 border-gray-400 rounded-l-full" type="text" />
                <button className="p-1 border border-gray-400 rounded-r-full bg-gray-100">
                    🔎︎
                </button>
            </div>

            <div className="col-span-4">
               <img className="h-7" alt="user-profile" src={USER_PROFILE_URL} />
            </div>
        </div>
    )
}

export default Header;