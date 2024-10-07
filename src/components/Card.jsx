import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { yellow } from '@mui/material/colors';

function Card(){
    return(
        <div className="flex flex-col rounded-md relative">
        {/* youtube link */}
        <a href="" className="relative h-36">
            <img src="/food.jpg" alt="food" className="rounded-md w-full h-full object-cover cursor-pointer"/>

            {/* <div className="absolute left-2 bottom-2 text-xs gap-1 flex items-center rounded-full bg-slate-700 py-1 px-2">
                <LocalDiningIcon sx={{ fontSize: 16 }} />
                <span className="text-white">
                    4
                </span>
            </div> */}

            <div className="absolute bottom-2 right-2 p-1 rounded-full bg-slate-700 w-8 h-8 flex items-center justify-center">
                <BookmarkBorderIcon fontSize='small' className='text-white hover:fill-red-500 hover:text-red-500' />
            </div>
        </a>
        
        <h3 className="text-sm text-gray-500">Madison&apos;s kitchen</h3>
        <h2 className="flex text-black font-bold tracking-wide">
            Vegetable
        </h2>

        <p className="flex items-center gap-1 text-black">
            <StarIcon sx={{ color: yellow[600], fontSize: 16 }}/>
            <span className="text-sm">
                5.0
            </span>
        </p>
    </div>
    )
}

export default Card;