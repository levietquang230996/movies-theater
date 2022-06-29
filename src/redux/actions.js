import { types } from "./types";

export function getListPopularMovies() {
    return {
        type: types.GET_LIST_POPULAR_MOVIES

    }
}

export function getListPopularMoviesSuccess(payload) {
    return {
        type: types.GET_LIST_POPULAR_MOVIES_SUCCESS,
        payload
    }
}

export function getListTopRateMovies() {
    return {
        type: types.GET_LIST_TOPRATE_MOVIES

    }
}

export function getListTopRateMoviesSuccess(payload) {
    return {
        type: types.GET_LIST_TOPRATE_MOVIES_SUCCESS,
        payload
    }
}

export function getListUpcomingMovies() {
    return {
        type: types.GET_LIST_UPCOMING_MOVIES

    }
}

export function getListUpcomingMoviesSuccess(payload) {
    return {
        type: types.GET_LIST_UPCOMING_MOVIES_SUCCESS,
        payload
    }
}

export function getVideos(payload) {
    return {
        type: types.GET_VIDEOS,
        payload
    }
}

export function getVideosSuccess(payload) {
    return {
        type: types.GET_VIDEOS_SUCCESS,
        payload
    }
}

