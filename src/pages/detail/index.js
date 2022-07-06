import Header from "../home/components/header";
import Discribe from "./components/Discribe";
import Videos from "./components/Videos";
import '../../assets/styles/pages/detail/index.scss';
import { useParams } from "react-router-dom";
import { getCreditsMovie, getInfoMovie, getListPopularMovies, getVideos } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import ListMovies from "./components/ListMovies";
import Footer from "../home/components/footer";

function DetailMovie(
    { videos, info, credits, popularMovies,
        getInfoMovie, getCreditsMovie, getVideos, getListPopularMovies
    }) {

    const { id } = useParams();

    useEffect(() => {
        getInfoMovie(id);
        getCreditsMovie(id);
        getVideos(id);
        getListPopularMovies();
    }, [])
    return (
        <div className="relative bg-black opacity-90">
            <Header />
            <Discribe info={info} credits={credits} />
            <Videos videos={videos} />
            <ListMovies popularMovies={popularMovies} />
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        videos: state.movie.videos,
        credits: state.movie.credits,
        info: state.movie.info,
        popularMovies: state.movies.popularMovies,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoMovie: (id) => dispatch(getInfoMovie(id)),
        getCreditsMovie: (id) => dispatch(getCreditsMovie(id)),
        getVideos: (id) => dispatch(getVideos(id)),
        getListPopularMovies: () => dispatch(getListPopularMovies()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);