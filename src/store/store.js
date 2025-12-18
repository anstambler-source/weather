import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {rootReducer} from "../reducer/rootReducer.js";

const initialState = {
    message: 'Enter city name',
    weather: {},
}


export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));