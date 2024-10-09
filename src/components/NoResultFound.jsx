function NoResultFound(){
  return (
    <div className="text-black text-center flex flex-col">
        <div className="mt-10 mb-5 lg:mx-auto">
            <img src="/no-result-found.gif" alt="no-result-found" className="lg:max-w-lg" />
        </div>
        
        <div className="font-bold">
            Opps.. No Result Found
        </div>
    </div> 
  )
}

export default NoResultFound;