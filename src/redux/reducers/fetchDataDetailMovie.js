import Swal from "sweetalert2";
import { types } from "../types"

const initialState = {
    videos: ''
}

const fetchDataDetailMovie = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_VIDEOS:
            return {
                ...state
            }
        case types.GET_VIDEOS_SUCCESS:
            const videos = action.payload.data.results;
            Swal.fire({
                html:
                    `<iframe width="100%" height="350" 
                    src="https://www.youtube.com/embed/${videos[0].key}" />`,
                showConfirmButton: false,
                padding: '10px',
                width: 700
            })
            return {
                ...state,
                videos
            }
        default:
            return state;
    }
}


export default fetchDataDetailMovie;
