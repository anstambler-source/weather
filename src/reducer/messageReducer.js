import {SET_MESSAGE} from "../actions/accountActions.js";

const defaultState = {
    message: 'Enter city name',
}

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state
    }
}