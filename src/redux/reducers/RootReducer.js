import { combineReducers } from 'redux';
import { fetchDataMovies } from '../reducers/fetchDataReducer';

const RootReducer = combineReducers({
    movies: fetchDataMovies
});
export default RootReducer;