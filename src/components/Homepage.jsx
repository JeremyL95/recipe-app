import SearchIcon from '@mui/icons-material/Search';
import Card from './Card.jsx';

function Homepage(){
    return (
        <div className="bg-white mt-12 md:mt-0 px-3 py-5 md:p-10 flex-1">
            <div className="max-w-screen-lg mx-auto">
                <form action="">
                    <label className="input shadow-md flex items-center gap-1">
                        <SearchIcon color="disabled" />
                        <input type="text" className="text-sm md:text-md grow" placeholder="What shall we cook?" />
                    </label>
                </form>

                <div className="my-3">
                    <h3 className="font-bold text-lg text-black">
                        Recommended Recipes
                    </h3>

                    <div className="grid-cols-1 w-100 h-36 bg-slate-400 rounded-md">
                        this is auto scrolling carousel
                    </div>
                </div>

                <p className="text-black">
                    Popular Choices
                </p>

                <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
                    {/* test UI */}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Homepage;