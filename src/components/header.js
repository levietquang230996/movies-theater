import React, { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
    const [offset, setOffset] = useState(0);
    const [bgTransparent, setBgTransparent] = useState(true);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // change background header
        window.pageYOffset < 50 ? setBgTransparent(true) : setBgTransparent(false);

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    return (
        <React.Fragment>
            <div className={`movie__header text-white fixed top-0 w-full z-30
            ${bgTransparent ? ' bg-transparent' : ' bg-black bg-opacity-60'}`}>
                <div className="container m-auto xl:max-w-screen-xl p-4 flex justify-between">
                    <div className="movie__header-logo font-bold text-lg md:text-2xl">
                        Movies <i className='bx bx-camera-movie text-[18px] md:text-[23px]'></i>
                    </div>
                    <div className="movie__header-logo grid grid-cols-3 text-center">
                        <div className="px-1 md:px-2">
                            <span className="cursor-pointer font-bold text-lg md:text-2xl hover:text-red-500">Home</span>
                        </div>
                        <div className="px-1 md:px-2">
                            <span className="cursor-pointer font-bold text-lg md:text-2xl hover:text-red-500">Movies</span>
                        </div>
                        <div className="px-1 md:px-2">
                            <span className="cursor-pointer font-bold text-lg md:text-2xl hover:text-red-500">TV Series</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default memo(Header);