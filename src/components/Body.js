import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import SideBar from "./SideBar";
import { useEffect } from "react";
import { closeHamburgerMenu, openHamburgerMenu } from "../utils/appSlice";

const Body = () => {
    const {pathname} = useLocation();
    const dispatchStore = useDispatch();

    useEffect(() => {
        if(pathname.startsWith("/watch")){
            dispatchStore(closeHamburgerMenu());
        }else{
            dispatchStore(openHamburgerMenu());
        }
    },[pathname, dispatchStore]);

    return (
        <div className="flex h-[calc(100vh-64px)]">
            <SideBar />

            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default Body;