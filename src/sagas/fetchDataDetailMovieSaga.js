import axios from "axios";
import { fetchCreditsMovie, fetchInfoMovie, fetchVideos } from "../api";
import { getCreditsMovieSuccess, getInfoMovieSuccess, getVideosSuccess, getVideoSuccess } from "../redux/actions";
import { types } from "../redux/types";
import { takeEvery, call, put } from "redux-saga/effects";


function* ayscFetchVideoMovie(action) {
    try {
        const url = fetchVideos(action.payload + '');
        const response = yield call(() => axios.get(url));
        yield put(getVideoSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

function* ayscFetchVideosMovie(action) {
    try {
        const url = fetchVideos(action.payload + '');
        const response = yield call(() => axios.get(url));
        yield put(getVideosSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

function* ayscFetchInfoMovie(action) {
    try {
        const url = fetchInfoMovie(action.payload + '');
        const response = yield call(() => axios.get(url));
        yield put(getInfoMovieSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

function* ayscFetchCreditsMovie(action) {
    try {
        const url = fetchCreditsMovie(action.payload + '');
        const response = yield call(() => axios.get(url));
        yield put(getCreditsMovieSuccess(response))
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchFetchDataDetailMovieSaga() {
    yield takeEvery(types.GET_VIDEO_MOVIE, ayscFetchVideoMovie);
    yield takeEvery(types.GET_VIDEOS_MOVIE, ayscFetchVideosMovie);
    yield takeEvery(types.GET_INFO_MOVIE, ayscFetchInfoMovie);
    yield takeEvery(types.GET_CREDITS_MOVIE, ayscFetchCreditsMovie);
}