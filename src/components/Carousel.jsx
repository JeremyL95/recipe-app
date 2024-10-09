import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react'

function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 5000 } ){
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    }

    const nextSlide = () =>{
        setCurrent(current => {
            return current === slides.length - 1 ? 0 : current + 1;
        })
    }

    useEffect(()=>{
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return(
        <div className="overflow-hidden rounded-md relative">
            <div className="flex transition-transform ease-out duration-300" 
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides}
            </div>

            <div className="absolute inset-0 px-3 flex items-center justify-between">
                <button className="rounded-full cursor-pointer bg-slate-700 p-2 flex items-center justify-center" onClick={previousSlide}>
                    <ArrowBackIosNewIcon fontSize="small" sx={{ color: '#FFF' }} />
                </button>
                <button className="rounded-full cursor-pointer bg-slate-700 p-2 flex items-center justify-center" onClick={nextSlide}>
                    <ArrowForwardIosIcon fontSize="small" sx={{ color: '#FFF' }} />
                </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, index)=>{
                        return (
                            <div key={index} className={`w-2 h-2 bg-white rounded-full ${current === index ? "p-1" : "bg-opacity-50" }`}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
