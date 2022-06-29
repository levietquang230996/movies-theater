import { all } from 'redux-saga/effects';
import { watchFetchDataDetailMovieSaga } from './fetchDataDetailMovieSaga';

import { watchFetchDataMoviesSaga } from './fetchDataSaga';

export default function* RootSaga() {

    yield all([
        watchFetchDataMoviesSaga(),
        watchFetchDataDetailMovieSaga()
    ])
}