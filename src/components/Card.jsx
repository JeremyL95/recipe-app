import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

function Card({recipe}){
    // const { healthLabels } = recipe;
    const [isBookmark, setIsBookmark] = useState(localStorage.getItem('bookmarks')?.includes(recipe.label));

    function bookmarkRecipe(){
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const alreadyBookmarked = bookmarks.some((bookmark)=>{{
            return bookmark.label === recipe.label;
        }});

        if(alreadyBookmarked){
            bookmarks = bookmarks.filter((bookmark) => bookmark.label !== recipe.label)
            setIsBookmark(false);
        }else{
            bookmarks.push(recipe);
            setIsBookmark(true); 
        }

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    return(
        <div className="flex flex-col rounded-md relative">
            <a href="" className="relative h-36">
                <div className="skeleton absolute inset-0" />
                <img src={recipe.image} alt="food" className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-300" 
                    onLoad={(evt)=> { 
                    evt.currentTarget.style.opacity = 1;
                    evt.currentTarget.previousElementSibling.style.display = "none";
                }}/>

                <div className="absolute left-2 bottom-2 text-xs gap-1 flex items-center rounded-full bg-slate-700 py-1 px-2">
                    <PersonIcon sx={{ fontSize: 12, color: '#FFF' }} />
                    <span className="text-white">
                        {Math.trunc(recipe.yield)} servings
                    </span>
                </div>

                <div className="absolute top-2 right-2 p-1 rounded-full bg-slate-700 w-8 h-8 flex items-center justify-center"
                    onClick={(evt)=>{
                        evt.preventDefault();
                        bookmarkRecipe();
                    }}
                >

                    {!isBookmark && <BookmarkBorderIcon fontSize='small' className='text-white hover:fill-yellow-500 hover:text-yellow-500' />}
                    {isBookmark && <BookmarkIcon fontSize='small' className='text-yellow-500 hover:text-yellow-500' />}
                </div>
            </a>
            
            <div className="my-1">
                <h3 className="text-sm text-gray-500">{
                        recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)
                    }&apos;s Kitchen</h3>
                <h2 className="flex text-black font-bold tracking-wide mb-2">
                    {recipe.label}
                </h2>

                {/* <div className="flex gap-2 mx-auto">
                    {healthLabels && healthLabels.map((healthLabel, index) => {
                        if(index < 2){
                            return (
                                <div key={index} className="flex gap-1 items-center border p-1 rounded-md">
                                    <LabelIcon sx={{ fontSize: 16 }} />
                                    <span className="text-sm">
                                        {healthLabel}
                                    </span>
                                </div>
                            )
                        }
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default Card;