import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isHamburgerMenuOpen);

    if (!isMenuOpen) return null;

    const linkClass =
        "px-3 py-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer";

    const activeClass = "bg-gray-200 font-semibold";

    return (
        <aside className="w-56 shrink-0 bg-white h-full overflow-y-auto border-r hide-scrollbar px-3 py-4">

            {/* MAIN */}
            <ul className="space-y-2 text-sm mt-2">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${linkClass} ${isActive ? activeClass : ""}`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li className={linkClass}>Shorts</li>
                <li className={linkClass}>Videos</li>
                <li className={linkClass}>Live</li>
            </ul>

            <hr className="my-4" />

            {/* SUBSCRIPTIONS */}
            <h1 className="font-bold text-sm px-3 mb-2">Subscriptions</h1>
            <ul className="space-y-1 text-sm">
                <li className={linkClass}>Music</li>
                <li className={linkClass}>Movies</li>
                <li className={linkClass}>Gaming</li>
            </ul>

            <hr className="my-4" />

            {/* WATCH LATER */}
            <h1 className="font-bold text-sm px-3 mb-2">Watch Later</h1>
            <ul className="space-y-1 text-sm">
                <li className={linkClass}>Bhajan</li>
                <li className={linkClass}>Sports</li>
                <li className={linkClass}>Gaming</li>
            </ul>

        </aside>
    );
};

export default SideBar;
