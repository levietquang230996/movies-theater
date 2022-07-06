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

// GET A VIDEO
export function getVideo(payload) {
    return {
        type: types.GET_VIDEO_MOVIE,
        payload
    }
}
export function getVideoSuccess(payload) {
    return {
        type: types.GET_VIDEO_MOVIE_SUCCESS,
        payload
    }
}

// GET LIST VIDEO
export function getVideos(payload) {
    return {
        type: types.GET_VIDEOS_MOVIE,
        payload
    }
}
export function getVideosSuccess(payload) {
    return {
        type: types.GET_VIDEOS_MOVIE_SUCCESS,
        payload
    }
}

export function getInfoMovie(payload) {
    return {
        type: types.GET_INFO_MOVIE,
        payload
    }
}

export function getInfoMovieSuccess(payload) {
    return {
        type: types.GET_INFO_MOVIE_SUCCESS,
        payload
    }
}

export function getCreditsMovie(payload) {
    return {
        type: types.GET_CREDITS_MOVIE,
        payload
    }
}

export function getCreditsMovieSuccess(payload) {
    return {
        type: types.GET_CREDITS_MOVIE_SUCCESS,
        payload
    }
}

