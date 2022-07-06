function Discribe({ info, credits }) {

    return (
        <div className="text-white min-h-[650px] h-full xl:h-screen xl:max-h-[850px] relative bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.backdrop_path})` }}>
            <div className="detail__contain pt-44 w-7/12 grid grid-cols-3 gap-5 z-30 absolute top-0 left-1/2 -translate-x-1/2">
                <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
                    className=" w-full rounded-xl " alt="movie" />
                <div className="col-span-2 ">
                    <p className="text-5xl mb-5">{info.title}</p>
                    <div className="flex">
                        {info.genres && info.genres.map(gen => (
                            <span key={gen.id} className="border-2 border-white border-solid 
                        rounded-full text-sm font-semibold pb-1 px-6 mr-4 mb-5">{gen.name}</span>
                        ))}
                    </div>
                    <p className="text-md mb-7"> {info.overview}</p>
                    <p className="text-xl font-bold"> Casts</p>
                    <div className="flex" >
                        {credits && credits.map((cast, i) =>
                            i < 5 ? (
                                <div key={i} className="w-[110px] p-1">
                                    <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                                        className="w-full rounded" alt="cast" />
                                    <p className="text-md text-center">{cast.name} </p>
                                </div>
                            ) : null)}


                    </div>

                </div>
            </div>
            <div className="detail__bgShape absolute top-0 left-0 w-full h-full z-20" />
        </div>
    );
}

export default Discribe;