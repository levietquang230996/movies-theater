import { SET_FILMS, CHANGE_TYPE } from './constants'

const initialState = {
    results: [],
    default: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                results: action.payload,
                default: action.payload
            };
        // case SET_DEFAULT:
        //     return {
        //         ...state,
        //         results: state.default
        //     };
        case CHANGE_TYPE:
            const data =
                action.payload === 0 ?
                    state.default :
                    state.default.filter(film => film.genre_ids.includes(action.payload))
            return {
                ...state,
                results: data
            };
        default:
            return state;
    }

}

export { initialState };
export default reducer;