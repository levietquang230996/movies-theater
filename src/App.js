import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Header from './components/header';
import Carousel from './components/carousel';
import TopMovies from './components/topMovies';
import './assets/styles/globalStyles.scss';
import { getListPopularMovies, getListTopRateMovies, getListUpcomingMovies } from './redux/actions';
import Footer from './components/footer';


function App({
  getListPopularMovies,
  popularMovies,
  getListTopRateMovies,
  topRateMovies,
  getListUpcomingMovies,
  upcomingMovies }) {

  useEffect(() => {
    getListPopularMovies();
    getListTopRateMovies();
    getListUpcomingMovies();
  }, [])
  return (
    <React.Fragment>

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

    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
