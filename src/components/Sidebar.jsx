import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
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
        <div className ="p-3 md:p-10 border-r w-24 md:w-64 min-h-screen hidden sm:block">
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className="w-full">
                    Food App
                    {/* <img src="" alt="logo" className="hidden md:block" />
                    <img src="" alt="mobile-logo" className="block md:hidden" /> */}
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
        <div className="flex justify-between gap-10 border-t fixed w-full top-0 left-0 bg-white z-10 p-3 md:hidden">
            <Link to={"/"} className="flex gap-2">
                {/* <ArrowBackIcon className="cursor-pointer" color="primary" /> */}
                <span className="text-red-500 font-bold block md:hidden">Home</span>
            </Link>

            <Link to={"/bookmarks"}>
                <BookmarkBorderIcon className="cursor-pointer" color="success" />
            </Link>
        </div>
    )
}