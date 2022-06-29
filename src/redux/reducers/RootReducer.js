import { combineReducers } from 'redux';
import { fetchDataMovies } from '../reducers/fetchDataMovies';
import fetchDataDetailMovie from './fetchDataDetailMovie';

const RootReducer = combineReducers({
    movies: fetchDataMovies,
    movie: fetchDataDetailMovie
});
export default RootReducer;