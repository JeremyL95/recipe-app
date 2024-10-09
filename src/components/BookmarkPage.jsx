import Card from "./Card.jsx";
import NoResultFound from "./NoResultFound.jsx";
import { Link } from "react-router-dom";

function BookmarkPage(){
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    return(
        <div className="bg-white mt-12 md:mt-0 px-3 py-5 md:p-10 flex-1 min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="font-bold text-xl text-black py-3">
                    Bookmarks
                </h2>

                {bookmarks.length === 0 && (
                    <>
                        <NoResultFound />
                        <Link to={"/"}>
                            <div className="w-36 text-white bg-yellow-500 font-bold rounded-full mx-auto my-3 py-2 px-4 text-center">
                                Back
                            </div>
                        </Link>
                    </>
                )}


                {bookmarks.length !== 0  && (
                    <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                        {
                            bookmarks.map((recipe, index)=>{
                                return (
                                    <Card key={index} recipe={recipe} />
                                )
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookmarkPage;