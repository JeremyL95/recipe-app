import Card from "./Card.jsx";

function BookmarkPage(){
    const haveBookmarked = false;

    return(
        <div className="bg-white mt-12 md:mt-0 px-3 py-5 md:p-10 flex-1 min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-black font-bold text-3xl md:text-5xl my-4">
                    My Bookmarks
                </h1>

                {!haveBookmarked && (
                    <div className="text-red-600">
                        No Result Found
                    </div> 
                )}

                {haveBookmarked && (
                    <div className="grid gap-3 grid-cols-2 md:grid0cols-3">
                        <Card />
                    </div>
                )}
            </div>

        </div>
    )
}

export default BookmarkPage;