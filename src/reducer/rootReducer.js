import {messageReducer} from "./messageReducer.js";
import {weatherReducer} from "./weatherReducer.js";
import {combineReducers} from "redux";


export const rootReducer = combineReducers( {
        message: messageReducer,
        weather: weatherReducer,
    })