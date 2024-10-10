import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function DetailCard(){
    const location = useLocation();
    const { recipeData } = location.state;
    const [isDone, setIsDone] = useState(false);
    const [isBookmark, setIsBookmark] = useState(localStorage.getItem('bookmarks')?.includes(recipeData.label));
    
    function handleClick(){
        setIsDone((prevValue) => {
            return !prevValue
        });
    }

    function bookmarkRecipe(){
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const alreadyBookmarked = bookmarks.some((bookmark)=>{{
            return bookmark.label === recipeData.label;
        }});
        
        if(alreadyBookmarked){
            bookmarks = bookmarks.filter((bookmark) => bookmark.label !== recipeData.label)
            setIsBookmark(false);
        }else{
            bookmarks.push(recipeData);
            setIsBookmark(true); 
        }
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
    console.log(recipeData);

    return(
        <div className="bg-white mt-12 md:mt-0 px-3 py-5 md:p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                {recipeData && 
                    <div className="flex flex-col md:flex-row">
                        <div className="relative">
                            <div>
                                <img className="rounded-md w-full h-72 md:h-auto object-cover" src={recipeData.image} alt="recipe-image" />
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
                        </div>
                        
                        <div className="md:mx-5">
                            <h2 className="font-bold text-xl text-black pt-3 md:pt-0">{recipeData.label}</h2>
                            
                            <p className="italic">by {recipeData.source}</p>

                            <div>
                                <h3 className="font-bold text-black pt-5 pb-2">Ingredients</h3>

                                <ul>
                                    {recipeData.ingredientLines && recipeData.ingredientLines .map((ingredient, index)=>{
                                            return(
                                                <li key={index} className={`${isDone ? 'line-through text-gray-400' : ''}`}>
                                                    <input type="checkbox" id={index} className="accent-yellow-500 text-white" checked={isDone} onChange={handleClick}/>
                                                    <label className="ml-3">
                                                        {ingredient}
                                                    </label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

function RenderDetailCard(){
    return(
        <div className="flex xl:w-9/12 xl:mx-auto">
            <Sidebar />
            <DetailCard />
        </div>
    )
}

export default RenderDetailCard;