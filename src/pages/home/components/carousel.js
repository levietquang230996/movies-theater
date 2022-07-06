import Slider from "react-slick";
import '../../../assets/styles/pages/home/carousel.scss';
import { fetchImageOriginal, fetchImageW500 } from "../../../api";
import { getVideo } from "../../../redux/actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const handleGetVideo = (id, getVideo) => {
    getVideo(id);
}

const Slide = ({ sld, getVideo }) => (
    <div className="">
        <div className="bg_carousel min-h-[650px] h-full xl:h-screen xl:max-h-[850px] z-10"
            style={{ backgroundImage: `url(${fetchImageOriginal(sld.backdrop_path)})` }} >
            <div className="bg_carousel--content md:absolute cursor-grab
                                container m-auto xl:max-w-screen-xl md:bottom-0 md:left-1/2  
                                md:-translate-x-1/2 flex flex-wrap md:flex-nowrap justify-center 
                                pt-20 md:pt-0 p-4 w-full md:w-4/5 md:h-2/3 z-30 relative">
                <div className="bg_carousel--describe w-full md:w-2/3 md:pr-6">
                    <div className="relative ">
                        <p className="bg_carousel--title text-2xl md:text-5xl font-bold">
                            {sld.original_title}
                        </p>
                        <p className="bg_carousel--overview text-md my-4 md:my-12">
                            {sld.overview}
                        </p>
                        <button className="bg_carousel--btnDetail my-6 md:my-4 py-1 rounded-full cursor-pointer
                                            px-9 md:px-14 duration-150 ease-linear font-bold tracking-wider">
                            <Link to={`/movie/${sld.id}`}>Detail</Link>
                        </button>
                        <button
                            onClick={() => handleGetVideo(sld.id, getVideo)}
                            className="bg_carousel--btnTrailer md:ml-4 py-1 rounded-full 
                                            px-9 md:px-14 ml-2 hover:text-white hover:border-white duration-150 ease-linear 
                                            font-bold tracking-wider border-2 border-solid border-white">
                            Trailer
                        </button>
                    </div>
                </div>

                <div className="bg_carousel--subImage   w-full md:w-1/3 p-2">
                    <img className="rounded-lg w-72 mt-8 md:mt-0 m-auto md:m-0 "
                        alt=""
                        src={`${fetchImageW500(sld.poster_path)}`} />
                </div>
            </div>
            {/* BLUR LAYOUT */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 cursor-grab z-20" />
        </div>
    </div>
)

const DisplayNoneArrow = (props) => <div style={{ ...props.style, display: "none" }} />

const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 900,
    nextArrow: <DisplayNoneArrow />,
    prevArrow: <DisplayNoneArrow />
};

function Carousel({ listMovies, getVideo }) {
    return (
        <div className="bg-black text-white bg_carousel min-h-[650px] h-full xl:h-screen xl:max-h-[850px]">
            <Slider {...settings} >
                {listMovies.map((sld, i) => i < 10 ?
                    <Slide key={i} getVideo={getVideo} sld={sld} /> : null)}
            </Slider>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        videos: state.movie.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideo: (id) => dispatch(getVideo(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);