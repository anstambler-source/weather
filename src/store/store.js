import {applyMiddleware, legacy_createStore as createStore} from "redux";
import logger from "redux-logger";
import {thunk} from "redux-thunk";
import {accountReducer} from "../reducer/accountReducer.js";

const initialState = {
    message: 'Enter city name',
    weather: {
        // country: '',
        // city: '',
        // temp: '',
        // pressure: '',
        // sunset: ''
    }
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk));