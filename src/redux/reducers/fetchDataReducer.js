import { types } from './../types';

const initialState = {
    popularMovies: [],
    topRateMovies: [],
    upcomingMovies: [],
}

const fetchDataMovies = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_POPULAR_MOVIES:
            return {
                ...state,
            };
        case types.GET_LIST_POPULAR_MOVIES_SUCCESS:
            const popular = action.payload.data.results
            return {
                ...state,
                popularMovies: popular
            };
        case types.GET_LIST_TOPRATE_MOVIES:
            return {
                ...state,
            };
        case types.GET_LIST_TOPRATE_MOVIES_SUCCESS:
            const topRate = action.payload.data.results
            return {
                ...state,
                topRateMovies: topRate
            };
        case types.GET_LIST_UPCOMING_MOVIES:
            return {
                ...state,
            };
        case types.GET_LIST_UPCOMING_MOVIES_SUCCESS:
            const upcoming = action.payload.data.results
            return {
                ...state,
                upcomingMovies: upcoming
            };
        default:
            return state;
    }

}
// export { initialState };
export { fetchDataMovies };