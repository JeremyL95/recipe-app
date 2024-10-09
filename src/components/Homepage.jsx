import SearchIcon from '@mui/icons-material/Search';
import Card from './Card.jsx';
import Carousel from "./Carousel.jsx";
import NoResultFound from "./NoResultFound.jsx";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_ID = import.meta.env.VITE_APP_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

function Homepage(){
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const slides = [
        "/image-1.webp",
        "/image-2.webp",
        "/image-3.webp",
        "/image-4.webp"
    ]

    async function fetchRecipesData(queryRecipe){
        setLoading(true);
        setRecipes([]);

        try {
            const res = await axios.get(`https://api.edamam.com/api/recipes/v2/?app_id=${API_ID}&app_key=${API_KEY}&q=${queryRecipe}&type=public`);
            setRecipes(res.data.hits);
        }catch(error){
            throw new Error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    // only call once when the homepage is mounted
    useEffect(()=>{
        fetchRecipesData('popular');
    },[]);

    function searchRecipe(evt){
        evt.preventDefault();
        let queryRecipe = evt.target[0].value;
        
        fetchRecipesData(queryRecipe);
    }

    function showGreetings(){
        let greeting = ``;
        let currentTime = new Date().getHours();

        if(currentTime < 12){
            greeting = 'Good Morning';
        }else if(currentTime < 18){
            greeting = 'Good Afternoon';
        }else{
            greeting = 'Good Evening';
        }

        return greeting;
    }

    return (
        <div className="bg-white mt-12 md:mt-0 px-3 py-5 md:p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                <div className="text-lg text-black my-2">
                    {`${showGreetings()}, Chef!`}
                </div>

                <form onSubmit={searchRecipe}>
                    <label className="input shadow-md flex items-center gap-1">
                        <SearchIcon color="disabled" />
                        <input type="text" className="text-sm md:text-md grow" placeholder="What shall we cook today?" />
                    </label>
                </form>

                {
                    !loading && <>
                            <div className="my-3 block md:hidden">
                                <h2 className="font-bold text-xl text-black py-3">
                                    Recommended Recipes
                                </h2>

                                <div className="grid-cols-1 w-100 h-64 rounded-m">
                                    <Carousel autoSlide={true}>
                                        {slides.map((slide, index)=>{
                                            return <img key={index} src={slide} alt="food-image" style={{ width: '100%'}}/>
                                        })}
                                    </Carousel>
                                </div>
                            </div>

                            <p className={`font-bold text-black py-3 ${recipes.length > 0 ? "" : "opacity-0"}`}>
                                Popular Choices
                            </p>
                        </>
                }

                {
                    loading && <div className="py-3">
                        <div className="my-3 block md:hidden">
                            <div className="skeleton h-4 w-24"></div>
                            <div className="skeleton h-64 w-full my-3"></div>
                        </div>

                        <div className="skeleton h-4 w-32"></div>
                    </div>
                }
                
                <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
                    {!loading && recipes.map(({recipe}, index)=>{
                        return <Card key={index} recipe={recipe}/>
                    })}
           
                    {loading && [...Array(9)].map((_, index)=>{
                        return (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        )
                    })}
                </div>

                {recipes.length == 0 && <NoResultFound />}
            </div>
        </div>
    )
}

export default Homepage;