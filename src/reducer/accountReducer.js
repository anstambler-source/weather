import {SET_MESSAGE, SET_WEATHER} from "../actions/accountActions.js";



export const accountReducer = (state, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload}
        case SET_WEATHER:
            return {...state, weather: action.payload}
        default:
            return state
    }
}