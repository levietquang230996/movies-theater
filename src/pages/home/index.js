import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Header from './components/header';
import Carousel from './components/carousel';
import TopMovies from './components/topMovies';
import '../../assets/styles/globalStyles.scss';
import { getListPopularMovies, getListTopRateMovies, getListUpcomingMovies } from '../../redux/actions';
import Footer from './components/footer';
import Loading from './components/loading';


function Home({
    getListPopularMovies,
    popularMovies,
    getListTopRateMovies,
    topRateMovies,
    getListUpcomingMovies,
    upcomingMovies,
    loading }) {

    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        getListPopularMovies();
        getListTopRateMovies();
        getListUpcomingMovies();
    }, [])

    if (!loading) {
        setTimeout(() => {
            setShowLoading(false);
        }, 1000)
    }

    return (
        <React.Fragment>
            <div className='relative'>

                {/* HEADER */}
                <Header />

                {/* CAROUSEL */}
                <Carousel listMovies={popularMovies} />

                {/* LISTFILM */}
                <TopMovies listMovies={popularMovies} name={'Popular'} />

                {/* LISTFILM */}
                <TopMovies listMovies={topRateMovies} name={'Top Rate'} />

                {/* LISTFILM */}
                <TopMovies listMovies={upcomingMovies} name={'Upcoming'} />

                {/* FOOTER */}
                <Footer />

                {/* LOADING */}
                {showLoading && <Loading />}
            </div>

        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading,
        popularMovies: state.movies.popularMovies,
        topRateMovies: state.movies.topRateMovies,
        upcomingMovies: state.movies.upcomingMovies,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListPopularMovies: () => dispatch(getListPopularMovies()),
        getListTopRateMovies: () => dispatch(getListTopRateMovies()),
        getListUpcomingMovies: () => dispatch(getListUpcomingMovies()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
