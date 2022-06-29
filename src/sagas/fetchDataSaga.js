import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';
import { types } from '../redux/types';
import { getListUpcomingMoviesSuccess, getListPopularMoviesSuccess, getListTopRateMoviesSuccess } from "../redux/actions";
import { fetchMovies } from "../api";


function* ayscFetchPopularMovies() {
    try {
        const url = fetchMovies('popular');
        const response = yield call(() => axios.get(url));
        yield put(getListPopularMoviesSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

function* ayscFetchTopRateMovies() {
    try {
        const url = fetchMovies('top_rated');
        const response = yield call(() => axios.get(url));
        yield put(getListTopRateMoviesSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

function* ayscFetchUpcomingtMovies() {
    try {
        const url = fetchMovies('upcoming');
        const response = yield call(() => axios.get(url));
        yield put(getListUpcomingMoviesSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}


export function* watchFetchDataMoviesSaga() {
    yield takeEvery(types.GET_LIST_POPULAR_MOVIES, ayscFetchPopularMovies)
    yield takeEvery(types.GET_LIST_TOPRATE_MOVIES, ayscFetchTopRateMovies)
    yield takeEvery(types.GET_LIST_UPCOMING_MOVIES, ayscFetchUpcomingtMovies)
}