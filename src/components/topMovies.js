import Slider from "react-slick";
import { fetchImageW500 } from "../api";
import '../assets/styles/components/topMovies.scss';

const DisplayNoneArrow = (props) => <div style={{ ...props.style, display: "none" }} />

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,

    className: "py-6",
    nextArrow: <DisplayNoneArrow />,
    prevArrow: <DisplayNoneArrow />,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const FiveStar = [1, 2, 3, 4, 5].map(j => <i key={j} className='bx bxs-star' />);

function TopMovies({ listMovies, name }) {

    return (
        <div className="home--listFilm bg-black text-white">
            <div className="container mx-auto pt-14 px-4 xl:max-w-screen-xl">

                <p className="text-lg"> {name} Movies {FiveStar} </p>
                {/* LIST MOVIES */}

                <Slider {...settings}>
                    {listMovies.map((movie, i) =>
                        <div key={i} className="p-3">
                            <div className="home--listFilm__image w-full cursor-pointer relative bx transition">
                                <img className="rounded transition"
                                    alt="movie"
                                    src={`${fetchImageW500(movie.backdrop_path)}`}
                                />
                            </div>
                            <p className="font-bold text-center mt-3 cursor-pointer">{movie.original_title}</p>
                        </div>
                    )}
                </Slider>

            </div>

        </div>
    );
}

export default TopMovies;