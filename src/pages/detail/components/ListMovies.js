import Slider from "react-slick";
import { fetchImageW500 } from "../../../api";

function ListMovies({ popularMovies }) {
    const DisplayNoneArrow = (props) => <div style={{ ...props.style, display: "none" }} />

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,

        className: "py-6",
        nextArrow: <DisplayNoneArrow />,
        prevArrow: <DisplayNoneArrow />,
        slidesToShow: 6,
        slidesToScroll: 2,
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
    return (
        <div className="container m-auto xl:max-w-screen-xl p-4">
            <p className="text-2xl font-bold mb-10 text-white"> Same Movies </p>
            <Slider {...settings}>
                {popularMovies.map((movie, i) =>
                    <div key={i} className="p-3">
                        <div className=" w-full cursor-pointer relative bx transition">
                            <img className="rounded transition"
                                alt="movie"
                                src={`${fetchImageW500(movie.poster_path)}`}
                            />
                        </div>
                        <p className="font-bold text-center mt-3 cursor-pointer text-white">{movie.original_title}</p>
                    </div>
                )}
            </Slider>
        </div>
    );
}

export default ListMovies;