import { SET_FILMS } from './constants';
import { CHANGE_TYPE } from './constants';
import { SET_DEFAULT } from './constants';

export const setFilm = (payload) => ({
    type: SET_FILMS,
    payload
});

export const setDefault = () => ({
    type: SET_DEFAULT
});


export const changeType = (payload) => ({
    type: CHANGE_TYPE,
    payload
});