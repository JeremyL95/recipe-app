import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Sidebar(){
    return <>
        <DesktopSidebar />
        <MobileSidebar />
    </>
}

export default Sidebar;

function DesktopSidebar(){
    return (
        <div className ="p-3 md:p-10 border-r w-24 md:w-64 min-h-screen hidden md:block">
            <div className="flex flex-col gap-12 sticky top-10 left-0">
                <div className="w-full">
                    <Link to={"/"}>
                        <img src="/chef-icon.webp" alt="logo" className="hidden md:block w-16" />
                        <img src="/chef-icon.webp" alt="mobile-logo" className="block md:hidden" />
                    </Link>
                </div>

                <ul className="flex flex-col items-center md:items-start gap-8">
                    <Link to={"/"} className="flex gap-2">
                        <HomeIcon />
                        <span className="font-bold hidden md:block">Home</span>
                    </Link>

                    <Link to={"/bookmarks"} className="flex gap-2">
                        <BookmarkBorderIcon />
                        <span className="font-bold hidden md:block">Bookmarks</span>
                    </Link>
                </ul>
            </div> 
        </div>
    )
}

function MobileSidebar(){
    return(
        <div className="flex items-center justify-between gap-10 border-t fixed w-full top-0 left-0 bg-white z-10 p-3 md:hidden">
            <Link to={"/"} className="flex gap-2">
                <img src="/chef-icon.webp" alt="mobile-logo" className="w-8 block md:hidden" />
            </Link>

            <Link to={"/bookmarks"}>
                <BookmarkIcon className="text-yellow-500 cursor-pointer" />
            </Link>
        </div>
    )
}