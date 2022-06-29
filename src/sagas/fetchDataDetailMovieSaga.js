import axios from "axios";
import { fetchVideos } from "../api";
import { getVideosSuccess } from "../redux/actions";
import { types } from "../redux/types";
import { takeEvery, call, put } from "redux-saga/effects";


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

export function* watchFetchDataDetailMovieSaga() {
    yield takeEvery(types.GET_VIDEOS, ayscFetchVideosMovie)
}