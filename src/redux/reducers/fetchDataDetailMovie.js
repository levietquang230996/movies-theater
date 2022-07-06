import Swal from "sweetalert2";
import { types } from "../types"

const initialState = {
    videos: '',
    info: [],
    credits: []
}

const fetchDataDetailMovie = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_VIDEO_MOVIE:
            return {
                ...state
            }
        case types.GET_VIDEO_MOVIE_SUCCESS:
            const video = action.payload.data.results;
            console.log(video);
            Swal.fire({
                html:
                    `<iframe width="100%" height="350" 
                    src="https://www.youtube.com/embed/${video[0].key}" />`,
                showConfirmButton: false,
                padding: '10px',
                width: 700
            })
            return {
                ...state
            }
        case types.GET_VIDEOS_MOVIE:
            return {
                ...state
            }
        case types.GET_VIDEOS_MOVIE_SUCCESS:
            const videos = action.payload.data.results;
            return {
                ...state,
                videos
            }
        case types.GET_INFO_MOVIE:
            return {
                ...state
            }
        case types.GET_INFO_MOVIE_SUCCESS:
            const info = action.payload.data;
            return {
                ...state,
                info
            }
        case types.GET_CREDITS_MOVIE:
            return {
                ...state
            }
        case types.GET_CREDITS_MOVIE_SUCCESS:
            const credits = action.payload.data.cast;
            return {
                ...state,
                credits
            }
        default:
            return state;
    }
}


export default fetchDataDetailMovie;
