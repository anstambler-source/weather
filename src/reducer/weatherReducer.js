import {SET_WEATHER} from "../actions/accountActions.js";

export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weather: action.payload}
        default:
            return state;
        }
    }